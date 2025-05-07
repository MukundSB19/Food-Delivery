import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageSourcePropType } from "react-native";

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?:ImageSourcePropType;
};

type CartState = {
    items: CartItem[];
};

type CartAction =
    | { type: "INITIALIZE_CART"; payload: CartItem[] }
    | { type: "ADD_TO_CART"; payload: CartItem }
    | { type: "REMOVE_FROM_CART"; payload: { id: string } }
    | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
    | { type: "CLEAR_CART" };

const initialState: CartState = {
    items: [],
};

const CartContext = createContext<{
    state: CartState;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalPrice: () => number;
}>({
    state: initialState,
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    totalPrice: () => 0,
});

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "INITIALIZE_CART":
            return { ...state, items: action.payload };
        case "ADD_TO_CART": {
            const existing = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existing) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity + action.payload.quantity,
                              }
                            : item
                    ),
                };
            }
            return { ...state, items: [...state.items, action.payload] };
        }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case "CLEAR_CART":
            return { ...state, items: [] };
        default:
            return state;
    }
}

const CART_STORAGE_KEY = "@cart_data";

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load from AsyncStorage
useEffect(() => {
    let isMounted = true;

    const loadCart = async () => {
        try {
            const savedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
            if (savedCart && isMounted) {
                const parsed = JSON.parse(savedCart) as CartItem[];
                dispatch({ type: "INITIALIZE_CART", payload: parsed });
            }
        } catch (err) {
            console.error("Error parsing saved cart data", err);
        }
    };

    loadCart();

    return () => {
        isMounted = false;
    };
}, []);


    // Save to AsyncStorage
    useEffect(() => {
        AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    }, [state.items]);

    const addToCart = (item: CartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    const removeFromCart = (id: string) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    const updateQuantity = (id: string, quantity: number) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const totalPrice = () => {
        return state.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                state,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
