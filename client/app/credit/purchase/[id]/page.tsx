
"use client"

import { Button } from "@/components/ui/button"
import getAccessToken from "@/lib/access.token"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
const pricingData = [
  {
    name: 'SMALL', price: 20, description: 'For small organizations.',
    features: ['Get 50 credits', 'Organization marked as premium organization', 'Get notified for all people who has joined organization', 'No credits reset monthly']
  },
  {
    name: 'MEDIUM', mostPopular: true, price: 35, description: 'Perfect for medium organizations.',
    features: ['Get 100 credits', 'Organization marked as premium organization', 'Get notified for all people who has joined organization', 'No credits reset monthly']
  },
  {
    name: 'LARGE', price: 75, description: 'For large organizations.',
    features: ['Get 200 credits', 'Organization marked as premium organization', 'Get notified for all people who has joined organization', 'No credits reset monthly']
  }
]

export default function PurchasePage() {
  const params = useParams()
  const organizationId = params.id
  const router = useRouter()
  const purchaseCredit = async (packageName: string) => {
    try {
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/credit/purcahse-credit/${organizationId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ package: packageName })
      })
      const result = await response.json()
      if (response.status !== 200) {
        toast.error("Error occured while purchasing credits please try again later. ")
        return
      }
      if (result.message) {
        toast.success("Credits purchased successfully.")
      }
      router.push(`/organization/${organizationId}`)
    } catch (error) {
      toast.error("Error occured while purchasing credits please try again later. ")
    }
  }
  return (
    <section className='flex items-center justify-center flex-col  px-4 dark:text-white'>
      <h1 className='font-medium text-4xl md:text-[52px] text-slate-800 text-center dark:text-white'>Flexible Pricing Plans</h1>
      <p className='text-base/7 text-red-500 max-w-sm text-center mt-4 dark:text-red-500'>Note: The website is in  development phase so you are allowed to purchase credits for free but that will get reseted when the website goes live.</p>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {pricingData.map((item, index) => (
          <div key={index} className={`border border-zinc-200 rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
            <h1 className='font-medium text-3xl text-slate-800 mt-1 dark:text-white'>{item.name}</h1>
            <p className='text-sm text-zinc-500 mt-2 dark:text-white'>{item.description}</p>
            <h1 className='font-medium text-5xl text-slate-800 mt-6 dark:text-white'>${item.price}</h1>

            <div className='w-full mt-8 space-y-2.5 pb-4'>
              {item.features.map((feature, index) => (
                <p key={index} className='flex items-center gap-3 text-sm text-zinc-500 dark:text-white'>
                  <span className='size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0 dark:bg-zinc-800'>
                    <span className='size-1.5 rounded-full bg-zinc-800 dark:bg-zinc-300' />
                  </span>
                  {feature}
                </p>
              ))}
            </div>
            <Button
              onClick={() => purchaseCredit(item.name)}
              size={'sm'}
              className="p-6 mt-4 hover:cursor-pointer w-full"
            >
              Donate Credits
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-10 min-w-[200px]" >
        <Button
          size={'sm'}
          className="p-6 mt-4 hover:cursor-pointer w-full"
        >
          Go Back
        </Button>
      </div>
    </section>
  )
}