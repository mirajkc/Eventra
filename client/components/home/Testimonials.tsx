"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const getTestimonials = (t: any) => [
  {
    name: "Aarav Sharma",
    role: "@aarav_sharma",
    text: t("home.testimonials.t1"),
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    name: "Sneha Gurung",
    role: "@snehagurung",
    text: t("home.testimonials.t2"),
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    name: "Bishal Thapa",
    role: "@bishalthapa",
    text: t("home.testimonials.t3"),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Pramod Khadka",
    role: "@pramodkh",
    text: t("home.testimonials.t4"),
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Riya Maharjan",
    role: "@riya_m",
    text: t("home.testimonials.t5"),
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    name: "Nischal Shrestha",
    role: "@nischals",
    text: t("home.testimonials.t6"),
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    text: "They delivered a platform that exceeded expectations, understanding our needs and enhancing our event operations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Aakriti Poudel",
    role: "@aakritip",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    name: "Sushant Karki",
    role: "@sushant_k",
  },
  {
    text: "Using Eventra, our online presence and attendance significantly improved, boosting engagement.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Roshan Rai",
    role: "@roshanrai",
  },
];

const Testimonials = () => {
    const { t } = useTranslation();
    const testimonials = getTestimonials(t);

    const firstColumn = testimonials.slice(0, 3);
    const secondColumn = testimonials.slice(3, 6);
    const thirdColumn = testimonials.slice(6, 9);
    
    return (
      <section className="bg-background py-24 text-foreground overflow-hidden">
        <div className="container z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="border border-primary/20 bg-primary/5 py-1 px-4 rounded-full text-sm font-medium text-primary">Testimonials</div>
            </div>
  
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-muted-foreground/60">{t("home.testimonials.title1")}</span> {t("home.testimonials.title2")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t("home.testimonials.subtitle")}
            </p>
          </motion.div>
  
          <div className="flex justify-center gap-6 mt-16 mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
