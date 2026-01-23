import JoinedOrganizationList from "@/components/organization/JoinedOrganizationList";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";

export default function JoinedOrganizationsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>Joined Organizations</TypographyH3>
        <TypographyP>Joined Organizations</TypographyP>
      </div>
      <div>
        <JoinedOrganizationList />
      </div>

    </div>
  );
}