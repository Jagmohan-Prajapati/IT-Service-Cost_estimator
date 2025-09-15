import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, Sun, Calculator } from "lucide-react";
import type { Currency } from "@shared/schema";

interface HeaderProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ selectedCurrency, onCurrencyChange, darkMode, onToggleDarkMode }: HeaderProps) {
  const currencies: { value: Currency; label: string; flag: string }[] = [
    { value: "USD", label: "USD", flag: "🇺🇸" },
    { value: "EUR", label: "EUR", flag: "🇪🇺" },
    { value: "GBP", label: "GBP", flag: "🇬🇧" },
    { value: "INR", label: "INR", flag: "🇮🇳" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calculator className="h-8 w-8 text-primary" data-testid="icon-logo" />
            <div>
              <h1 className="text-xl font-semibold text-foreground" data-testid="text-app-title">
                IT Services Estimator
              </h1>
              <p className="text-sm text-muted-foreground">Professional cost estimation platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Currency:</span>
              <Select value={selectedCurrency} onValueChange={onCurrencyChange}>
                <SelectTrigger className="w-24" data-testid="select-currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value} data-testid={`option-currency-${currency.value}`}>
                      <span className="flex items-center space-x-1">
                        <span>{currency.flag}</span>
                        <span>{currency.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}