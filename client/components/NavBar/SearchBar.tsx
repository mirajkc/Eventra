import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
      <input
        type="search"
        placeholder="Search events..."
        className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all dark:bg-input/30 dark:border-input dark:focus:bg-input/50"
      />
    </div>
  )
}