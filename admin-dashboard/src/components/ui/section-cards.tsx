
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { LucideIcon } from "lucide-react";

export function SectionCards({
  description,
  amount,
  title,
  trendDescription,
  icon: Icon,
}: {
  description: string;
  amount: number;
  title: string;
  trendDescription: string;
  icon?: LucideIcon;
}) {
  return (
    <Card className="data-[slot=card]:from-primary/5 data-[slot=card]:to-card dark:data-[slot=card]:bg-card data-[slot=card]:bg-linear-to-t data-[slot=card]:shadow-xs group hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-center">
             <CardDescription>{description}</CardDescription>
             {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
        </div>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {amount}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {title} 
        </div>
        <div className="text-muted-foreground">
          {trendDescription}
        </div>
      </CardFooter>
    </Card>
  )
}
