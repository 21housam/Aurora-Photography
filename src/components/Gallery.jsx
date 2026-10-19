import React from 'react';
import ProductCard from './ProductCard';

/**
 * Gallery - Modern portfolio section with animated filters
 */
function Gallery({
  products,
  selectedCategory,
  onCategoryChange,
  onLikeToggle,
  showSavedOnly,
  onToggleSavedOnly,
}) {
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const savedMatch = !showSavedOnly || product.liked;
    return categoryMatch && savedMatch;
  });

  const categories = ['All', 'Portrait', 'Landscape', 'Event', 'Commercial'];

  return (
    <section className="py-32 bg-background" id="work" aria-label="Portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-16 section-title">
          <p className="text-accent font-display font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Selected Work
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore our collection of photography across different styles and subjects
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Desktop: Button Group */}
          <div className="hidden md:flex gap-3 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile: Native Select */}
          <div className="md:hidden w-full max-w-md">
            <label htmlFor="category-select" className="sr-only">
              Select a style
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-6 py-4 bg-surface/50 border-2 border-border text-white rounded-xl cursor-pointer appearance-none focus:outline-none focus:border-accent backdrop-blur-xl"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Saved Only Toggle */}
          <button
            onClick={onToggleSavedOnly}
            className={`filter-btn ${
              showSavedOnly ? 'active' : ''
            }`}
            aria-pressed={showSavedOnly}
          >
            {showSavedOnly ? 'Show All' : 'Saved Only'}
          </button>
        </div>

        {/* Gallery Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-secondary text-xl">No items match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
