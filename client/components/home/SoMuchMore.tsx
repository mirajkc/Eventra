"use client";

import { motion } from "motion/react";
import { 
  Zap, 
  Users, 
  BarChart3, 
  Filter, 
  Calendar, 
  Layers,
  Sparkles,
  Search,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    title: "Quick actions",
    description: "Streamline your event workflow with customizable shortcuts and instant updates.",
    icon: <Zap className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
    illustration: (
      <div className="relative flex h-24 w-full items-center justify-center">
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-6 w-10 rounded border border-border/50 bg-background/50 flex items-center justify-center text-[10px] text-muted-foreground">
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Guest enrichment",
    description: "Automatically update guest profiles with the latest information on autopilot.",
    icon: <Sparkles className="h-5 w-5 text-purple-500 dark:text-purple-400" />,
    illustration: (
      <div className="flex flex-col gap-2 w-full max-w-[140px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-border/50 bg-background/50 px-2 py-1.5">
            <div className="h-2 w-2 rounded-full bg-purple-500/50 dark:bg-purple-400/50" />
            <div className="h-1.5 w-16 rounded-full bg-muted/50" />
            <Sparkles className="ml-auto h-2.5 w-2.5 text-purple-500/50 dark:text-purple-400/50" />
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Mobile App",
    description: "Manage check-ins and registrations from anywhere with our lightweight mobile app.",
    icon: <Users className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />,
    illustration: (
      <div className="relative h-24 w-16 rounded-xl border border-border/50 bg-background/50 p-2">
        <div className="h-1 w-6 mx-auto mb-2 rounded-full bg-muted/50" />
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-muted/50" />
          <div className="h-2 w-3/4 rounded bg-muted/50" />
          <div className="h-8 w-full rounded-md bg-emerald-500/10 dark:bg-emerald-400/20" />
        </div>
      </div>
    )
  },
  {
    title: "Event analysis",
    description: "Get deeper insights into your event performance and guest engagement at a glance.",
    icon: <BarChart3 className="h-5 w-5 text-orange-500 dark:text-orange-400" />,
    illustration: (
      <div className="flex items-end gap-1.5 h-16">
        {[40, 70, 45, 90, 60, 80].map((h, i) => (
          <div 
            key={i} 
            className="w-3 rounded-t-sm bg-orange-500/20 dark:bg-orange-400/30" 
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    )
  },
  {
    title: "Dynamic Filters",
    description: "Easily find and segment attendees with our powerful and flexible filtering system.",
    icon: <Filter className="h-5 w-5 text-pink-500 dark:text-pink-400" />,
    illustration: (
      <div className="flex flex-wrap gap-1.5 justify-center max-w-[160px]">
        {['VIP', 'Confirmed', 'Checked-in', 'Pending'].map((t) => (
          <div key={t} className="px-2 py-1 rounded-full border border-border/50 bg-background/50 text-[9px] text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="h-2.5 w-2.5 text-pink-500/50 dark:text-pink-400/50" /> {t}
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Smart Sorting",
    description: "Organize your events and attendees exactly how you want with tiered sorting.",
    icon: <Layers className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />,
    illustration: (
      <div className="space-y-2 w-full max-w-[140px]">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded border border-border/50 bg-background/50 p-1.5">
            <div className="h-3 w-3 rounded bg-cyan-500/20 dark:bg-cyan-400/30" />
            <div className="h-1.5 w-12 rounded-full bg-muted/50" />
            <div className="ml-auto h-2 w-2 rounded-sm bg-muted/50" />
          </div>
        ))}
      </div>
    )
  }
];

export default function SoMuchMore() {
  return (
    <section className="bg-background py-24 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header content */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            And so <span className="text-muted-foreground">much more...</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Your events are always evolving. <br />
            Why should your management system be any different?
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-start rounded-[1.5rem] border border-border bg-muted/10 p-8 transition-colors hover:bg-muted/20"
            >
              {/* Feature Illustration */}
              <div className="relative mb-8 flex h-40 w-full items-center justify-center rounded-xl bg-background/50 border border-border/50 overflow-hidden group-hover:border-primary/20 transition-colors">
                {/* Dotted border effect */}
                <div className="absolute inset-4 rounded-lg border border-dashed border-border/40" />
                {feature.illustration}
              </div>

              {/* Feature Text */}
              <div className="flex items-center gap-3 mb-3">
                {feature.icon}
                <h3 className="text-xl font-medium text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}