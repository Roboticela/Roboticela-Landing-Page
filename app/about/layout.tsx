import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Roboticela — Think Different. Build Everything.",
  description: "Roboticela is a company with no category and no limits. Learn our story, mission, and the vision behind the brand that's building everything.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
