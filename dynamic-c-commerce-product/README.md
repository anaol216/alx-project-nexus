# Project Nexus - Dynamic E-Commerce Product Catalog

This project is a dynamic e-commerce product catalog built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. It features data fetching from FakeStoreAPI, product filtering, sorting, and pagination.

## Features

- **Dynamic Data Integration**: Fetches products and categories from [FakeStoreAPI](https://fakestoreapi.com/).
- **Product Listing**: Displays products in a responsive grid layout.
- **Product Details**: Shows product image, title, price, category, and rating.
- **Filtering**: Filter products by category.
- **Sorting**: Sort products by price (Low to High, High to Low).
- **Search**: Real-time search by product title.
- **Pagination**: Client-side pagination for easy navigation.
- **Responsive Design**: Fully responsive UI optimized for mobile, tablet, and desktop.
- **State Management**: Uses Redux Toolkit for efficient state management.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Icons**: Lucide React

## Getting Started

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `app/`: Next.js App Router pages.
- `components/`: Reusable UI components (ProductCard, FilterBar, Pagination).
- `store/`: Redux store configuration and slices.
- `types/`: TypeScript interfaces.

## Deployment

This application is ready to be deployed on Vercel or Netlify.
