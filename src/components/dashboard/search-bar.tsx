"use client";

import { Input } from "@/components/ui/input";
import { useProperties } from "@/context/property-context";
import { Search } from "lucide-react";

export function SearchBar() {
  const { state, dispatch } = useProperties();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <div className="mt-2">
      <div className="relative xs:w-[140px] md:w-auto">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search properties..."
          value={state.searchQuery}
          onChange={handleSearch}
          className="pl-8"
        />
      </div>
    </div>
  );
}
