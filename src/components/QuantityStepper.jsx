import React from 'react';

/**
 * QuantityStepper - Modern quantity stepper with gradient buttons
 */
function QuantityStepper({ value, onChange, min = 0, max = 99 }) {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

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
        −
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
