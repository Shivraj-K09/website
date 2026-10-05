"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlignRight, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/wci", label: "WCI" },
  { href: "/about-us", label: "About Us" },
]

export function Header({ className }: { className?: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const shellEl = document.querySelector('[class*="shell"]') as HTMLElement | null
      const currentScrollY = shellEl ? shellEl.scrollTop : window.scrollY
      setScrolled(currentScrollY > 15)
    }

    // Capture phase ensures detection across both window and container (.shell)
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true })
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full shadow-none transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#02060b]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
        className
      )}
    >
      {/* Equal outer tracks keep navigation centered on the page axis */}
      <div className="mx-auto grid h-16 w-full max-w-380 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 sm:px-10 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-16">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/"
              className="flex items-center"
              aria-label="WayneGrid Tech Home"
            >
              <Icons.logo className="h-11 w-auto shrink-0" />
            </Link>
          </motion.div>
        </div>

        {/* Middle: Navigation Menu (Desktop) */}
        <nav className="hidden items-center gap-6 justify-self-center text-sm font-medium whitespace-nowrap md:flex lg:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "font-semibold text-white"
                      : "text-zinc-300 hover:text-white"
                  )}
                >
                  {item.label}
                  {isActive && (
                    mounted ? (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand"
                      />
                    )
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Right: CTA Button & Mobile Sheet Menu */}
        <div className="flex items-center gap-3 justify-self-end">
          {/* Main CTA Button */}
          <Button
            variant="brand"
            className="group h-10 gap-1.5 rounded-none px-4 font-semibold shadow-none"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.92 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
              className="text-white hover:bg-white/10"
            >
              <AlignRight className="size-5" />
            </Button>
          </motion.div>

          {/* Mobile Sheet Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              side="right"
              className="w-80 border-l border-white/10 bg-[#02060b] p-6 text-white shadow-none"
            >
              <SheetHeader className="p-0">
                <SheetTitle className="flex items-center gap-2">
                  <Icons.logo className="h-8 w-auto shrink-0" />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 * (index + 1) }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block text-base font-medium transition-colors hover:text-white",
                          isActive
                            ? "font-semibold text-white"
                            : "text-zinc-400"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
