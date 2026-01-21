
import { TypographyH4, TypographyP } from "../ui/Typography"
import JoinedMemberList from "./JoinedMemberList"


export default function OrganizationActivities({ organizationId }: { organizationId: string }) {
  return (
    <div className="flex flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]" >
      <div>
        <TypographyH4>Organization Activities</TypographyH4>
        <TypographyP>Find the recent credit purchase and members joined on the organization.</TypographyP>
      </div>
      <div className="flex gap-4 min-h-[50vh] mt-8" >
        <div className="flex w-1/2 flex-col  w-full border dark:border-gray-600 shadow shadow-sm rounded-2xl p-4">
          <TypographyH4>Organization Members</TypographyH4>
          <div>
            <JoinedMemberList />
          </div>
        </div>
        <div className="flex w-1/2 flex-col  w-full border dark:border-gray-600 shadow shadow-sm rounded-2xl p-4">
          <TypographyH4>Credit Purchases</TypographyH4>
          <div>

          </div>
        </div>
      </div>
    </div>

  )
}