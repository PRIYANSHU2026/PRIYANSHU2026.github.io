"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
            <span className="sr-only">Priyanshu Tiwari</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Priyanshu<span className="text-blue-500">.</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/images/PRIYANSHU_TIWARI.pdf"
                      target="_blank"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center space-x-3">
          <Button asChild variant="outline" className="px-2" title="Download Resume">
            <Link href="/images/PRIYANSHU_TIWARI.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Resume</span>
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
