import { Button } from "@/components/ui/button";
import { useProperties } from "@/context/property-context";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useProperties();

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="text-sm">
        Page {currentPage} of {totalPages}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
