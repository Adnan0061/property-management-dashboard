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

export type PropertyAction =
  | { type: "SET_PROPERTIES"; payload: Property[] }
  | { type: "ADD_PROPERTY"; payload: Property }
  | { type: "UPDATE_PROPERTY"; payload: Property }
  | { type: "DELETE_PROPERTY"; payload: string }
  | { type: "SET_FILTER_TYPE"; payload: string }
  | { type: "SET_FILTER_STATUS"; payload: string }
  | { type: "SET_SORT_FIELD"; payload: SortField }
  | { type: "SET_SORT_ORDER"; payload: SortOrder }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };
