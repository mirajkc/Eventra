
import Image from "next/image";
import BlurText from "../BlurText";

export interface LandingComponentLeftProps {
  title: string
  body: string
  image: string
}

export default function LandingComponentLeft({ title, body, image }: LandingComponentLeftProps) {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-6xl px-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left" >
          <BlurText
            text={title}
            delay={0}
            animateBy="words"
            direction='top'
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          />
          <BlurText
            text={body}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          />
        </div>
        <div className="w-full md:w-1/2 w-100 h-100 flex justify-center rounded-2xl" >
          <Image src={image} width={270} height={400} alt="question" className="rounded-2xl shadow-2xl object-cover h-auto max-w-md md:max-w-full" />
        </div>
      </div>
    </>
  )
}     