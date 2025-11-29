'use client';

import { useState } from 'react';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { ProductGrid } from "../components/ProductGrid";
import { FilterBar } from "../components/FilterBar";
import { Pagination } from "../components/Pagination";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <FilterBar />
            <ProductGrid />
            <Pagination />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
