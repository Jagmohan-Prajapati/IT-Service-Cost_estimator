import { useState, useCallback } from 'react';

type Currency = {
  code: string;
  symbol: string;
  name: string;
};

const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
];

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0]);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({
    USD: 1,
    EUR: 0.85,
    GBP: 0.72,
    JPY: 110.5,
    INR: 75.2,
  });

  const changeCurrency = useCallback((code: string) => {
    const newCurrency = CURRENCIES.find(c => c.code === code);
    if (newCurrency) {
      setCurrency(newCurrency);
    }
  }, []);

  const convertAmount = useCallback(
    (amount: number, fromCurrency: string = 'USD'): number => {
      if (fromCurrency === currency.code) return amount;
      
      const fromRate = exchangeRates[fromCurrency] || 1;
      const toRate = exchangeRates[currency.code] || 1;
      
      return (amount / fromRate) * toRate;
    },
    [currency.code, exchangeRates]
  );

  const formatCurrency = useCallback(
    (amount: number): string => {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    },
    [currency.code]
  );

  return {
    currency,
    currencies: CURRENCIES,
    changeCurrency,
    convertAmount,
    formatCurrency,
  };
}
