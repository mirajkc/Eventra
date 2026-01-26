import FreqentlyAskedQuestions from "@/components/about/FreqentlyAskedQuestions";
import WhoAreWe from "@/components/about/WhoAreWe";
import { TypographyH1 } from "@/components/ui/Typography";
import Link from "next/link";

export default function About() {
    return (
      <main className="">
        <WhoAreWe /> 
        <FreqentlyAskedQuestions />
        <div className="mb-8 hover:cursor-pointer hover:text-gray-600">
          <Link href="/auth/login">
          <TypographyH1>Let's get started</TypographyH1></Link>
        </div>
      </main>
    )
}
