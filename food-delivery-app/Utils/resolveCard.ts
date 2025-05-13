// import { Product } from "@/types/foodDelivery";
// import { Ingredient } from "@/types/foodDelivery";
// import { CardContent } from "@/types/foodDelivery";

// export function resolveCard(id: number) {
//   const card = CardContent.find((c) => c.id === id);
//   if (!card) return null;

//   const product = Product.find((p) => p.id === card.productId);
//   const resolvedIngredients = Ingredient.filter((i) =>
//     card.ingredientIds.includes(i.id)
//   );

//   return { ...card, product, ingredients: resolvedIngredients };
// }
