"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProperties } from "@/context/property-context";
import { SortField, SortOrder } from "@/lib/types";

export function SortSelect() {
  const { state, dispatch } = useProperties();

  const handleSortFieldChange = (value: SortField) => {
    dispatch({ type: "SET_SORT_FIELD", payload: value });
  };

  const handleSortOrderChange = (value: SortOrder) => {
    dispatch({ type: "SET_SORT_ORDER", payload: value });
  };

  return (
    <div className="flex flex-wrap justify-end space-x-2 xxs:space-y-2 xs:space-y-0">
      <Select value={state.sortField} onValueChange={handleSortFieldChange}>
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="address">Address</SelectItem>
          <SelectItem value="checkInDate">Check-in Date</SelectItem>
          <SelectItem value="type">Type</SelectItem>
          <SelectItem value="status">Status</SelectItem>
        </SelectContent>
      </Select>
      <Select value={state.sortOrder} onValueChange={handleSortOrderChange}>
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
