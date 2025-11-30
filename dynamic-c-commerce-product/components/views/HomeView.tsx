import { ShoppingBag, TrendingUp, Star } from 'lucide-react';

interface HomeViewProps {
    onNavigate: (view: string, category?: string) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
    const handleShopNow = () => {
        onNavigate('products');
    };

    const handleCategoryClick = (category: string) => {
        onNavigate('products', category);
    };

    return (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to Project Nexus</h1>
                <p className="text-lg mb-6">Discover amazing products at unbeatable prices</p>
                <button
                    onClick={handleShopNow}
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                    Shop Now
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <ShoppingBag className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Total Products</p>
                            <p className="text-2xl font-bold text-gray-900">500+</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">New Arrivals</p>
                            <p className="text-2xl font-bold text-gray-900">50+</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <Star className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Top Rated</p>
                            <p className="text-2xl font-bold text-gray-900">100+</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer text-center capitalize"
                        >
                            <p className="font-medium text-gray-900">{category}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
