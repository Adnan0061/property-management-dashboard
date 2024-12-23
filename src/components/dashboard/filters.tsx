"use client";

import { useProperties } from "@/context/property-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Filters() {
  const { filterType, setFilterType, filterStatus, setFilterStatus } =
    useProperties();

  return (
    <div className="flex space-x-2">
      <Select value={filterType} onValueChange={setFilterType}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="commercial">Commercial</SelectItem>
        </SelectContent>
      </Select>
      <Select value={filterStatus} onValueChange={setFilterStatus}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="available">Available</SelectItem>
          <SelectItem value="rented">Rented</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
