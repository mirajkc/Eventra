
import { TypographyH4, TypographyP } from "../ui/Typography"
import JoinedMemberList from "./JoinedMemberList"
import CreditPurchaseList from "./CreditPurchaseList"


export default function OrganizationActivities({ organizationId }: { organizationId: string }) {
  return (
    <div className="flex  flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]" >
      <div>
        <TypographyH4>Organization Activities</TypographyH4>
        <TypographyP>Find the recent credit purchase and members joined on the organization.</TypographyP>
      </div>
      <div className="flex flex-col md:flex-row gap-6 min-h-[50vh] mt-8">
        <div className="flex flex-col w-full md:w-1/2 border dark:border-gray-800 shadow-sm rounded-2xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
          <TypographyH4 className="mb-4">Recent Organization Members</TypographyH4>
          <div className="flex-1 overflow-auto">
            <JoinedMemberList />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 border dark:border-gray-800 shadow-sm rounded-2xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
          <TypographyH4 className="mb-4">Recent Credit Purchases</TypographyH4>
          <div className="flex-1 overflow-auto">
            <CreditPurchaseList />
          </div>
        </div>
      </div>
    </div>

  )
}


