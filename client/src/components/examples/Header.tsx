import Header from '../Header';
import { useState } from 'react';
import type { Currency } from '@shared/schema';

export default function HeaderExample() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Header
      selectedCurrency={currency}
      onCurrencyChange={setCurrency}
      darkMode={darkMode}
      onToggleDarkMode={() => setDarkMode(!darkMode)}
    />
  );
}