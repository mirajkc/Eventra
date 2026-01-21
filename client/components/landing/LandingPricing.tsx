"use client";
import PricingCard from "../ui/PricingCard";
import {motion} from "motion/react"

export default function LandingPricing(){
  return (
    <motion.div 
    initial = {{opacity : 0 , x : 100}}
    whileInView={{opacity : 1, x : 0}}
    transition={{ease : "easeInOut", duration : 0.8}}
     >
      <PricingCard />
    </motion.div>
  )
}