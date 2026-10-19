# Aurora Photography - React + Vite + Tailwind CSS Portfolio

A dark-themed photography portfolio website converted from HTML/CSS to React with Vite and Tailwind CSS. Features category filtering, like/favorite functionality, event booking system, and responsive design.

**Project by:** Housam Gammoudi

## Project Setup

### Prerequisites
- Node.js and npm installed

### Installation Commands

```bash
# Navigate to project directory
cd "C:\Users\starinfo\Downloads\alena-free-version\html c"

# Install dependencies (if not already installed)
npm install

# Start development server (with live reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
aurora-photography/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── favicon.svg             # Site favicon
│   └── images/                 # Portfolio images
│       ├── portfolio-thumb-1.jpg through portfolio-thumb-12.jpg
│       └── photographer.jpg
├── src/
│   ├── components/             # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LikeButton.jsx
│   │   ├── ProductCard.jsx
│   │   └── QuantityStepper.jsx
│   ├── data/                   # Single source of truth
│   │   ├── events.js
│   │   └── products.js
│   ├── hooks/                  # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Tailwind imports and custom styles
│   └── main.jsx                # React entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Complete File Contents

### `package.json`
```json
{
  "name": "aurora-photography",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.7"
  }
}
```

### `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Aurora Photography - Professional portrait and landscape photography based in Los Angeles" />
    <meta name="keywords" content="photography, portrait, landscape, Los Angeles, professional photographer" />
    <title>Aurora Photography | Portrait & Landscape Photography</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### `vite.config.js`
```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CHANGE THIS: Replace 'YOUR-REPO-NAME' with your actual GitHub repository name
  // Example: if your repo is 'username/aurora-photography', change to '/aurora-photography/'
  base: '/YOUR-REPO-NAME/',
})
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom design tokens from original CSS
        background: '#111111',
        surface: '#1c1c1c',
        'surface-hover': '#252525',
        text: '#f2f2f2',
        muted: '#9a9a9a',
        accent: '#d4a373',
        'accent-hover': '#c4935f',
        border: '#2a2a2a',
      },
      fontFamily: {
        // Inter for body text, Playfair Display for headings
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.2)',
        md: '0 4px 16px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        // Container widths from original CSS
        'container': '1200px',
        'container-xl': '1320px',
      },
      spacing: {
        // Custom spacing to match original design
        '80': '20rem',
      },
    },
  },
  plugins: [],
}
```

### `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `.gitignore`
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Dependencies
node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Credentials and sensitive data
credentials.json
*.pem
*.key
secrets/
```

### `.github/workflows/deploy.yml`
```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying html
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire dist folder
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### `src/main.jsx`
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `src/index.css`
```css
/* Import Google Fonts - must come first */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth scrolling and scroll padding for anchor links */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* Base styles */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Gallery item hover effects - lift and image zoom */
.gallery-item {
  background-color: #1c1c1c;
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

@media (min-width: 640px) {
  .gallery-item img {
    height: 300px;
  }
}

@media (min-width: 768px) {
  .gallery-item img {
    height: 400px;
  }
}

.gallery-item:hover img {
  transform: scale(1.08);
}

/* Gallery info padding */
.gallery-info {
  padding: 20px;
}

@media (min-width: 768px) {
  .gallery-info {
    padding: 24px;
  }
}

.gallery-info h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #f2f2f2;
  font-weight: 500;
}

@media (min-width: 768px) {
  .gallery-info h3 {
    font-size: 1.25rem;
  }
}

.gallery-info p {
  color: #9a9a9a;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Like button styling */
.like-button {
  margin-top: 16px;
  padding: 8px 16px;
  font-size: 0.875rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  border: 1px solid #2a2a2a;
  background-color: #1c1c1c;
  color: #f2f2f2;
  cursor: pointer;
}

.like-button:hover {
  background-color: #252525;
}

.like-button:focus {
  outline: 2px solid #d4a373;
  outline-offset: 2px;
}

.like-button[aria-pressed="true"] {
  background-color: #d4a373;
  color: #111111;
  border-color: #d4a373;
}

/* Quantity stepper styling */
.quantity-stepper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stepper-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  border: 1px solid #2a2a2a;
  color: #f2f2f2;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.stepper-btn:hover:not(:disabled) {
  background-color: #252525;
}

.stepper-btn:focus {
  outline: 2px solid #d4a373;
  outline-offset: 2px;
}

.stepper-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.stepper-value {
  width: 32px;
  text-align: center;
  font-weight: 500;
}

/* Visually hidden class for accessibility (screen reader only) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Container max-width with breakpoint for larger screens */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 1024px) {
  .container {
    padding: 0 96px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
```

