# Dynamic E-Commerce Product Catalog

A modern, feature-rich e-commerce product catalog built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. This application provides a seamless shopping experience with advanced filtering, sorting, cart management, and responsive design.

![Project Banner](https://img.shields.io/badge/Next.js-15.0.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.5.0-purple?style=for-the-badge&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Core Functionality
- **Product Catalog**: Browse products fetched from FakeStore API
- **Advanced Search**: Real-time search with 300ms debouncing across product titles and categories
- **Category Filtering**: Filter products by category with case-insensitive matching
- **Price Sorting**: Sort products by price (ascending/descending)
- **Pagination**: Client-side pagination with 8 items per page
- **Shopping Cart**: Full cart management with add, remove, and quantity updates
- **Responsive Design**: Mobile-first design that works on all devices

### User Interface
- **Home Page**: Hero section with stats and featured categories
- **Products Page**: Grid layout with filtering and sorting controls
- **Wishlist Page**: Save favorite items for later
- **Settings Page**: User preferences and account management
- **Cart Drawer**: Slide-in cart with blur overlay effect
- **Navigation**: Sidebar navigation with active state highlighting

### Technical Features
- **State Management**: Redux Toolkit for global state
- **Type Safety**: Full TypeScript implementation
- **Performance**: Debounced search and optimized re-renders
- **Modern UI**: Tailwind CSS with custom components
- **Icons**: Lucide React for consistent iconography

## 📋 Table of Contents

- [Demo](#-demo)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [Features in Detail](#-features-in-detail)
- [API Integration](#-api-integration)
- [State Management](#-state-management)
- [Contributing](#-contributing)
- [License](#-license)

## 🎥 Demo

### Live Demo
- **Deployment**: [View on Vercel](#) *(Add your deployment link)*
- **CodeSandbox**: [Open in CodeSandbox](#) *(Add your sandbox link)*

### Video Walkthrough
*(Add a video demonstration of your application)*

## 📸 Screenshots

### Home Page
![Home Page](./docs/screenshots/home.png)

### Products Catalog
![Products Page](./docs/screenshots/products.png)

### Shopping Cart
![Cart Drawer](./docs/screenshots/cart.png)

### Mobile View
![Mobile Responsive](./docs/screenshots/mobile.png)

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.0.5** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety

### State Management
- **Redux Toolkit 2.5.0** - State management
- **React Redux 9.2.0** - React bindings for Redux

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS** - CSS processing

### UI Components
- **Lucide React** - Icon library

### API
- **FakeStore API** - Product data source

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
dynamic-c-commerce-product/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Redux Provider
│   ├── page.tsx                 # Main page with view routing
│   ├── globals.css              # Global styles
│   └── favicon.ico              # App icon
│
├── components/                   # React components
│   ├── views/                   # Page views
│   │   ├── HomeView.tsx        # Home page with hero and stats
│   │   ├── WishlistView.tsx    # Wishlist page
│   │   └── SettingsView.tsx    # Settings page
│   │
│   ├── constants/               # Constants and initial states
│   │   └── ProductState.tsx    # Initial product state
│   │
│   ├── Header.tsx              # App header with cart icon
│   ├── Sidebar.tsx             # Navigation sidebar
│   ├── Footer.tsx              # App footer
│   ├── FilterBar.tsx           # Search, filter, and sort controls
│   ├── ProductGrid.tsx         # Product grid layout
│   ├── ProductCard.tsx         # Individual product card
│   ├── Pagination.tsx          # Pagination controls
│   └── CartDrawer.tsx          # Shopping cart drawer
│
├── store/                       # Redux store
│   ├── slices/                 # Redux slices
│   │   ├── productSlice.ts    # Product state and actions
│   │   └── cartSlice.ts       # Cart state and actions
│   │
│   ├── store.ts                # Redux store configuration
│   ├── hooks.ts                # Typed Redux hooks
│   └── provider.tsx            # Redux Provider component
│
├── interfaces/                  # TypeScript interfaces
│   └── index.ts                # Product and state interfaces
│
├── public/                      # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── .gitignore                   # Git ignore rules
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for cloning the repository)

### Check Your Versions

```bash
node --version
npm --version
git --version
```

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/alx-project-nexus.git
cd alx-project-nexus/dynamic-c-commerce-product
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Run the Development Server

```bash
npm run dev
# or
yarn dev
```

### Step 4: Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 💻 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Environment Variables

Create a `.env.local` file in the root directory (optional):

```env
# API Configuration (if using custom API)
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

## 🎯 Features in Detail

### 1. Product Catalog

The product catalog displays items in a responsive grid layout with:
- Product image
- Title
- Category
- Rating and review count
- Price
- "Add to Cart" button

**Implementation**: `components/ProductGrid.tsx` and `components/ProductCard.tsx`

### 2. Search & Filtering

**Search**:
- Real-time search with 300ms debouncing
- Searches across product titles and categories
- Case-insensitive matching
- Automatic pagination reset

**Category Filter**:
- Dropdown with all available categories
- Case-insensitive category matching
- "All Categories" option to clear filter

**Price Sorting**:
- Default (no sorting)
- Low to High (ascending)
- High to Low (descending)

**Implementation**: `components/FilterBar.tsx` and `store/slices/productSlice.ts`

### 3. Shopping Cart

**Features**:
- Add products to cart
- Update quantities (+/-)
- Remove items
- Real-time total calculation
- Cart count badge in header
- Slide-in drawer with blur overlay

**Implementation**: 
- `components/CartDrawer.tsx`
- `store/slices/cartSlice.ts`
- `components/Header.tsx`

### 4. Navigation

**Sidebar Menu**:
- Home
- Products
- Wishlist
- Settings
- Category filtering (when on Products page)

**Features**:
- Active state highlighting
- Mobile-responsive with overlay
- Smooth animations

**Implementation**: `components/Sidebar.tsx`

### 5. Pagination

- Client-side pagination
- 8 items per page
- Previous/Next navigation
- Page number buttons
- Automatic reset on filter changes

**Implementation**: `components/Pagination.tsx`

## 🔌 API Integration

### FakeStore API

This project uses the [FakeStore API](https://fakestoreapi.com/) for product data.

**Endpoints Used**:

```typescript
// Fetch all products
GET https://fakestoreapi.com/products

// Fetch all categories
GET https://fakestoreapi.com/products/categories
```

**Data Structure**:

```typescript
interface Product {
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
```

**Implementation**: `store/slices/productSlice.ts`

## 🗃 State Management

### Redux Store Structure

```typescript
{
  products: {
    items: Product[],           // All products
    filteredItems: Product[],   // Filtered/sorted products
    categories: string[],       // Available categories
    loading: boolean,           // Loading state
    error: string | null,       // Error message
    filters: {
      category: string,         // Selected category
      search: string            // Search query
    },
    sort: 'asc' | 'desc' | '', // Sort order
    pagination: {
      currentPage: number,      // Current page
      itemsPerPage: number      // Items per page (8)
    }
  },
  cart: {
    items: CartItem[],          // Cart items with quantities
    isOpen: boolean             // Cart drawer state
  }
}
```

### Redux Actions

**Product Actions**:
- `fetchProducts()` - Async thunk to fetch products
- `fetchCategories()` - Async thunk to fetch categories
- `setCategoryFilter(category)` - Set category filter
- `setSearchFilter(query)` - Set search query
- `setSortOrder(order)` - Set sort order
- `setCurrentPage(page)` - Set current page

**Cart Actions**:
- `addToCart(product)` - Add product to cart
- `removeFromCart(id)` - Remove product from cart
- `updateQuantity({id, quantity})` - Update item quantity
- `toggleCart()` - Toggle cart drawer
- `closeCart()` - Close cart drawer

## 🎨 Styling

### Tailwind CSS Configuration

The project uses Tailwind CSS with custom configuration:

**Color Palette**:
- Primary: Blue (#2563EB)
- Success: Green
- Warning: Yellow
- Danger: Red (#EF4444)

**Responsive Breakpoints**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Custom Classes**:
- Blur overlay: `backdrop-blur-sm bg-white/30`
- Smooth transitions: `transition-all duration-300`
- Hover effects: `hover:shadow-lg`

## 🧪 Testing

### Manual Testing Checklist

- [ ] Products load correctly from API
- [ ] Search filters products in real-time
- [ ] Category filter works correctly
- [ ] Price sorting (asc/desc) works
- [ ] Pagination navigates correctly
- [ ] Add to cart updates count
- [ ] Cart drawer opens/closes
- [ ] Quantity updates work
- [ ] Remove from cart works
- [ ] Total price calculates correctly
- [ ] Responsive on mobile devices
- [ ] Navigation works across all views

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Configure build settings (auto-detected for Next.js)
5. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy to Netlify
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for providing the product data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact me at your.email@example.com

---

**Made with ❤️ using Next.js, TypeScript, and Redux Toolkit**
