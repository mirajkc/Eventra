"use client";

import { motion } from "motion/react";
import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";

const testimonials = [
  {
    name: "Sebastiaan Debrouwere",
    handle: "@iamsebdeb",
    content: "We use @eventra on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI",
    date: "10:01 PM · Apr 7, 2022",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Alon",
    handle: "@alon",
    content: "As an early stage startup I'm really loving using @eventra - great balance of flexibility and descriptiveness",
    date: "6:57 PM · Dec 1, 2022",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
  },
  {
    name: "Dimitry Gershenson",
    handle: "@d_gershenson",
    content: "We use our CRM @eventra for sales, fundraising, and recruiting. It's awesome",
    date: "1:32 PM · Jan 4, 2023",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    name: "Krishna",
    handle: "@ntkris",
    content: "Holy shit @eventra is beautiful 😍 I've run my CRM on Notion to date. Hubspot & Salesforce too clunky. Sleek and simple, just what I need",
    date: "1:03 PM · Mar 3, 2023",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  },
  {
    name: "Jono Bacon",
    handle: "@jonobacon",
    content: "Let's be honest, most CRMs suck. Overcomplicated, expensive, and you have to bend to their will...not the other way around. I am a huge fan of @eventra - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple.",
    date: "4:05 PM · Jan 9, 2023",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  },
  {
    name: "Sri",
    handle: "@therealsrii",
    content: "I've been using @eventra to track applicants, manage my deal pipeline and manage the associated notes/tasks. The use-cases are unlimited; it truly feels like the Notion of CRM.",
    date: "10:17 PM · Jan 3, 2023",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export default function LovedByMany() {
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
              <span className="text-muted-foreground/60">Loved by</span> Builders.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Eventra is the event management tool for everyone who values collaboration and seamless experiences.
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
                  {testimonial.content.split(' ').map((word, i) => (
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