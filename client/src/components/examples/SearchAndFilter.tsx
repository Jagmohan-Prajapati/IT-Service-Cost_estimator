import SearchAndFilter from '../SearchAndFilter';
import { useState } from 'react';

export default function SearchAndFilterExample() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedDeliveryModel, setSelectedDeliveryModel] = useState('All');

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedSize('All');
    setSelectedDeliveryModel('All');
  };

  return (
    <SearchAndFilter
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      selectedSize={selectedSize}
      onSizeChange={setSelectedSize}
      selectedDeliveryModel={selectedDeliveryModel}
      onDeliveryModelChange={setSelectedDeliveryModel}
      onClearFilters={handleClearFilters}
    />
  );
}