### `src/data/products.js`
```javascript
// Gallery items data - single source of truth for portfolio
// Categories: Portrait, Landscape, Event, Commercial

export const products = [
  {
    id: 1,
    title: 'Ethereal Portraits',
    description: 'Capturing emotion through light and shadow',
    image: '/images/portfolio-thumb-1.jpg',
    alt: 'Ethereal portrait photography capturing emotion through dramatic lighting',
    category: 'Portrait',
    liked: false,
  },
  {
    id: 2,
    title: 'Urban Fashion',
    description: 'Modern fashion in the city',
    image: '/images/portfolio-thumb-2.jpg',
    alt: 'Urban fashion photography set in the city',
    category: 'Portrait',
    liked: false,
  },
  {
    id: 3,
    title: 'Natural Beauty',
    description: 'Serene landscapes',
    image: '/images/portfolio-thumb-3.jpg',
    alt: 'Serene natural landscape photography',
    category: 'Landscape',
    liked: false,
  },
  {
    id: 4,
    title: 'Special Events',
    description: 'Documenting celebrations',
    image: '/images/portfolio-thumb-4.jpg',
    alt: 'Special event photography documenting celebrations',
    category: 'Event',
    liked: false,
  },
  {
    id: 5,
    title: 'Brand Stories',
    description: 'Commercial photography',
    image: '/images/portfolio-thumb-5.jpg',
    alt: 'Commercial brand photography for businesses',
    category: 'Commercial',
    liked: false,
  },
  {
    id: 6,
    title: 'Artistic Vision',
    description: 'Creative compositions',
    image: '/images/portfolio-thumb-6.jpg',
    alt: 'Artistic creative photography compositions',
    category: 'Portrait',
    liked: false,
  },
  {
    id: 7,
    title: 'Lifestyle',
    description: 'Candid everyday moments',
    image: '/images/portfolio-thumb-7.jpg',
    alt: 'Lifestyle photography capturing candid everyday moments',
    category: 'Portrait',
    liked: false,
  },
  {
    id: 8,
    title: 'Character Study',
    description: 'Intimate portraits',
    image: '/images/portfolio-thumb-8.jpg',
    alt: 'Character study intimate portrait photography',
    category: 'Portrait',
    liked: false,
  },
  {
    id: 9,
    title: 'Architecture',
    description: 'Urban structures',
    image: '/images/portfolio-thumb-9.jpg',
    alt: 'Architecture photography of urban structures',
    category: 'Landscape',
    liked: false,
  },
  {
    id: 10,
    title: 'Nature',
    description: 'Wild beauty',
    image: '/images/portfolio-thumb-10.jpg',
    alt: 'Nature photography showcasing wild beauty',
    category: 'Landscape',
    liked: false,
  },
  {
    id: 11,
    title: 'Studio',
    description: 'Controlled lighting',
    image: '/images/portfolio-thumb-11.jpg',
    alt: 'Studio photography with controlled lighting',
    category: 'Commercial',
    liked: false,
  },
  {
    id: 12,
    title: 'Travel',
    description: 'Global perspectives',
    image: '/images/portfolio-thumb-12.jpg',
    alt: 'Travel photography from around the world',
    category: 'Landscape',
    liked: false,
  },
];
```

