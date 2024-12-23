"use client";
import { Bell, User, Shell } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isDashboard = pathname === "/";
  const isInvoices = pathname === "/invoices";
  const isAnalytics = pathname === "/analytics";

  return (
    <header className="flex items-center justify-between py-4 px-8 border-b">
      {/* logo section */}
      <div className="flex items-center justify-between space-x-3">
        <Shell className="w-10 h-10" />
        <h1 className="text-2xl font-bold">MyBnB</h1>
      </div>
      {/* navigation section */}
      <nav className="flex items-center justify-between space-x-6">
        <Link
          href="/"
          className={cn(
            "border-b-2 border-transparent hover:border-primary",
            isDashboard && "border-primary"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/invoices"
          className={cn(
            "border-b-2 border-transparent hover:border-primary",
            isInvoices && "border-primary"
          )}
        >
          Invoices
        </Link>
        <Link
          href="/analytics"
          className={cn(
            "border-b-2 border-transparent hover:border-primary",
            isAnalytics && "border-primary"
          )}
        >
          Analytics
        </Link>
      </nav>
      {/* theme toggle and notifications */}
      <div className="flex items-center justify-between space-x-3">
        <ThemeToggle />
        <Button variant="outline">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="outline">
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
