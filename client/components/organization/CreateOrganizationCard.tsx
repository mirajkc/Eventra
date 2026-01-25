import { Building2, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props} />
);
const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
);
const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-sm text-muted-foreground ${className}`} {...props} />
);


export default function CreateOrganizationCard() {
  return (
    <Card className="flex flex-col items-center justify-center py-16 text-center border-dashed">
      <div className="p-4 bg-muted rounded-full mb-4">
        <Building2 className="w-8 h-8 text-muted-foreground" />
      </div>
      <CardTitle className="text-xl mb-2">No Organization Found</CardTitle>
      <CardDescription className="max-w-sm mb-6">
        You haven't created an organization yet. Create one to start hosting events and managing your team.
      </CardDescription>
      <Link href="/manage-organization/create">
        <Button className="gap-2">
          <PlusCircle className="w-4 h-4" />
          Create Organization
        </Button>
      </Link>
    </Card>
  )
}