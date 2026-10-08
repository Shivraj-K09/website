import { Icons } from "./icons"

export function WCIIntegrations() {
  return (
    <section className="relative h-[530px] bg-white text-[#1f2123]">
      <Icons.integrations className="absolute w-full" />
      <div className="flex flex-col items-center gap-4 px-10 py-20">
        <h1 className="-mt-px self-stretch text-center text-[40px] font-semibold">
          Integrations
        </h1>
        <p className="text-center text-xl text-[#636769] max-[1100px]:w-auto">
          Works with the tools you already use
        </p>
      </div>
    </section>
  )
}
