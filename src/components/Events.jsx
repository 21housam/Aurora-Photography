import React, { useState } from 'react';
import QuantityStepper from './QuantityStepper';

/**
 * Events - Enhanced events section with Google Maps modal
 */
function Events({ events, quantities, onQuantityChange, onBook }) {
  const [selectedMap, setSelectedMap] = useState(null);

  const totalPrice = events.reduce((total, event) => {
    return total + (quantities[event.id] || 0) * event.price;
  }, 0);

  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    onBook();
  };

  const openMap = (mapEmbed) => {
    setSelectedMap(mapEmbed);
  };

  const closeMap = () => {
    setSelectedMap(null);
  };

  return (
    <section className="py-32 bg-surface" id="events" aria-label="Upcoming Events">
      <div className="container mx-auto">
        <div className="text-center mb-16 section-title">
          <p className="text-accent font-display font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Workshops & Events
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Photography Workshops
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            Join our exclusive photography workshops designed to enhance your skills. 
            Learn from professionals in hands-on sessions covering portrait techniques, 
            landscape composition, and creative lighting. Perfect for beginners and 
            enthusiasts looking to take their photography to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => {
            const quantity = quantities[event.id] || 0;
            const isFullyBooked = event.spotsAvailable === 0;

            return (
              <article key={event.id} className="event-card group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium uppercase tracking-wider">
                        Workshop
                      </span>
                      {isFullyBooked ? (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium">
                          Sold Out
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                          Available
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="block font-display font-bold text-3xl text-accent">
                      ${event.price}
                    </span>
                    <span className="text-text-secondary text-sm">per person</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Location Card with Google Maps */}
                <div className="mb-6 p-4 bg-gradient-to-br from-background to-surface rounded-xl border border-border/20">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">Location</p>
                      <p className="text-white font-medium mb-3">{event.location}</p>
                      <button
                        onClick={() => openMap(event.mapEmbed)}
                        className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span>View on Google Maps</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 text-text-secondary">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Date</p>
                      <p className="font-medium text-white">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Spots</p>
                      <p className={`font-medium ${isFullyBooked ? 'text-red-400' : 'text-white'}`}>
                        {event.spotsAvailable} remaining
                      </p>
                    </div>
                  </div>
                </div>

                {!isFullyBooked && (
                  <div className="pt-6 border-t border-border/20">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-text-secondary text-sm">Select Quantity</p>
                      <QuantityStepper
                        value={quantity}
                        onChange={(newValue) => onQuantityChange(event.id, newValue)}
                        min={0}
                        max={event.spotsAvailable}
                      />
                    </div>
                    {quantity > 0 && (
                      <div className="flex items-center justify-between bg-accent/10 rounded-xl p-4">
                        <span className="text-text-secondary">Total</span>
                        <span className="font-display font-bold text-2xl text-accent">
                          ${(quantity * event.price).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Booking Summary */}
        {totalPrice > 0 && (
          <div className="mt-16 p-8 bg-gradient-to-r from-surface to-surface-hover rounded-2xl border border-border/20 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-text-secondary text-sm mb-2">Total Booking Amount</p>
                <p className="font-serif text-4xl font-bold text-accent">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                onClick={handleBookClick}
                className="btn-primary text-lg px-12 py-4 whitespace-nowrap"
              >
                Proceed to Contact
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Google Maps Modal */}
      {selectedMap && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeMap}
        >
          <div 
            className="bg-surface rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border/20">
              <h3 className="font-serif text-xl font-bold text-white">Location Map</h3>
              <button
                onClick={closeMap}
                className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src={selectedMap}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;
