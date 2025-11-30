import { Heart } from 'lucide-react';

interface WishlistViewProps {
    onNavigate: (view: string) => void;
}

export function WishlistView({ onNavigate }: WishlistViewProps) {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
                <Heart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
                <p className="text-gray-600 mb-6">
                    Save your favorite items here to purchase them later.
                </p>
                <button
                    onClick={() => onNavigate('products')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Browse Products
                </button>
            </div>
        </div>
    );
}