### `src/data/events.js`
```javascript
// Upcoming events data - single source of truth for events/booking section

export const events = [
  {
    id: 1,
    title: 'Sunset Portrait Walk',
    date: '2026-11-15',
    location: 'Santa Monica Pier, Los Angeles',
    price: 75,
    spotsAvailable: 12,
    description: 'Join us for a golden hour photography walk focused on portrait techniques in natural light.',
  },
  {
    id: 2,
    title: 'Live Charcoal Drawing Night',
    date: '2026-11-22',
    location: 'Downtown Arts Center, LA',
    price: 50,
    spotsAvailable: 8,
    description: 'An evening of live charcoal sketching and creative exploration. All materials provided.',
  },
  {
    id: 3,
    title: 'Nature Photo Walk',
    date: '2026-12-05',
    location: 'Griffith Park, Los Angeles',
    price: 60,
    spotsAvailable: 15,
    description: 'Explore the beauty of nature through your lens. Perfect for landscape photography enthusiasts.',
  },
  {
    id: 4,
    title: 'Urban Night Photography',
    date: '2026-12-12',
    location: 'Downtown LA Skyline',
    price: 85,
    spotsAvailable: 10,
    description: 'Learn night photography techniques in the vibrant downtown LA setting.',
  },
];
```

### `src/hooks/useLocalStorage.js`
```javascript
import { useState, useEffect } from 'react';

/**
 * Custom hook for persisting state to localStorage
 * 
 * This allows data to survive page refreshes without a backend.
 * In a real application, you would use a backend (Node.js + database)
 * to share data between users and devices.
 * 
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value if no saved data exists
 * @returns {[any, Function]} - The current value and a setter function
 */
function useLocalStorage(key, initialValue) {
  // Initialize state from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Update localStorage whenever state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
```

### `src/components/LikeButton.jsx`
```javascript
import React from 'react';

/**
 * LikeButton - A reusable like/favorite button component
 * Uses conditional rendering to show "Save" or "Saved" based on liked state
 * 
 * @param {boolean} liked - Whether the item is currently liked
 * @param {Function} onToggle - Function to call when button is clicked
 */
function LikeButton({ liked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="like-button"
      aria-label={liked ? 'Remove from saved' : 'Save to favorites'}
      aria-pressed={liked}
    >
      {/* Conditional rendering: Show different label based on liked state */}
      {liked ? 'Saved' : 'Save'}
    </button>
  );
}

export default LikeButton;
```

### `src/components/QuantityStepper.jsx`
```javascript
import React from 'react';

/**
 * QuantityStepper - A reusable quantity stepper with + and - buttons
 * This is a controlled component: the value lives in the parent's state
 * 
 * @param {number} value - Current quantity value
 * @param {Function} onChange - Function to call when quantity changes
 * @param {number} min - Minimum allowed value (default: 0)
 * @param {number} max - Maximum allowed value (default: 99)
 */
function QuantityStepper({ value, onChange, min = 0, max = 99 }) {
  // Handle increment
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  // Handle decrement
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="quantity-stepper">
      <button
        onClick={handleDecrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="stepper-btn"
      >
        -
      </button>
      <span className="stepper-value">{value}</span>
      <button
        onClick={handleIncrement}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="stepper-btn"
      >
        +
      </button>
    </div>
  );
}

export default QuantityStepper;
```

### `src/components/ProductCard.jsx`
```javascript
import React from 'react';
import LikeButton from './LikeButton';

/**
 * ProductCard - A single gallery item card with image, title, description, and like button
 * 
 * @param {Object} product - The product data object
 * @param {Function} onLikeToggle - Function to call when like button is clicked
 */
function ProductCard({ product, onLikeToggle }) {
  return (
    <article className="gallery-item">
      <img
        src={product.image}
        alt={product.alt}
        loading="lazy"
        className="gallery-image"
      />
      <div className="gallery-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <LikeButton
          liked={product.liked}
          onToggle={() => onLikeToggle(product.id)}
        />
      </div>
    </article>
  );
}

export default ProductCard;
```

