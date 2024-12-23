import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Good morning!</h1>
        <p className="text-muted-foreground">
          Here's an overview of your properties
        </p>
      </div>
      <div className="flex items-center space-x-2">
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
        <ThemeToggle />
        <Button>Analytics</Button>
      </div>
    </div>
  );
}
