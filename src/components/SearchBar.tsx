import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="search"
        placeholder="Search campus services, buildings, people..."
        className="pl-10 py-3 text-base bg-card shadow-card border-0 focus:shadow-elevated transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;