"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import { contacts } from "@/content/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="A Cura das Drogas"
            className="h-8 w-auto"
          />
          <span className="font-bold text-lg">A Cura das Drogas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/"
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            Início
          </Link>
          <Link
            href="/o-livro"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/o-livro"
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            O Livro
          </Link>
          <Link
            href="/o-projeto"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/o-projeto"
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            O Projeto
          </Link>
          <Link
            href="/doar"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/doar"
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            Doar
          </Link>
          <Link
            href="/contato"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/contato"
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-green-600 hover:text-green-700 hover:bg-green-50"
          >
            <a
              href="https://wa.me/+34673017500?text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20A%20Cura%20das%20Drogas!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga no Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Tabs */}
      <MobileNavTabs pathname={pathname} />
    </header>
  );
}

function MobileNavTabs({ pathname }: { pathname: string }) {
  return (
    <nav className="md:hidden border-t bg-background">
      <div className="container">
        <div className="flex items-center justify-between">
          <NavTab href="/" label="Início" isActive={pathname === "/"} />
          <NavTab
            href="/o-livro"
            label="Livro"
            isActive={pathname === "/o-livro"}
          />
          <NavTab
            href="/o-projeto"
            label="Projeto"
            isActive={pathname === "/o-projeto"}
          />
          <NavTab href="/doar" label="Doar" isActive={pathname === "/doar"} />
          <NavTab
            href="/contato"
            label="Contato"
            isActive={pathname === "/contato"}
          />
        </div>
      </div>
    </nav>
  );
}

function NavTab({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex-1 text-center py-3 text-xs font-medium transition-colors border-b-2",
        isActive
          ? "text-primary border-primary font-semibold"
          : "text-muted-foreground border-transparent hover:text-primary hover:border-primary/20"
      )}
    >
      {label}
    </Link>
  );
}
