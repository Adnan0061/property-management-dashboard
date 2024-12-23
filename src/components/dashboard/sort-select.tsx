"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProperties } from "@/context/property-context";

export function SortSelect() {
  const { sortField, setSortField, sortOrder, setSortOrder } = useProperties();

  return (
    <div className="flex space-x-2">
      <Select value={sortField} onValueChange={setSortField}>
        <SelectTrigger className="w-[160px]">
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
      <Select value={sortOrder} onValueChange={setSortOrder}>
        <SelectTrigger className="w-[120px]">
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
