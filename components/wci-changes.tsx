import { Icons } from "./icons"

export function WCIChanges() {
  return (
    <section className="flex flex-col items-center gap-20 bg-[#141415] px-10 py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="-mt-px self-stretch text-center text-[40px] font-semibold text-white">
          See what a change actually does
        </h1>
        <p className="w-[1084px] text-center text-xl text-[#b0b0b0] max-[1100px]:w-auto">
          WCI reads the change, works out what it exposes and writes it up for
          the reviewer. Try the suggested fix.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Icons.changes1 />
        <Icons.changes2 />
      </div>
    </section>
  )
}
