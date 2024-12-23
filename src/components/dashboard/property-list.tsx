"use client";

import { useProperties } from "@/context/property-context";
import { PropertyListSkeleton } from "./property-skeleton";
import { Pagination } from "./pagination";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyList() {
  const { filteredProperties, deleteProperty, isLoading, error } =
    useProperties();

  if (isLoading) {
    return <PropertyListSkeleton />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardHeader className="relative h-48 p-0">
                  <Image
                    src={property.imageUrl || "/placeholder.png"}
                    alt={property.address}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => deleteProperty(property.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">
                    {property.address}
                  </CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>
                      <p>Type: {property.type}</p>
                      <p>Status: {property.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${property.price}</p>
                      <p>
                        {property.checkInDate} - {property.checkOutDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Pagination />
    </div>
  );
}
