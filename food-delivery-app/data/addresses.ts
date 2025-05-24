import { DeliveryAddress } from "@/types";

export const addresses: DeliveryAddress[] = [
  {
    id: "1",
    userId: "u1",
    label: "Home",
    addressLine:
      "Apartment 4B, The Elmwood Residences 782 Willow Lane Near Highland Park",
    city: "Austin, Texas",
    pincode: "787022",
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    type: "home",
    receiver: "Mr. John Matthews",
    number: "+91848484809",
  },
  {
    id: "2",
    userId: "u1",
    label: "Office",
    addressLine:
      " Flat 12, Parkview Court 14 Parkview Crescent, Opp. Barnes Common",
    city: "Putney",
    pincode: "4000101",
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    type: "office",
    receiver: "Ms. Emily Watson",
    number: "+91848443809",
  },
  {
    id: "3",
    userId: "u1",
    label: "Friend's house",
    addressLine:
      "123 Main Street, Downtown B-23, Orchid Residency, 5th Floor Off Veera Desai Road, Near Infiniti Mall",
    city: "Andheri West",
    pincode: "4000201",
    coordinates: {
      lat: 19.076,
      lng: 72.8777,
    },
    type: "friend's house",
    receiver: "Mr. Rajeev Mehta",
    number: "+91844554809",
  },
];
