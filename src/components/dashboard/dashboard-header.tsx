import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Good morning!</h1>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your properties
        </p>
      </div>
      <div className="flex flex-wrap justify-end items-center space-x-2 xxs:space-y-2 md:space-y-0">
        <div className="xxs:hidden md:block">
          <Select defaultValue="lastMonth">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lastMonth">Last month</SelectItem>
              <SelectItem value="lastWeek">Last week</SelectItem>
              <SelectItem value="today">Today</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Analytics</Button>
      </div>
    </div>
  );
}
