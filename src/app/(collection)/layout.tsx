import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "My page",
  description: "Music Free",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
