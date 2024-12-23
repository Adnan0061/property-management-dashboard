import { Suspense } from "react";
import { PropertyListSkeleton } from "@/components/dashboard/property-skeleton";
import { SearchBar } from "@/components/dashboard/search-bar";
import { SortSelect } from "@/components/dashboard/sort-select";
import PropertyList from "@/components/dashboard/property-list";
import { Filters } from "@/components/dashboard/filters";
import Header from "@/components/dashboard/header";
import StatsCards from "@/components/dashboard/stats-cards";
import AddPropertyForm from "@/components/dashboard/add-property-form";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6 p-8">
      <Header />
      <StatsCards />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
          <div className="flex items-center space-x-4">
            <SearchBar />
            <SortSelect />
            <Filters />
            <AddPropertyForm />
          </div>
        </div>
        <Suspense fallback={<PropertyListSkeleton />}>
          <PropertyList />
        </Suspense>
      </div>
    </div>
  );
}
