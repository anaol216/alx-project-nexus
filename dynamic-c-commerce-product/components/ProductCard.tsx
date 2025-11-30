import { Product } from '@/interfaces';
import { ProductCardProps } from '@/interfaces';
import { Star } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';

export function ProductCard({ product }: ProductCardProps) {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full p-4 flex items-center justify-center bg-gray-50">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2" title={product.title}>
                    {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
                <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                        {product.rating.rate} ({product.rating.count})
                    </span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button
                        onClick={handleAddToCart}
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
