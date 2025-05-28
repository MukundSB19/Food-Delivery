import { Order, OrderStatus } from "@/types";

export const orders:Order[] = [
    {
        id: "o1",
        userId: "u1",
        items: [
            { productId: "1", quantity: 2 },
            { productId: "4", quantity: 1 },
        ],
        total: 300,
        status: OrderStatus.Delivered,
        addressId: "1",
        createdAt:"08:00 PM",
        updatedAt:"DKSFHVKSJ",
    },
];
