import { PropertyProvider } from "@/context/property-context";
import AddPropertyForm from "./add-property-form";
import React from "react";
import { Filters } from "./filters";
import { SearchBar } from "./search-bar";
import { SortSelect } from "./sort-select";
import PropertyList from "./property-list";

export default function PropertiesSection() {
  return (
    <PropertyProvider>
      <div className="flex items-start justify-between space-x-2">
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
        <div className="flex flex-wrap justify-end items-center space-x-2 space-y-2">
          <SearchBar />
          <SortSelect />
          <Filters />
          <AddPropertyForm />
        </div>
      </div>
      <PropertyList />
    </PropertyProvider>
  );
}
