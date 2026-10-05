import { CircuitHero } from "@/components/circuit-hero"
import { Faq } from "@/components/faq"
import { Goal } from "@/components/goal"
import { Infrastructure } from "@/components/infrastructure"

export default function Page() {
  return (
    <>
      <CircuitHero />
      <Goal />
      <Infrastructure />
      <Faq />
    </>
  )
}
