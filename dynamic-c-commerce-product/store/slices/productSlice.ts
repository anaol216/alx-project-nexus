import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '@/interfaces';
import { initialState } from '@/components/constants/ProductState';


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data as Product[];
    }
);

export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        return data as string[];
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategoryFilter(state, action: PayloadAction<string>) {
            state.filters.category = action.payload;
            state.pagination.currentPage = 1; // Reset to first page on filter change
            applyFiltersAndSort(state);
        },
        setSearchFilter(state, action: PayloadAction<string>) {
            state.filters.search = action.payload;
            state.pagination.currentPage = 1; // Reset to first page on search change
            applyFiltersAndSort(state);
        },
        setSortOrder(state, action: PayloadAction<'asc' | 'desc' | ''>) {
            state.sort = action.payload;
            applyFiltersAndSort(state);
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.pagination.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.items = action.payload;
                state.filteredItems = action.payload;
                applyFiltersAndSort(state); // Apply initial filters/sort if any
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.categories = action.payload;
            });
    },
});

const applyFiltersAndSort = (state: ProductState) => {
    let result = [...state.items];

    // Apply category filter
    if (state.filters.category) {
        result = result.filter((item) =>
            item.category.toLowerCase() === state.filters.category.toLowerCase()
        );
    }

    // Apply search filter (search in title and category)
    if (state.filters.search) {
        const query = state.filters.search.toLowerCase().trim();
        result = result.filter((item) =>
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
    }

    // Apply sorting
    if (state.sort) {
        result = [...result].sort((a, b) => {
            if (state.sort === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }

    state.filteredItems = result;
};

export const { setCategoryFilter, setSearchFilter, setSortOrder, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
