;
import CreditsDonatedList from "@/components/credits/CreditsDonatedList";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";

export default function CreditsDonatedPage() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>Donated Credits</TypographyH3>
        <TypographyP>Credits That tou donated to organizaions. </TypographyP>
      </div>
      <div>
        <CreditsDonatedList />
      </div>

    </div>
  );
}