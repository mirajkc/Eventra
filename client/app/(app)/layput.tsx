import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventra - HomePage",
  description: "Eventra All In One Event Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
}
