import { cardContent } from "@/data/cardContent";
import { ingredients } from "@/data/ingredient";
import { products } from "@/data/product";

export function resolveCard(id: number) {
  const card = cardContent.find((c) => Number(c.id) === id);
  if (!card) return null;

  const product = products.find((p) => p.id === card.productId);
  const resolvedIngredients = ingredients.filter((i) =>
    card.ingredientIds.includes(i.id)
  );

  return { ...card, product, ingredients: resolvedIngredients };
}
