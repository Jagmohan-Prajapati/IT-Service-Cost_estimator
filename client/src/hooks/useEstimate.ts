import { useState, useCallback } from 'react';

type EstimateItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
};

type UseEstimateReturn = {
  items: EstimateItem[];
  subtotal: number;
  tax: number;
  total: number;
  addItem: (item: Omit<EstimateItem, 'id'>) => void;
  updateItem: (id: string, updates: Partial<EstimateItem>) => void;
  removeItem: (id: string) => void;
  clearEstimate: () => void;
};

const TAX_RATE = 0.1; // 10% tax rate

export function useEstimate(): UseEstimateReturn {
  const [items, setItems] = useState<EstimateItem[]>([]);

  // Calculate subtotal, tax, and total
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const addItem = useCallback((item: Omit<EstimateItem, 'id'>) => {
    const newItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9), // Simple ID generation
    };
    setItems(prevItems => [...prevItems, newItem]);
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<EstimateItem>) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearEstimate = useCallback(() => {
    setItems([]);
  }, []);

  return {
    items,
    subtotal,
    tax,
    total,
    addItem,
    updateItem,
    removeItem,
    clearEstimate,
  };
}