### `src/components/Header.jsx`
```javascript
import React, { useState } from 'react';

/**
 * Header - Sticky navigation with logo and nav links
 * Includes a hamburger menu for mobile devices
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-24">
        <nav className="nav flex justify-between items-center py-5">
          {/* Logo */}
          <div className="logo">
            <a
              href="#"
              aria-label="Aurora Photography Home"
              className="text-text hover:text-accent transition-colors"
            >
              <h1 className="font-serif text-2xl font-normal tracking-wide">
                Aurora Photography
              </h1>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links hidden md:flex list-none gap-8">
            <li>
              <a
                href="#work"
                className="text-text text-sm font-normal relative hover:text-accent transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-text text-sm font-normal relative hover:text-accent transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-text text-sm font-normal relative hover:text-accent transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden text-text p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {/* Conditional rendering: Show different icon based on menu state */}
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {/* Conditional rendering: Only show when menu is open */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 py-4">
            <li>
              <a
                href="#work"
                onClick={handleLinkClick}
                className="text-text text-base hover:text-accent transition-colors block py-2"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-text text-base hover:text-accent transition-colors block py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="text-text text-base hover:text-accent transition-colors block py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
```

### `src/components/Hero.jsx`
```javascript
import React from 'react';

/**
 * Hero - The main hero section with title and tagline
 */
function Hero() {
  return (
    <section className="hero py-[120px_0_80px] md:py-[120px_0_80px] text-center" aria-label="Introduction">
      <div className="container mx-auto px-6 lg:px-24">
        <h1 className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] mb-4 tracking-wider">
          Aurora Photography
        </h1>
        <p className="tagline text-muted text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] font-light">
          Portrait & Landscape Photography
        </p>
      </div>
    </section>
  );
}

export default Hero;
```

### `src/components/Gallery.jsx`
```javascript
import React from 'react';
import ProductCard from './ProductCard';

/**
 * Gallery - The portfolio section with category filter and grid of cards
 * 
 * @param {Array} products - Array of product objects
 * @param {string} selectedCategory - Currently selected category filter
 * @param {Function} onCategoryChange - Function to call when category changes
 * @param {Function} onLikeToggle - Function to call when like button is clicked
 * @param {boolean} showSavedOnly - Whether to show only saved items
 * @param {Function} onToggleSavedOnly - Function to toggle saved-only view
 */
function Gallery({
  products,
  selectedCategory,
  onCategoryChange,
  onLikeToggle,
  showSavedOnly,
  onToggleSavedOnly,
}) {
  // Filter products based on category and saved-only toggle
  const filteredProducts = products.filter((product) => {
    // Filter by category
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    
    // Filter by saved-only
    const savedMatch = !showSavedOnly || product.liked;
    
    return categoryMatch && savedMatch;
  });

  return (
    <section className="gallery py-[60px_0] md:py-[80px_0]" id="work" aria-label="Portfolio">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="section-header mb-12">
          <h2 className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide">
            Selected Work
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="filter-controls mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          {/* Desktop: Button Group */}
          <div className="hidden md:flex gap-2 flex-wrap">
            {['All', 'Portrait', 'Landscape', 'Event', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-background'
                    : 'bg-surface text-text hover:bg-surface-hover'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile: Native Select Dropdown */}
          <div className="md:hidden w-full">
            <label htmlFor="category-select" className="sr-only">
              Select a style
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-border text-text rounded cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2712%27%20height%3D%2712%27%20viewBox%3D%270%200%2012%2012%27%3E%3Cpath%20fill%3D%27%239a9a9a%27%20d%3D%27M6%209L1%204h10z%27%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] pr-12"
            >
              <option value="All">Select a style</option>
              <option value="Portrait">Portrait</option>
              <option value="Landscape">Landscape</option>
              <option value="Event">Event</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* Saved Only Toggle */}
          <button
            onClick={onToggleSavedOnly}
            className={`px-4 py-2 rounded transition-colors ${
              showSavedOnly
                ? 'bg-accent text-background'
                : 'bg-surface text-text hover:bg-surface-hover'
            }`}
            aria-pressed={showSavedOnly}
          >
            {showSavedOnly ? 'Show All' : 'Saved Only'}
          </button>
        </div>

        {/* Gallery Grid */}
        {/* Empty state when no items match */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-muted">
            <p>No items match your filters.</p>
          </div>
        ) : (
          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onLikeToggle={onLikeToggle}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
```

