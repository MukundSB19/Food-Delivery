export type Address = {
  id: string;
  userId: string;
  label?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  addresses: Address[];
  cart?: Cart;
  orders: Order[];
  createdAt: string;
};

export type Restaurant = {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  address: Address;
  categories: Category[];
  menu: MenuItem[];
  rating?: number;
  deliveryFee: number;
  estimatedDeliveryTime?: string;
  isOpen: boolean;
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
  restaurantId: string;
  items: MenuItem[];
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  categoryId?: string;
  restaurantId: string;
  isAvailable: boolean;
};

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
};

export type CartItem = {
  id: string;
  menuItem: MenuItem;
  quantity: number;
};

export type Order = {
  id: string;
  userId: string;
  restaurantId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  address: Address;
  payment?: Payment;
};

export type OrderItem = {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  price: number;
};

export type Payment = {
  id: string;
  orderId: string;
  method: string;
  status: string;
  paidAt?: string;
};

export type Review = {
  id: string;
  userId: string;
  restaurantId: string;
  rating: number;
  comment?: string;
  createdAt: string;
};

export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  estimatedTime: string;
  image: string;
  image2: string;
}

export interface CardContent {
  id: number;
  productId: string;
  ingredientIds: string[];
}


export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PREPARING"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "CANCELLED";
