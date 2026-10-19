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
