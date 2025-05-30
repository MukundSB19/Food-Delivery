import { Order, OrderStatus } from "@/types";

export const orders: Order[] = [
  {
    id: "o1",
    userId: "u1",
    items: [
      { productId: "1", quantity: 2 },
      //   { productId: "2", quantity: 2 },
      //   { productId: "3", quantity: 2 },
    ],
    total: 300,
    deliveryId: "d1",
    status: OrderStatus.Delivered,
    
    createdAt: "08:00 PM",
    updatedAt: "DKSFHVKSJ",
  },
  {
    id: "o2",
    userId: "u2",
    items: [
      { productId: "2", quantity: 2 },
      //   { productId: "2", quantity: 2 },
      //   { productId: "3", quantity: 2 },
    ],
    total: 300,
    deliveryId: "d2",
    status: OrderStatus.Delivered,
    
    createdAt: "08:00 PM",
    updatedAt: "DKSFHVKSJ",
  },
];
