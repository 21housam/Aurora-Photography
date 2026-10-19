import React, { useState, useEffect } from 'react';

/**
 * Header - Modern sticky navigation with glassmorphism effect
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="logo">
            <a
              href="#"
              aria-label="Aurora Photography Home"
              className="group"
            >
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-white group-hover:text-accent transition-colors duration-300">
                Aurora
              </h1>
              <p className="text-xs text-text-secondary tracking-[0.3em] uppercase mt-1">
                Photography
              </p>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-10">
            {['Work', 'About', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-text-secondary hover:text-accent transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-accent transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-6 py-8 border-t border-border/20 mt-4 animate-fade-in">
            {['Work', 'About', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-text-secondary hover:text-accent transition-colors block py-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
