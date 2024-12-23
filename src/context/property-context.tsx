"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Property, SortField, SortOrder } from "@/lib/types";

type PropertyContextType = {
  properties: Property[];
  filteredProperties: Property[];
  setProperties: (properties: Property[]) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  addProperty: (property: Property) => void;
  deleteProperty: (id: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  itemsPerPage: number;
  isLoading: boolean;
  error: string | null;
  sortField: SortField;
  setSortField: (field: SortField) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 9;
  const [sortField, setSortField] = useState<SortField>("price");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedProperties = properties
    .filter((property) => {
      const matchesType =
        filterType === "all" || property.type.toLowerCase() === filterType;
      const matchesStatus =
        filterStatus === "all" ||
        property.status.toLowerCase() === filterStatus;
      const matchesSearch =
        property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.status.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

  const totalPages = Math.ceil(
    filteredAndSortedProperties.length / itemsPerPage
  );
  const paginatedProperties = filteredAndSortedProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addProperty = (property: Property) => {
    const updatedProperties = [...properties, property];
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const deleteProperty = (id: string) => {
    const updatedProperties = properties.filter((p) => p.id !== id);
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setIsLoading(true);
        const stored = localStorage.getItem("properties");
        if (stored) {
          setProperties(JSON.parse(stored));
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load properties");
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterType, filterStatus]);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties: paginatedProperties,
        setProperties,
        filterType,
        setFilterType,
        filterStatus,
        setFilterStatus,
        addProperty,
        deleteProperty,
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
        isLoading,
        error,
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error("useProperties must be used within a PropertyProvider");
  }
  return context;
}
