import { WCICapabilities } from "@/components/wci-capabilities";
import { WCIChanges } from "@/components/wci-changes";
import { WCIFlow } from "@/components/wci-flow";
import { WCIHero } from "@/components/wci-hero";
import { WCIIntegrations } from "@/components/wci-integrations";

export default function WCIPage() {
  return (
    <>
    <WCIHero/>
    <WCIFlow/>
    <WCICapabilities/>
    <WCIChanges/>
    <WCIIntegrations/>
    </>
  )
}
