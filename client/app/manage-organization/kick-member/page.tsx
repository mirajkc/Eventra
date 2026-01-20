import { TypographyH3, TypographyP } from "@/components/ui/Typography";

export default function KickMemberPage() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow shadow-sm rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>Kick Member</TypographyH3>
        <TypographyP>Kick your member</TypographyP>
        <h1>TODO: After someone joins organization, kick them</h1>
      </div>

    </div>
  );
}