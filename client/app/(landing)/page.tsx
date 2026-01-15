import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto" >
      <div className="flex flex-col justify-center items-center h-screen">
        <BlurText
          text="Welcome to Eventra"
          delay={0}
          animateBy="words"
          direction='top'
          className="text-2xl md:text-5xl mb-8"
        />
        <BlurText
          text="The All in One Event Management System"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl md:text-5xl mb-8"
        />
      </div>
    </main>
  )
}