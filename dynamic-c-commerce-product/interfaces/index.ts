export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}


export interface ProductCardProps {
    product: Product;
}


export interface ProductState {
    items: Product[];
    filteredItems: Product[];
    categories: string[];
    loading: boolean;
    error: string | null;
    filters: {
        category: string;
        search: string;
    };
    sort: 'asc' | 'desc' | '';
    pagination: {
        currentPage: number;
        itemsPerPage: number;
    };
}
