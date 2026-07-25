import { getFeaturedProducts, getRecentProducts } from "@/lib/db-queries";
import type { Product } from "@/lib/products";
import FeaturedProductsClient from "./FeaturedProductsClient";

export default async function FeaturedProducts() {
  let featured: Product[] = [];
  let newArrivals: Product[] = [];

  try {
    [featured, newArrivals] = await Promise.all([
      getFeaturedProducts(),
      getRecentProducts(8),
    ]);
  } catch {
    // DB unreachable — render section with empty arrays
  }

  return (
    <FeaturedProductsClient featured={featured} newArrivals={newArrivals} />
  );
}
