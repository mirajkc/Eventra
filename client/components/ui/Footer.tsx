"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";

export const getFooterLinks = (t: any) => ({
  company: [
    { href: "/about", label: t("footer.aboutUs") },
    { href: "/blog", label: t("footer.blog") },
    { href: "/careers", label: t("footer.careers") },
    { href: "/contact", label: t("footer.contact") }
  ],
  product: [
    { href: "/events", label: t("footer.exploreEvents") },
    { href: "/organizations", label: t("footer.organizations") },
    { href: "/about", label: t("footer.about") }
  ]
});

const socialLinks = [
  { icon: Github, href: "https://github.com/mirajkc", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/miraj-k-c-2375533a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
];

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const footerLinks = getFooterLinks(t);

  return (
    <footer className="w-full border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="group flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Eventra<span className="text-muted-foreground/50">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              {t("footer.brandDesc")}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2.5 rounded-full border border-border bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground tracking-tight">{t("footer.product")}</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-foreground tracking-tight mb-4">{t("footer.newsletter.title")}</h4>
            <p className="text-sm text-muted-foreground mb-6">
              {t("footer.newsletter.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  className="pl-10 h-11 rounded-xl bg-muted/30 border-border/50 focus:ring-1 focus:ring-ring"
                />
              </div>
              <Button className="h-11 px-5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-black dark:hover:bg-slate-200 transition-all active:scale-[0.98]">
                <Send className="h-4 w-4 mr-2" />
                {t("footer.newsletter.button")}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 opacity-50" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-medium">
          <p>{t("footer.copyright")}</p>

        </div>
      </div>
    </footer>
  );
}