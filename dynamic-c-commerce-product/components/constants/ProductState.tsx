import { ProductState } from '@/interfaces';


export const initialState: ProductState = {
    items: [],
    filteredItems: [],
    categories: [],
    loading: false,
    error: null,
    filters: {
        category: '',
        search: '',
    },
    sort: '',
    pagination: {
        currentPage: 1,
        itemsPerPage: 8,
    },
};
