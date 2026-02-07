import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Individuals - Roboticela",
  description: "Products and solutions designed for individual creators, learners, and innovators.",
};

export default function IndividualsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
