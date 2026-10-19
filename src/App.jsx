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
 * App - Main application component with modern design
 */
function App() {
  const [products, setProducts] = useLocalStorage('aurora-products', initialProducts);
  const [events, setEvents] = useLocalStorage('aurora-events', initialEvents);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [eventQuantities, setEventQuantities] = useState({});

  const handleLikeToggle = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, liked: !product.liked }
          : product
      )
    );
  };

  const handleQuantityChange = (eventId, newValue) => {
    setEventQuantities((prev) => ({
      ...prev,
      [eventId]: newValue,
    }));
  };

  const handleBook = () => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => {
        const quantity = eventQuantities[event.id] || 0;
        return {
          ...event,
          spotsAvailable: Math.max(0, event.spotsAvailable - quantity),
        };
      })
    );
    setEventQuantities({});
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans">
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