### `src/components/Events.jsx`
```javascript
import React from 'react';
import QuantityStepper from './QuantityStepper';

/**
 * Events - Events/booking section with ticket quantity steppers
 * Each event has its own independent quantity state
 * 
 * @param {Array} events - Array of event objects
 * @param {Object} quantities - Object mapping event IDs to quantities
 * @param {Function} onQuantityChange - Function to handle quantity changes
 * @param {Function} onBook - Function to handle booking
 */
function Events({ events, quantities, onQuantityChange, onBook }) {
  // Calculate total price using .reduce()
  const totalPrice = events.reduce((total, event) => {
    return total + (quantities[event.id] || 0) * event.price;
  }, 0);

  return (
    <section className="events py-[60px_0] md:py-[80px_0] bg-surface" aria-label="Upcoming Events">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="section-header mb-12">
          <h2 className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide">
            Upcoming Events
          </h2>
        </div>

        <div className="events-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => {
            const quantity = quantities[event.id] || 0;
            const isFullyBooked = event.spotsAvailable === 0;

            return (
              <article key={event.id} className="event-card bg-background rounded p-6 border border-border">
                <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                <p className="text-muted text-sm mb-4">{event.description}</p>
                
                <div className="event-details text-sm space-y-1 mb-4">
                  <p>
                    <span className="text-muted">Date:</span> {event.date}
                  </p>
                  <p>
                    <span className="text-muted">Location:</span> {event.location}
                  </p>
                  <p>
                    <span className="text-muted">Price:</span> ${event.price} per person
                  </p>
                  {/* Conditional rendering: Show availability status */}
                  <p>
                    <span className="text-muted">Status:</span>{' '}
                    {isFullyBooked ? (
                      <span className="text-red-400">Fully booked</span>
                    ) : (
                      <span className="text-green-400">
                        Available ({event.spotsAvailable} spots)
                      </span>
                    )}
                  </p>
                </div>

                {!isFullyBooked && (
                  <div className="quantity-section flex items-center gap-4">
                    <QuantityStepper
                      value={quantity}
                      onChange={(newValue) => onQuantityChange(event.id, newValue)}
                      min={0}
                      max={event.spotsAvailable}
                    />
                    <span className="text-muted text-sm">
                      ${(quantity * event.price).toFixed(2)}
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Total Price and Book Button */}
        {totalPrice > 0 && (
          <div className="booking-summary mt-8 p-6 bg-background rounded border border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">Total:</span>
              <span className="text-2xl font-serif text-accent">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={onBook}
              className="w-full py-4 bg-accent text-background font-medium rounded hover:bg-accent-hover transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2"
            >
              Book Tickets
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Events;
```

### `src/components/About.jsx`
```javascript
import React from 'react';

/**
 * About - About section with photographer image and text
 */
function About() {
  return (
    <section className="about py-[60px_0] md:py-[80px_0] bg-surface" id="about" aria-label="About Aurora Photography">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="about-content flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="about-image w-full max-w-[400px] md:max-w-[350px]">
            <img
              src="/images/photographer.jpg"
              alt="Professional photographer portrait"
              loading="lazy"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="about-text max-w-[600px]">
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] mb-6 tracking-wide">
              About Aurora
            </h2>
            <p className="text-muted leading-[1.8] mb-4">
              Aurora Photography specializes in portrait and landscape photography, capturing the beauty in everyday moments. With over 10 years of experience, we bring a unique artistic vision to every shoot.
            </p>
            <p className="text-muted leading-[1.8]">
              Based in Los Angeles, we work with clients to create stunning visual narratives that tell their story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
```

