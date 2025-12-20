import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container py-8">
      <Separator className="mb-8" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {currentYear} Diogo Catarino. All rights reserved.</p>
        <p>Built with Next.js & shadcn/ui</p>
      </div>
    </footer>
  );
}
