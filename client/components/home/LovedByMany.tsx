"use client";

import { motion } from "motion/react";
import { Twitter } from "lucide-react";

const getTestimonials = (t: any) => [
  {
    name: "Sebastiaan Debrouwere",
    handle: "@iamsebdeb",
    content: t("home.testimonials.t1"),
    date: "10:01 PM · Apr 7, 2022",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Alon",
    handle: "@alon",
    content: t("home.testimonials.t2"),
    date: "6:57 PM · Dec 1, 2022",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
  },
  {
    name: "Dimitry Gershenson",
    handle: "@d_gershenson",
    content: t("home.testimonials.t3"),
    date: "1:32 PM · Jan 4, 2023",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    name: "Krishna",
    handle: "@ntkris",
    content: t("home.testimonials.t4"),
    date: "1:03 PM · Mar 3, 2023",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  },
  {
    name: "Jono Bacon",
    handle: "@jonobacon",
    content: t("home.testimonials.t5"),
    date: "4:05 PM · Jan 9, 2023",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  },
  {
    name: "Sri",
    handle: "@therealsrii",
    content: t("home.testimonials.t6"),
    date: "10:17 PM · Jan 3, 2023",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];



import { useTranslation } from "react-i18next";

export default function LovedByMany() {
  const { t } = useTranslation();
  const testimonials = getTestimonials(t);

  return (
    <section className="bg-background py-24 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="text-muted-foreground/60">{t("home.testimonials.title1")}</span> {t("home.testimonials.title2")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {t("home.testimonials.subtitle")}
            </p>

          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <div className="relative flex flex-col items-start rounded-[1.5rem] border border-border bg-muted/5 p-8 transition-all hover:bg-muted/10">
                <div className="flex w-full items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-border">
                      <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                    </div>
                  </div>
                  <Twitter className="h-4 w-4 text-muted-foreground/40" />
                </div>

                <p className="text-[15px] leading-relaxed mb-6 text-foreground/90">
                  {testimonial.content.split(' ').map((word: string, i: number) => (
                    word.startsWith('@') ? <span key={i} className="text-primary font-medium">{word} </span> : word + ' '
                  ))}
                </p>

                <p className="text-[11px] text-muted-foreground/60 uppercase font-medium tracking-wider">
                  {testimonial.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}