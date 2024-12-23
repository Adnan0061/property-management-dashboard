"use client";

import { Input } from "@/components/ui/input";
import { useProperties } from "@/context/property-context";
import { Search } from "lucide-react";

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useProperties();

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search properties..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-8"
      />
    </div>
  );
}
