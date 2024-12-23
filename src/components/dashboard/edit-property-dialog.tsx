// "use client";

// import { useState } from "react";
// import { Property } from "@/lib/types";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Pencil } from "lucide-react";
// import { useProperties } from "@/context/property-context";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// // ... import the same form components as AddPropertyForm

// const formSchema = z.object({
//   // ... same schema as AddPropertyForm
// });

// export function EditPropertyDialog({ property }: { property: Property }) {
//   const [open, setOpen] = useState(false);
//   const { updateProperty } = useProperties();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       address: property.address,
//       type: property.type,
//       status: property.status,
//       price: property.price.toString(),
//       checkInDate: property.checkInDate,
//       checkOutDate: property.checkOutDate,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     updateProperty({
//       ...property,
//       ...values,
//       price: parseFloat(values.price),
//     });
//     setOpen(false);
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <Pencil className="h-4 w-4" />
//         </Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Edit Property</DialogTitle>
//         </DialogHeader>
//         {/* Same form structure as AddPropertyForm */}
//       </DialogContent>
//     </Dialog>
//   );
// }
