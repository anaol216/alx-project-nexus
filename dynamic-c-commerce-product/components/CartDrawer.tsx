'use client';

import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeFromCart, updateQuantity, closeCart } from '../store/slices/cartSlice';

interface CartDrawerProps {
    isOpen: boolean;
}

export function CartDrawer({ isOpen }: CartDrawerProps) {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleClose = () => {
        dispatch(closeCart());
    };

    const handleUpdateQuantity = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            {/* Overlay with blur effect */}
            {isOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50"
                    onClick={handleClose}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-xl font-bold">Shopping Cart</h2>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <ShoppingBag className="w-16 h-16 mb-4" />
                                <p className="text-lg">Your cart is empty</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 border-b pb-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                                            <p className="text-blue-600 font-bold mt-1">${item.price.toFixed(2)}</p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleRemove(item.id)}
                                                    className="ml-auto text-red-500 text-sm hover:text-red-700"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t p-4 space-y-4">
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
