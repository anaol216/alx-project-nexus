'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchCategories, setCategoryFilter, setSearchFilter, setSortOrder } from '../store/slices/productSlice';

export function FilterBar() {
    const dispatch = useAppDispatch();
    const { categories, filters, sort } = useAppSelector((state) => state.products);
    const [searchInput, setSearchInput] = useState(filters.search);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearchFilter(searchInput));
        }, 300);

        return () => clearTimeout(timer);
    }, [searchInput, dispatch]);

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <select
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize"
                    value={filters.category}
                    onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
                <span className="text-gray-600 text-sm font-medium">Sort by Price:</span>
                <select
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sort}
                    onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc' | ''))}
                >
                    <option value="">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
        </div>
    );
}
