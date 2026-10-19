"use client"
import { useState } from "react"
import { Icons } from "./icons"

const corner =
  "absolute pointer-events-none z-1 -m-px size-3 border-brand transition-colors duration-200 group-hover:border-brand motion-reduce:transition-none"
const flowChart = [
  {
    id: 0,
    title: "Configure",
    icon: Icons.secure,
    cardTitle: "",
    cardDesc: "",
  },
  {
    id: 1,
    title: "Secure",
    icon: Icons.secure,
    cardTitle: "Protect every layer of your digital environment.",
    cardDesc:
      "Secure cloud infrastructure, applications, endpoints, identities, and sensitive data against evolving threats. Apply consistent security policies across your environment while reducing exposure to unauthorized access, vulnerabilities, and malicious activity.",
  },
  {
    id: 2,
    title: "Validate",
    icon: Icons.secure,
    cardTitle: "",
    cardDesc: "",
  },
  {
    id: 3,
    title: "Automate",
    icon: Icons.secure,
    cardTitle: "",
    cardDesc: "",
  },
  {
    id: 4,
    title: "Deploy",
    icon: Icons.secure,
    cardTitle: "",
    cardDesc: "",
  },
  {
    id: 5,
    title: "Monitor",
    icon: Icons.secure,
    cardTitle: "",
    cardDesc: "",
  },
]
export function WCIFlow() {
  const [active, setActive] = useState(0)
  return (
    <section className="flex flex-col items-center gap-10 bg-[#141415] px-10 py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="-mt-px self-stretch text-center text-[40px] font-semibold text-white">
          From configuration to monitoring, without the patchwork
        </h1>
        <p className="w-[1084px] text-center text-xl text-[#b0b0b0] max-[1100px]:w-auto">
          Most teams piece this together from separate tools and scripts. WCI
          runs it as one workflow, built around the pull requests your team
          already reviews.
        </p>
      </div>

      <div className="flex">
        <div className="flex">
          <div className="flex flex-col">
            {flowChart.map(({ id, title }, index) => (
              <div
                key={index}
                className={`group relative -mt-px flex h-[100px] w-[624px] cursor-pointer items-center border border-[#d9d9d959] px-10 transition-colors duration-200 hover:bg-white/20 motion-reduce:transition-none ${active==id&&"bg-white/20"}`}
                onClick={() => setActive(id)}
              >
                <span
                  aria-hidden="true"
                  className={`${corner} top-0 left-0 border-t-2 border-l-2`}
                />
                <span
                  aria-hidden="true"
                  className={`${corner} top-0 right-0 border-t-2 border-r-2`}
                />
                <span
                  aria-hidden="true"
                  className={`${corner} bottom-0 left-0 border-b-2 border-l-2`}
                />
                <span
                  aria-hidden="true"
                  className={`${corner} right-0 bottom-0 border-r-2 border-b-2`}
                />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
            ))}
          </div>
          <div className="group pointer-events-none relative -mt-px flex h-[595px] w-[624px] flex-col gap-4 items-center border border-[#d9d9d959] p-10 transition-colors duration-200 hover:bg-white/20 motion-reduce:transition-none">
            <span
              aria-hidden="true"
              className={`${corner} top-0 left-0 border-t-2 border-l-2`}
            />
            <span
              aria-hidden="true"
              className={`${corner} top-0 right-0 border-t-2 border-r-2`}
            />
            <span
              aria-hidden="true"
              className={`${corner} bottom-0 left-0 border-b-2 border-l-2`}
            />
            <span
              aria-hidden="true"
              className={`${corner} right-0 bottom-0 border-r-2 border-b-2`}
            />
            <p className="w-full text-left">
              {"//0" + (flowChart[active].id + 1)}
            </p>
            <div className="flex flex-col gap-4 px-6 items-center">
              <div className="h-[327px] w-[360px] mb-2">
                {(() => {
                  const IconComponent = flowChart[active].icon
                  return <IconComponent />
                })()}
              </div>
              <h3 className="self-stretch text-center text-xl font-medium text-white">
                {flowChart[active].cardTitle}
              </h3>
              <p className="self-stretch text-center text-sm leading-5 text-[#b0b0b0]">
                {flowChart[active].cardDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
