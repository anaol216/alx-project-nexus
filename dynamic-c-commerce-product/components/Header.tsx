'use client';

import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleCart } from '../store/slices/cartSlice';

interface HeaderProps {
    onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);
    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const handleCartClick = () => {
        dispatch(toggleCart());
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <button
                        onClick={onMenuToggle}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600">Project Nexus</h1>
                    </div>

                    {/* Search bar - hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 relative">
                            <User className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={handleCartClick}
                            className="p-2 rounded-full hover:bg-gray-100 relative"
                        >
                            <ShoppingCart className="w-6 h-6 text-gray-600" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile search bar */}
                <div className="md:hidden pb-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
}
