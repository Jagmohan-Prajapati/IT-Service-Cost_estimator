import SearchAndFilter from '../SearchAndFilter';
import { useState } from 'react';

export default function SearchAndFilterExample() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClearFilters = () => {
    setSelectedCategory('All');
  };

  return (
    <SearchAndFilter
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      onClearFilters={handleClearFilters}
    />
  );
}