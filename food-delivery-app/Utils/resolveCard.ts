import { restaurants } from "@/data";
import { products } from "@/data/product";

export function resolveProductById(productId: number | string) {
  const product = products.find((p) => p.id === productId);
  return product || null;
}

export function resolveRestaurantById(restaurantId: string | undefined) {
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  return restaurant || null;
}

// export function resolveDeliveryById(deliveryId: string) {
//   const delivery = delivery.find((r) => r.id === deliveryId);
//   return restaurant || null;
// }
