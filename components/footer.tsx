"use client"
import { ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { Icons } from "./icons"

const rings = [
  {
    className:
      "absolute h-[1240px] w-[1240px] rounded-[620px] border border-solid border-[#ffffff0d] bg-[#ffffff0a]",
  },
  {
    className:
      "absolute h-[1040px] w-[1040px] rounded-[520px] border border-solid border-[#ffffff0d] bg-[#ffffff0a]",
  },
  {
    className:
      "absolute h-[840px] w-[840px] rounded-[420px] border border-solid border-[#ffffff0d] bg-[#ffffff0a]",
  },
]

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/" },
      { label: "Contact", href: "/" },
      { label: "FAQ", href: "/" },
    ],
  },
  {
    title: "WCI",
    links: [
      { label: "Overview", href: "/" },
      { label: "Github", href: "/" },
      { label: "Docs", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms & Conditions", href: "/" },
    ],
  },
]
export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event: any) => {
    event?.preventDefault()
    if (!email.trim()) {
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }
  const date = new Date()
  return (
    <footer className="relative h-auto w-full">
      <section className="relative z-0 flex min-h-125.5 w-full items-center justify-center overflow-hidden bg-brand">
        {rings.map((ring, idx) => (
          <div key={idx} className={ring.className} aria-hidden />
        ))}

        <div
          className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,rgba(20,20,21,0)_0%,rgba(20,20,21,1)_97%)]"
          aria-hidden
        />

        <div className="z-1 flex w-210 max-w-full flex-col items-center justify-center gap-14 px-6">
          <div className="flex flex-col items-center gap-9 text-center">
            <h1 className="m-0 self-stretch text-[clamp(30px,2.78vw,40px)] leading-[1.7275] font-semibold tracking-[-2.02px]">
              WCI is where we start, not where we stop
            </h1>
            <p className="m-0 self-stretch leading-6">
              Wayne Grid is not limited to cybersecurity or one product. As we
              grow we will explore new areas of technology, build new software
              and work on problems across the industry.
            </p>
          </div>
          <Button
            variant="default"
            className="group h-10 gap-1.5 rounded-none px-4 font-semibold shadow-none"
          >
            <span>About Us</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6 bg-[#141415] px-20 pb-10 max-[700px]:px-6">
        <div className="flex w-full flex-[0_0_auto] items-start justify-between gap-10 px-0 pt-20 pb-16 max-[1300px]:flex-wrap">
          <div className="inline-flex flex-[0_0_auto] flex-col justify-center gap-2">
            <div className="h-14 w-[107px]" aria-label="WayneGrid Tech Home">
              <Icons.logo className="h-full w-full shrink-0" />
            </div>
            <p className="w-[236px] text-xs tracking-[0.24px] text-[#b0b0b0]">
              Practical software for the problems that make technology harder
              than it should be.
            </p>
          </div>
          <div className="inline-flex gap-25 max-[600px]:flex-wrap max-[600px]:gap-10">
            {footerColumns.map((column) => (
              <nav
                key={column.title}
                aria-label={`${column.title} links`}
                className="item-start inline-flex flex-[0_0_auto] flex-col gap-4"
              >
                <h2 className="tracking-0 -mt-px w-fit text-sm leading-[22.4px] whitespace-nowrap text-white uppercase">
                  {column.title}
                </h2>
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm leading-6 font-medium whitespace-nowrap text-[#b0b0b0] transition-colors hover:text-white focus-visible:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
          <div className="inline-flex flex-col gap-4">
            <h2
              id="newsletter-heading"
              className="-mt-px text-sm leading-[22.4px] whitespace-nowrap text-white"
            >
              NEWS LETTER
            </h2>
            <p className="w-[322px] text-xs leading-normal tracking-[0.24px] text-[#b0b0b0] max-[400px]:w-auto">
              Follow that we are building, occasional updates on WCI and new
              work, no spam.
            </p>
            <form onSubmit={handleSubmit} className="-mr-0.5 w-[322px]">
              <div className="flex gap-4">
                <input
                  id="newletter-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setSubmitted(false)
                  }}
                  placeholder="you@company.com"
                  aria-describedby={
                    submitted ? "newsletter-success" : undefined
                  }
                  className="h-11 w-full bg-[#343637] px-4 text-xs leading-[19.2px] font-medium text-[#b0b0b0] placeholder:text-[#b0b0b0] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0074f4]"
                />
                <Button
                  type="submit"
                  variant={"brand"}
                  className="h-11 gap-1.5 rounded-none px-4 font-semibold shadow-none"
                >
                  Subscribe
                </Button>
              </div>
              {submitted && (
                <span className="text-xs text-[#b0b0b0]">
                  Thanks for subscribing!
                </span>
              )}
            </form>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-[#b0b0b05a]" />
        <div className="inline-flex w-full items-center justify-between gap-10 px-6 max-[700px]:flex-wrap max-[700px]:justify-center">
          <p className="flex items-center self-stretch text-xs tracking-[0.10px] max-[700px]:text-center">
            © {date.getFullYear()} Wayne Grid Technologies. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/">
              <Icons.instagram className="h-6" />
            </a>
            <a href="/">
              <Icons.x className="h-6" />
            </a>
            <a href="/">
              <Icons.facebook className="h-6" />
            </a>
            <a href="/">
              <Icons.youtube className="h-6" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}
