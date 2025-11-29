import { ProductGrid } from "../components/ProductGrid";
import { FilterBar } from "../components/FilterBar";
import { Pagination } from "../components/Pagination";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Project Nexus Store</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <FilterBar />
        <ProductGrid />
        <Pagination />
      </div>
    </main>
  );
}
