import CreateOrganizationForm from "@/components/organization/CreateOrganizationForm";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";

export default function CreateOrganizationPage() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow shadow-sm rounded-lg" >
      <div>
        <TypographyH3>Create Organization</TypographyH3>
        <TypographyP>Create an organization to manage your events</TypographyP>
      </div>
      <div>
        <CreateOrganizationForm />
      </div>
    </div>
  );
}