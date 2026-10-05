"use client"

import { motion } from "motion/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    id: "item-1",
    number: "//01",
    question: "What can I build with this?",
    answer:
      "You can build scalable cloud infrastructure, automated security workflows, continuous compliance checks, and fine-grained access policies using unified configuration files.",
  },
  {
    id: "item-2",
    number: "//02",
    question: "Do I need AI or Machine Learning Experience",
    answer:
      "No. Abstracts the underlying AI complexity through clean APIs and workflow primitives. You define what you need inputs, tasks and expected outputs. This handles the rest and if you have basic programming knowledge is enough to get started",
  },
  {
    id: "item-3",
    number: "//03",
    question: "How does Cybersecurity work?",
    answer:
      "Cybersecurity is built directly into the core engine. It automatically scans infrastructure configurations for vulnerabilities, overly permissive IAM roles, and vector attack paths before deployment.",
  },
  {
    id: "item-4",
    number: "//04",
    question: "What are the necessary tools to perform automation?",
    answer:
      "It seamlessly integrates with Terraform, OpenTofu, GitHub Actions, and standard CI/CD pipelines, eliminating manual setup and repetitive operations.",
  },
  {
    id: "item-5",
    number: "//05",
    question: "Is it suitable for production use?",
    answer:
      "Yes. It is engineered for enterprise-grade workloads with zero-downtime deployments, high availability, and built-in compliance guardrails.",
  },
]

function SubtleBackgroundVector() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 h-96 w-192 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-[#0067da]/6 via-transparent to-transparent blur-3xl" />
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        className="absolute inset-0 size-full text-[#0067da] opacity-8"
      >
        <path
          d="M0 100H200L250 150H450M1200 100H1000L950 150H750"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="450" cy="150" r="3" fill="currentColor" />
        <circle cx="750" cy="150" r="3" fill="currentColor" />
      </svg>
    </div>
  )
}

export function Faq() {
  return (
    <section
      id="faq"
      className="relative w-full shrink-0 bg-white py-20 text-zinc-900 sm:py-24 lg:py-28"
      aria-label="Frequently Asked Questions"
    >
      <SubtleBackgroundVector />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            FAQ’s
          </h2>
          <p className="mt-3 text-base text-zinc-500 sm:text-lg">
            Have Question? We’ve got answers.
          </p>
        </motion.div>

        {/* Centered Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <Accordion
            defaultValue={["item-2"]}
            className="w-full border-t border-zinc-200"
          >
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <AccordionItem
                  value={item.id}
                  className="relative border-b border-zinc-200 transition-colors duration-200 data-open:z-10 data-open:-mt-px data-open:border-y-2 data-open:border-[#0067da] data-open:bg-[#f5f5f7] data-[state=open]:z-10 data-[state=open]:-mt-px data-[state=open]:border-y-2 data-[state=open]:border-[#0067da] data-[state=open]:bg-[#f5f5f7]"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between px-4 py-5 sm:px-6 sm:py-6 hover:no-underline text-left">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm font-medium text-zinc-400 transition-colors duration-200 group-aria-expanded/accordion-trigger:text-[#0067da] group-data-open/accordion-trigger:text-[#0067da] group-data-[state=open]/accordion-trigger:text-[#0067da] sm:text-base">
                        {item.number}
                      </span>
                      <span className="text-base font-semibold tracking-tight text-zinc-900 transition-colors duration-200 group-aria-expanded/accordion-trigger:text-[#0067da] group-data-open/accordion-trigger:text-[#0067da] group-data-[state=open]/accordion-trigger:text-[#0067da] sm:text-lg">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-6 pt-0 sm:px-6">
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-10 text-sm leading-relaxed text-zinc-500 sm:pl-12 sm:text-base max-w-3xl"
                    >
                      {item.answer}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
