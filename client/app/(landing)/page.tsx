import BlurText from "@/components/BlurText";
import LandingSearch from "@/components/landing/LandingSearch";
import { ChevronDown } from "lucide-react";
import LandingComponentLeft from "@/components/landing/LandingComponentLeft";
import LandingComponentRight from "@/components/landing/LandingComponentRight";
import PricingCard from "@/components/ui/PricingCard";
import LandingPricing from "@/components/landing/LandingPricing";


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      {/* main landing */}
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] py-12 md:py-0">
        <div className="flex flex-col justify-center items-center text-center w-full max-w-4xl">
          <BlurText
            text="Welcome to Eventra"
            delay={0}
            animateBy="words"
            direction='top'
            className="text-4xl md:text-6xl mb-6 font-bold tracking-tight"
          />
          <BlurText
            text="The All in One Event Management System"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-3xl mb-12 text-gray-600 dark:text-gray-300"
          />
          <LandingSearch />
        </div>
        <div className="mt-16 animate-bounce">
          <ChevronDown className="bg-gray-100 size-10 rounded-full p-2.5 dark:bg-gray-800 text-gray-600 dark:text-gray-300" />
        </div>
      </div>



      {/* what is eventra */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <LandingComponentLeft title="What is Eventra" body="Eventra is a modern event management and discovery platform designed to help users explore, create, and manage events seamlessly. It serves as a centralized hub where organizers can list their events with details such as date, venue, tickets, and descriptions, while users can browse, search, and register for events that match their interests. Built with a clean and interactive user experience in mind, Eventra aims to simplify event planning and participation by integrating features like user authentication, event categorization, booking functionality, and a visually engaging interface, making event coordination more efficient and accessible for both organizers and attendees." image="/question1.jpg" />
      </div>

      {/* how it works */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <LandingComponentRight title="How it works" body="Eventra makes discovering and managing events simple and effortless. Users can explore a wide range of events based on their interests, location, and preferences, while organizers can easily create and manage their own events through an intuitive dashboard. With a seamless sign-up process, secure authentication, and smooth booking experience, Eventra connects people to meaningful experiences in just a few clicks, making event planning and participation faster, more organized, and more enjoyable for everyone." image="/work.png" />
      </div>

      {/* why choose eventra */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <LandingComponentLeft title="Why choose Eventra" body="Eventra is built to make event discovery and management effortless. Whether you're an attendee looking for exciting experiences or an organizer planning your next big event, Eventra provides a seamless, secure, and user-friendly platform designed for everyone." image="/choose.png" />
      </div>

      {/* feature */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <LandingComponentRight title="Features by Eventra" body="Eventra is packed with features designed to make event discovery and management effortless for both attendees and organizers. From intuitive event browsing and smart search to secure ticket booking and real-time updates, the platform ensures a smooth and engaging experience. Organizers get access to a powerful dashboard to create, manage, and track their events, while users enjoy personalized recommendations, seamless registration, and a visually rich interface that makes every interaction simple, fast, and enjoyable." image="/features.png" />
      </div>

      {/* pricing */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
        <LandingPricing />
      </div>
    </main>
  )
}