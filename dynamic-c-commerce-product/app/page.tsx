'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductGrid } from "@/components/ProductGrid";
import { FilterBar } from "@/components/FilterBar";
import { Pagination } from "@/components/Pagination";
import { HomeView } from "@/components/views/HomeView";
import { WishlistView } from "@/components/views/WishlistView";
import { SettingsView } from "@/components/views/SettingsView";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCategoryFilter } from '@/store/slices/productSlice';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('home');
  const dispatch = useAppDispatch();
  const { isOpen: cartOpen } = useAppSelector((state) => state.cart);

  const handleNavigate = (view: string, category?: string) => {
    setActiveView(view);
    if (view === 'products' && category) {
      dispatch(setCategoryFilter(category));
    } else if (view === 'products' && !category) {
      dispatch(setCategoryFilter(''));
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'products':
        return (
          <>
            <FilterBar />
            <ProductGrid />
            <Pagination />
          </>
        );
      case 'wishlist':
        return <WishlistView onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsView />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <CartDrawer isOpen={cartOpen} />

      <div className="flex flex-1">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeView={activeView}
          onViewChange={setActiveView}
        />

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
