"use client";
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from "react-i18next";
import { PricingCardItem } from "@/components/ui/price";

// --- ICONS for the demo ---
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56v4.82a6 6 0 01-1.83-1.01l-4.01-4.01a6 6 0 01-1.01-1.83H7.5a6 6 0 017.38-5.84zM10.5 14.5L14 11m-3.5 3.5v-4.5h4.5" />
  </svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6.75h.008v.008H5.25V6.75zm.008 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008zM12 21V3" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function PricingCard() {
  const { t } = useTranslation();

  const pricingData = [
    {
      name: t("landing.pricing.plans.small.name"),
      price: 10,
      description: t("landing.pricing.plans.small.description"),
      features: [
        t("landing.pricing.features.get50"),
        t("landing.pricing.features.premium"),
        t("landing.pricing.features.notified"),
        t("landing.pricing.features.noReset")
      ],
      icon: <UserIcon />,
      isPopular: false
    },
    {
      name: t("landing.pricing.plans.medium.name"),
      price: 30,
      description: t("landing.pricing.plans.medium.description"),
      features: [
        t("landing.pricing.features.get100"),
        t("landing.pricing.features.premium"),
        t("landing.pricing.features.notified"),
        t("landing.pricing.features.noReset")
      ],
      icon: <RocketIcon />,
      isPopular: true
    },
    {
      name: t("landing.pricing.plans.large.name"),
      price: 50,
      description: t("landing.pricing.plans.large.description"),
      features: [
        t("landing.pricing.features.get200"),
        t("landing.pricing.features.premium"),
        t("landing.pricing.features.notified"),
        t("landing.pricing.features.noReset")
      ],
      icon: <BuildingIcon />,
      isPopular: false
    }
  ];

  return (
    <section className='flex items-center justify-center flex-col py-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className='font-bold text-4xl md:text-5xl tracking-tight text-foreground'>{t("landing.pricing.title")}</h1>
        <p className='text-lg text-muted-foreground max-w-2xl text-center mt-6 mx-auto'>{t("landing.pricing.subtitle")}</p>
      </motion.div>

      <motion.div
        className="w-full max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {pricingData.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PricingCardItem
              variant={item.isPopular ? "popular" : "default"}
              planName={item.name}
              description={item.description}
              price={item.price}
              billingCycle="/month"
              features={item.features}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}