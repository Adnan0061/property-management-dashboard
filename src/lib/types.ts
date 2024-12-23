export type Property = {
  id: string;
  address: string;
  type: "Apartment" | "House" | "Commercial";
  status: "Available" | "Rented";
  price: number;
  checkInDate?: string;
  checkOutDate?: string;
  imageUrl?: string;
};

export type DashboardStats = {
  checkIns: number;
  checkOuts: number;
  earnings: number;
  reviews: number;
};

// Add sorting types
export type SortField = "price" | "address" | "checkInDate" | "type" | "status";
export type SortOrder = "asc" | "desc";
