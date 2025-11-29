'use client';

import { Home, ShoppingBag, Heart, Settings, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCategoryFilter } from '../store/slices/productSlice';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const dispatch = useAppDispatch();
    const { categories, filters } = useAppSelector((state) => state.products);

    const handleCategoryClick = (category: string) => {
        dispatch(setCategoryFilter(category));
        if (window.innerWidth < 1024) {
            onClose();
        }
    };

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 left-0 h-screen bg-white shadow-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    } w-64`}
            >
                <div className="flex flex-col h-full">
                    {/* Close button for mobile */}
                    <div className="lg:hidden flex justify-end p-4">
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 overflow-y-auto">
                        <div className="space-y-6">
                            {/* Main Navigation */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Menu
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                        >
                                            <Home className="w-5 h-5" />
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                        >
                                            <ShoppingBag className="w-5 h-5" />
                                            <span>Products</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                        >
                                            <Heart className="w-5 h-5" />
                                            <span>Wishlist</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                        >
                                            <Settings className="w-5 h-5" />
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Categories
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <button
                                            onClick={() => handleCategoryClick('')}
                                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors capitalize ${filters.category === ''
                                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            All Products
                                        </button>
                                    </li>
                                    {categories.map((category) => (
                                        <li key={category}>
                                            <button
                                                onClick={() => handleCategoryClick(category)}
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors capitalize ${filters.category === category
                                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    );
}
