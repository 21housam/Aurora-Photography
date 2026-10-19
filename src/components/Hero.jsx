import React from 'react';

/**
 * Hero - Modern hero section with animated gradient and typography
 */
function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="animate-slide-up">
          <p className="text-accent font-display font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Professional Photography
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Aurora
            <span className="block text-text-secondary font-light mt-2">
              Photography
            </span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Capturing moments that tell stories. Specializing in portrait, landscape, and commercial photography in Los Angeles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-accent/30 text-white rounded-full font-medium hover:bg-accent/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