### `src/components/Contact.jsx`
```javascript
import React, { useState } from 'react';

/**
 * Contact - Contact form with controlled inputs
 * All form fields are controlled components (state lives in React)
 */
function Contact() {
  // State for form fields (controlled components)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shootType: '',
    message: '',
  });

  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes (updates state for controlled components)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    console.log('Form submitted:', formData);
    
    // Show confirmation and reset form
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      shootType: '',
      message: '',
    });

    // Hide confirmation after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="contact py-[60px_0] md:py-[80px_0]" id="contact" aria-label="Contact form">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="section-header mb-12">
          <h2 className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide">
            Get In Touch
          </h2>
        </div>

        {/* Success Message (Conditional Rendering) */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-accent text-background rounded">
            Thank you! Your message has been sent.
          </div>
        )}

        <form className="contact-form flex flex-col gap-6 max-w-[600px]" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-5 py-4 bg-surface border border-border text-text rounded transition-colors focus:outline-none focus:border-accent focus:bg-surface-hover placeholder:text-muted"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-5 py-4 bg-surface border border-border text-text rounded transition-colors focus:outline-none focus:border-accent focus:bg-surface-hover placeholder:text-muted"
            />
          </div>

          <div className="form-group">
            <label htmlFor="shoot-type" className="sr-only">
              Shoot Type
            </label>
            <select
              id="shoot-type"
              name="shootType"
              value={formData.shootType}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-5 py-4 bg-surface border border-border text-text rounded cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2712%27%20height%3D%2712%27%20viewBox%3D%270%200%2012%2012%27%3E%3Cpath%20fill%3D%27%239a9a9a%27%20d%3D%27M6%209L1%204h10z%27%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] pr-12 focus:outline-none focus:border-accent focus:bg-surface-hover"
            >
              <option value="">Select Shoot Type</option>
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
              <option value="event">Event</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-5 py-4 bg-surface border border-border text-text rounded transition-colors focus:outline-none focus:border-accent focus:bg-surface-hover placeholder:text-muted resize-none"
            />
          </div>

          <button
            type="submit"
            className="submit-btn py-4 px-8 bg-accent text-background font-medium rounded hover:bg-accent-hover transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
```

### `src/components/Footer.jsx`
```javascript
import React from 'react';

/**
 * Footer - Footer with copyright and social links
 */
function Footer() {
  return (
    <footer className="footer py-12 border-t border-border bg-surface" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm text-center md:text-left">
            &copy; 2026 Aurora Photography. All rights reserved.
          </p>
          <nav className="social-links flex gap-6" aria-label="Social media links">
            <a
              href="#"
              aria-label="Follow on Instagram"
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="Follow on Twitter"
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="Follow on Facebook"
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              Facebook
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

### `src/App.jsx`
```javascript
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { products as initialProducts } from './data/products';
import { events as initialEvents } from './data/events';
import useLocalStorage from './hooks/useLocalStorage';

/**
 * App - Main application component
 * Composes all sections and manages global state
 */
