import React from 'react';

/**
 * About - Modern about section with glassmorphism
 */
function About() {
  return (
    <section className="py-32 bg-background" id="about" aria-label="About Aurora Photography">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src="/images/photographer.jpg"
              alt="Professional photographer portrait"
              loading="lazy"
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-border/20"
            />
          </div>
          <div>
            <p className="text-accent font-display font-medium tracking-[0.3em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Crafting Visual Stories Through the Lens
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Aurora Photography specializes in portrait and landscape photography, capturing the beauty in everyday moments. With over 10 years of experience, we bring a unique artistic vision to every shoot.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Based in Los Angeles, we work with clients to create stunning visual narratives that tell their story. Our approach combines technical excellence with creative storytelling.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-text-secondary text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-text-secondary text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-secondary text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
