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
  const { state, dispatch } = useProperties();

  return (
    <div className="flex flex-wrap justify-end items-center space-x-2 xxs:space-y-2 xs:space-y-0 ">
      <Select
        value={state.filterType}
        onValueChange={(value) =>
          dispatch({ type: "SET_FILTER_TYPE", payload: value })
        }
      >
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="commercial">Commercial</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={state.filterStatus}
        onValueChange={(value) =>
          dispatch({ type: "SET_FILTER_STATUS", payload: value })
        }
      >
        <SelectTrigger className="xs:w-[140px] md:w-[160px]">
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