function App() {
  // Persist liked items using localStorage custom hook
  const [products, setProducts] = useLocalStorage('aurora-products', initialProducts);
  
  // Persist event bookings (remaining spots) using localStorage
  const [events, setEvents] = useLocalStorage('aurora-events', initialEvents);
  
  // Gallery filter state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  
  // Event quantity state (each event has independent quantity)
  const [eventQuantities, setEventQuantities] = useState({});

  // Handle like toggle for gallery items
  const handleLikeToggle = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, liked: !product.liked }
          : product
      )
    );
  };

  // Handle quantity change for event tickets
  const handleQuantityChange = (eventId, newValue) => {
    setEventQuantities((prev) => ({
      ...prev,
      [eventId]: newValue,
    }));
  };

  // Handle booking event tickets
  const handleBook = () => {
    // Reduce remaining spots for each event based on booked quantity
    setEvents((prevEvents) =>
      prevEvents.map((event) => {
        const quantity = eventQuantities[event.id] || 0;
        return {
          ...event,
          spotsAvailable: Math.max(0, event.spotsAvailable - quantity),
        };
      })
    );

    // Reset all quantities to 0 after booking
    setEventQuantities({});
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Header />
      <main>
        <Hero />
        <Gallery
          products={products}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onLikeToggle={handleLikeToggle}
          showSavedOnly={showSavedOnly}
          onToggleSavedOnly={() => setShowSavedOnly(!showSavedOnly)}
        />
        <Events
          events={events}
          quantities={eventQuantities}
          onQuantityChange={handleQuantityChange}
          onBook={handleBook}
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## How It Works: useState, Controlled Components, and Conditional Rendering

### useState Hook

**What it is:** `useState` is a React hook that lets you add state to functional components. State is data that can change over time and triggers the component to re-render when it changes.

**Syntax:**
```javascript
const [state, setState] = useState(initialValue);
```

**How it works in this project:**

1. **In Header.jsx:** Controls whether the mobile menu is open or closed
```javascript
const [isMenuOpen, setIsMenuOpen] = useState(false);
```
- Initial value is `false` (menu closed)
- `isMenuOpen` is the current state
- `setIsMenuOpen` is the function to update the state
- When `setIsMenuOpen` is called, React re-renders the component with the new value

2. **In Contact.jsx:** Controls form input values
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  shootType: '',
  message: '',
});
```
- Initial value is an object with empty strings
- Each form field is tied to this state
- When user types, `handleChange` updates the state

### Controlled Components

**What they are:** In React, a controlled component is a form element whose value is controlled by React state. Instead of the DOM managing the value, React does.

**Why use them:** They give you complete control over form data, enable validation, and make it easy to reset forms.

**How it works in this project:**

1. **Contact Form (Contact.jsx):**
```javascript
<input
  value={formData.name}        // Value comes from state
  onChange={handleChange}      // Updates state when user types
/>
```

2. **Quantity Stepper (QuantityStepper.jsx):**
```javascript
<QuantityStepper
  value={quantity}             // Value from parent's state
  onChange={(newValue) => onQuantityChange(event.id, newValue)}
/>
```
- The value lives in the parent component (Events.jsx)
- The child component (QuantityStepper) receives it as a prop
- When user clicks + or -, it calls `onChange` to update parent's state
- This ensures each event has its own independent quantity (a common bug is all steppers sharing one state)

### Conditional Rendering

**What it is:** Showing or hiding elements based on conditions. In React, we use JavaScript expressions like ternary operators or logical AND (`&&`).

**How it works in this project:**

1. **Ternary Operator (true ? showA : showB):**
```javascript
{isMenuOpen ? '✕' : '☰'}  // Shows X if open, hamburger if closed
```

2. **Logical AND (condition && show):**
```javascript
{isMenuOpen && (
  <ul className="mobile-menu">...</ul>
)}
// Only renders the menu if isMenuOpen is true
```

3. **In LikeButton.jsx:**
```javascript
{liked ? 'Saved' : 'Save'}
// Shows "Saved" if liked is true, "Save" if false
```

4. **In Events.jsx (Availability Status):**
```javascript
{isFullyBooked ? (
  <span className="text-red-400">Fully booked</span>
) : (
  <span className="text-green-400">Available ({event.spotsAvailable} spots)</span>
)}
```

5. **In Gallery.jsx (Empty State):**
```javascript
{filteredProducts.length === 0 ? (
  <div className="text-center">No items match your filters.</div>
) : (
  <div className="gallery-grid">...</div>
)}
```

### Key Takeaways for Your Presentation

1. **useState** = React's way to remember data that changes. When state changes, React updates the UI automatically.

2. **Controlled Components** = Form elements where React (not the browser) controls the value. This makes forms predictable and easy to manage.

3. **Conditional Rendering** = Using JavaScript logic to decide what to show. It's like an if-statement for JSX.

These three concepts work together to create interactive, dynamic user interfaces in React.
