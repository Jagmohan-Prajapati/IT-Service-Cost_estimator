import { createContext, useContext, ReactNode } from 'react';
import { useCurrency } from '@/hooks/useCurrency';

const CurrencyContext = createContext<ReturnType<typeof useCurrency> | null>(null);

type CurrencyProviderProps = {
  children: ReactNode;
};

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const currency = useCurrency();
  
  return (
    <CurrencyContext.Provider value={currency}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrencyContext() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrencyContext must be used within a CurrencyProvider');
  }
  return context;
}
