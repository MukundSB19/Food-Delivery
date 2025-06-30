import { ImageSourcePropType } from "react-native";
import { User, CartItem } from "./models";

export interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}
export type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: (role: "user" | "admin") => void;
  logOut: () => void;
  role: "user" | "admin" | "guest";
  setRole: (role: "user" | "admin" | "guest") => void;
};
