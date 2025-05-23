import { DeliveryAddress } from "@/types";

export const addresses: DeliveryAddress[] = [
  {
    id: "1",
    userId: "u1",
    label: "Home",
    addressLine: "123 Main Street, Downtown",
    city: "Metro City",
    pincode: "403001",
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    type: "home",
  },
  {
    id: "2",
    userId: "u1",
    label: "Home",
    addressLine: "123 Main Street, Downtown",
    city: "Metro City",
    pincode: "4000101",
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    type: "office",
  },
  {
    id: "3",
    userId: "u1",
    label: "Home",
    addressLine: "123 Main Street, Downtown",
    city: "Metro City",
    pincode: "4000201",
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    type: "friend's house",
  },
];


