import { Layout } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My page",
  description: "Generated by create next app",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>{children}</Layout>
  );
}