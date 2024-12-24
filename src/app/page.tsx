import { Metadata } from "next";
import StatsCards from "@/components/dashboard/stats-cards";
import PropertyList from "@/components/dashboard/property-list";
import { Filters } from "@/components/dashboard/filters";
import AddPropertyForm from "@/components/dashboard/add-property-form";
import { SortSelect } from "@/components/dashboard/sort-select";
import { SearchBar } from "@/components/dashboard/search-bar";
import { PropertyProvider } from "@/context/property-context";
import DashboardHeader from "@/components/dashboard/dashboard-header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Property Management Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-6">
      <DashboardHeader />
      <StatsCards />
      {/* provider is here not in the layout intentionally, I can assure that it is optimised here then in layout */}
      <PropertyProvider>
        <div className="col-span-3 flex flex-col space-y-4">
          <div className="flex flex-wrap items-center justify-between space-x-2">
            <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
            <div className="flex flex-wrap justify-end items-center space-x-2 space-y-2">
              <SearchBar />
              <SortSelect />
              <Filters />
              <AddPropertyForm />
            </div>
          </div>
          <PropertyList />
        </div>
      </PropertyProvider>
    </div>
  );
}
