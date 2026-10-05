import {
  ArrowUpRight,
  FileCheck2,
  Hexagon,
  Monitor,
  Server,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const workflowSteps = [
  {
    step: "//01",
    title: "Configure",
    icon: SlidersHorizontal,
  },
  {
    step: "//02",
    title: "Secure",
    icon: ShieldCheck,
  },
  {
    step: "//03",
    title: "Validate",
    icon: FileCheck2,
  },
  {
    step: "//04",
    title: "Automate",
    icon: Hexagon,
  },
  {
    step: "//05",
    title: "Deploy",
    icon: Server,
  },
  {
    step: "//06",
    title: "Monitor",
    icon: Monitor,
  },
]

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="relative flex min-h-screen w-full shrink-0 flex-col items-center justify-center bg-[#0a0a0c] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16"
      aria-label="Infrastructure"
    >
      <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-10 sm:gap-12 lg:gap-14">
        {/* Upper Content Grid (Left Content) */}
        <div className="flex max-w-2xl flex-col items-start gap-6">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 border border-white/15 bg-[#141416] px-3 py-1.5 text-xs font-medium text-zinc-300">
              <span className="size-2 shrink-0 bg-[#0067da]" />
              <span>Open source</span>
            </div>
            <div className="inline-flex items-center gap-2 border border-white/15 bg-[#141416] px-3 py-1.5 text-xs font-medium text-zinc-300">
              <span className="size-2 shrink-0 bg-[#0067da]" />
              <span>Terraform · OpenTofu</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[46px] leading-[1.15]">
            WCI: Infrastructure security & automation in one platform
          </h2>

          {/* Subtitle Description */}
          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Analyze Terraform and OpenTofu changes, map permissions and attack
            paths and automate the path to deployment
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="brand"
              className="h-11 gap-2 rounded-none bg-[#0067da] px-6 text-sm font-semibold text-white hover:bg-[#005aad]"
            >
              <span>Explore WCI</span>
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              variant="secondary"
              className="h-11 gap-2 rounded-none border border-white/15 bg-[#1e1e24] px-6 text-sm font-semibold text-white hover:bg-[#282830]"
            >
              <span>GitHub</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Bottom 6 Workflow Steps Grid Bar */}
        <div className="relative w-full border border-white/15 bg-[#0a0a0c]">
          {/* 4 Corner Crop Brackets */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -left-px size-2.5 border-t-2 border-l-2 border-[#0067da] z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -right-px size-2.5 border-t-2 border-r-2 border-[#0067da] z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -left-px size-2.5 border-b-2 border-l-2 border-[#0067da] z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-px -bottom-px size-2.5 border-r-2 border-b-2 border-[#0067da] z-10"
          />

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-3 lg:grid-cols-6">
            {workflowSteps.map(({ step, title, icon: Icon }) => (
              <div
                key={step}
                className="group flex flex-col justify-between gap-8 p-5 transition-colors duration-200 hover:bg-white/[0.03]"
              >
                {/* Top: Step Number */}
                <span className="font-mono text-xs text-zinc-500">{step}</span>

                {/* Bottom: Title & Lucide Icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-white sm:text-base">
                    {title}
                  </span>
                  <Icon className="size-5 shrink-0 text-[#0067da] transition-transform duration-200 group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
