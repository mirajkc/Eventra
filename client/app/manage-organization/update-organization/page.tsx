import UpdateOrganizationForm from "@/components/organization/UpdateOrganizationForm";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";

export default function UpdateOrganizationPage() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow shadow-sm rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>Update Organization</TypographyH3>
        <TypographyP>Update your organization details</TypographyP>
      </div>
      <div>
        <UpdateOrganizationForm />
      </div>
    </div>
  );
}