"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Heart, Menu, X, Home, Book, Target, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/", icon: Home },
    { name: "O Livro", href: "/o-livro", icon: Book },
    { name: "O Projeto", href: "/o-projeto", icon: Target },
    { name: "Contato", href: "/contato", icon: Mail },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50" 
          : "bg-white/50 backdrop-blur-sm border-b border-transparent"
      )}
    >
      {/* Desktop/Tablet Top bar */}
      <div className="container flex h-16 lg:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-9 h-9 lg:w-10 lg:h-10 transition-transform group-hover:scale-105">
             <Image
                src="/images/logo.png"
                alt="A Cura das Drogas Logo"
                fill
                className="object-contain"
                priority
             />
          </div>
          <span className="font-bold text-lg lg:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            A Cura das Drogas
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  isActive 
                    ? "text-blue-600 bg-white shadow-sm" 
                    : "text-slate-600 hover:text-blue-600 hover:bg-white/50"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Social Icons - Desktop */}
          <div className="hidden sm:flex items-center border-r border-slate-200 pr-4 mr-1 space-x-2">
             <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-slate-500 hover:text-[#25D366] hover:bg-green-50 rounded-full w-9 h-9 transition-all hover:-translate-y-0.5"
            >
              <a
                href="https://wa.me/+34673017500?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20projeto!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
            <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="text-slate-500 hover:text-[#E1306C] hover:bg-pink-50 rounded-full w-9 h-9 transition-all hover:-translate-y-0.5"
            >
              <a href="https://instagram.com/acuradasdrogas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <Button 
            size="sm" 
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 font-semibold gap-2 rounded-full px-6 transition-all hover:scale-105"
            asChild
          >
            <Link href="/doar">
              <Heart className="h-4 w-4 fill-current" />
              Doar
            </Link>
          </Button>
          
           {/* Mobile Donate Button (Icon only) */}
           <Button size="sm" className="md:hidden bg-blue-600 hover:bg-blue-700 h-9 w-9 p-0 rounded-full shadow-md" asChild>
            <Link href="/doar">
              <Heart className="h-4 w-4 fill-current" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Bottom Bar (App Style) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 z-50 pb-safe-area shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <nav className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
             const isActive = pathname === item.href;
             return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors relative",
                    isActive ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                    {isActive && (
                        <span className="absolute top-0 w-12 h-0.5 bg-blue-600 rounded-b-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    )}
                  <item.icon className={cn("w-6 h-6 transition-transform duration-300", isActive && "-translate-y-0.5")} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-medium">{item.name}</span>
                </Link>
             )
          })}
        </nav>
      </div>
    </header>
  );
}