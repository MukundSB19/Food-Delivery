import { products } from "@/data/product";

export function resolveProductById(productId: number | string) {
    const product = products.find((p) => p.id === productId);
    return product || null;
}
