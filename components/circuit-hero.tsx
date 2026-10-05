"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { Circuit } from "@/components/circuit"

export function CircuitHero() {
  return (
    <section
      className="relative isolate grid h-screen min-h-screen w-full shrink-0 place-items-center overflow-hidden max-[899px]:grid-rows-[minmax(0,1fr)_auto_minmax(0,1.15fr)] [@media(max-height:500px)]:grid-rows-1"
      aria-labelledby="hero-heading"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute inset-0 size-full"
      >
        <Circuit />
      </motion.div>
      <div className="relative z-1 w-[min(calc(100%-48px),760px)] text-center text-[#f6f8fc] max-[899px]:row-start-2 max-[899px]:w-[min(calc(100%-40px),640px)] [@media(max-height:500px)]:row-start-1 [@media(max-height:500px)]:w-[min(75%,760px)]">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="m-0 text-[56px] leading-[1.32] font-medium tracking-[-0.02em] text-balance max-[899px]:mx-auto max-[899px]:max-w-[20ch] max-[899px]:text-[clamp(28px,6.8vw,42px)] max-[899px]:leading-[1.18] max-[899px]:tracking-tight [@media(max-height:500px)]:text-[clamp(24px,4vw,38px)]"
        >
          Security, infrastructure and{" "}
          <span className="block max-[899px]:inline">
            automation{" "}
            <span className="text-[color-mix(in_oklch,var(--brand),white_24%)] max-[899px]:whitespace-nowrap">
              - unified
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-160 text-base leading-5.5 text-pretty text-[#b4bcc4] max-[899px]:mt-4.5 max-[899px]:max-w-85 [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:text-sm"
        >
          We research what makes technology complicated, inefficient or hard to
          secure, and turn good ideas into real products. We’re starting with
          cloud infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[clamp(26px,2.7vw,38px)] flex flex-wrap justify-center gap-[clamp(10px,1.1vw,16px)] max-[899px]:mt-6 max-[899px]:gap-3 [@media(max-height:500px)]:mt-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="button"
              variant="brand"
              className="group h-10 gap-1.5 rounded-none px-4 font-semibold shadow-xs"
            >
              Explore WCI{" "}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="button"
              className="group h-10 gap-1.5 rounded-none bg-white px-4 font-semibold text-[#111820] shadow-xs hover:bg-[#e9eef5]"
            >
              Get in touch{" "}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
