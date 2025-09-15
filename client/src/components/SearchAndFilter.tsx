import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X, Filter } from "lucide-react";

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
}

const categories = ["All", "Development", "Marketing", "IT Services", "Analytics", "Design"];

export default function SearchAndFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onClearFilters
}: SearchAndFilterProps) {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const activeFiltersCount = [
    selectedCategory !== "All"
  ].filter(Boolean).length;

  const handleClearFilters = () => {
    console.log('Clear filters triggered');
    onClearFilters();
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search IT services..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4"
          data-testid="input-search"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="flex items-center space-x-2"
          data-testid="button-filter-toggle"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>

        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="flex items-center space-x-1 text-muted-foreground"
            data-testid="button-clear-filters"
          >
            <X className="h-4 w-4" />
            <span>Clear</span>
          </Button>
        )}
      </div>

      {/* Filter Options */}
      {isFilterExpanded && (
        <div className="grid grid-cols-1 gap-4 p-4 border rounded-lg bg-card">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Category
            </label>
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger data-testid="select-category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category} data-testid={`option-category-${category}`}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Active Filter Chips */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>Category: {selectedCategory}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 hover:bg-transparent"
                onClick={() => onCategoryChange("All")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}