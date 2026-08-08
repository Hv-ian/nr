import SiteShell from "@/components/SiteShell";
import "../globals.css";

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
