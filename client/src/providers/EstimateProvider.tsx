import { createContext, useContext, ReactNode } from 'react';
import { useEstimate } from '@/hooks/useEstimate';

const EstimateContext = createContext<ReturnType<typeof useEstimate> | null>(null);

type EstimateProviderProps = {
  children: ReactNode;
};

export function EstimateProvider({ children }: EstimateProviderProps) {
  const estimate = useEstimate();
  
  return (
    <EstimateContext.Provider value={estimate}>
      {children}
    </EstimateContext.Provider>
  );
}

export function useEstimateContext() {
  const context = useContext(EstimateContext);
  if (!context) {
    throw new Error('useEstimateContext must be used within an EstimateProvider');
  }
  return context;
}
