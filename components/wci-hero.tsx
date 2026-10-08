import { ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"
import { Icons } from "./icons"

const corner =
  "absolute pointer-events-none z-1 -m-px size-3 border-slate-600 transition-colors duration-200 group-hover:border-brand motion-reduce:transition-none"

const features = [
  {
    title: "One line, whole system exposed",
    description:
      "A single change can open a port, widen a role or make data public.",
    icon: Icons.database,
  },
  {
    title: "Security sits apart from delivery",
    description:
      "The tools that check infrastructure aren’t the tools that deploy it.",
    icon: Icons.cybersecurity,
  },
  {
    title: "Findings without context",
    description:
      "Alerts say what’s wrong, not why it matters or how to fix it.",
    icon: Icons.alert,
  },
]

export function WCIHero() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden flex flex-col items-center gap-10 px-10 py-36 z-0 max-[700px]:px-6">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="w-full bg-[#02060b] h-1/2" />
        <div className="w-full bg-white h-1/2" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <div className="flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-6 self-stretch">
          <h1 className="-mt-px self-stretch text-center text-[56px] font-medium tracking-normal text-transparent max-[720px]:text-[42px]">
            <span className="text-white">
              Build, secure and deploy <br className="max-[526px]:hidden" />
              infrastructure with{" "}
            </span>
            <span className="text-[#53a4fe]">confidence</span>
          </h1>
          <p className="w-[743px] text-center tracking-normal text-[#b6bfc4] max-[850px]:w-auto">
            WCI is an open-source platform that analyzes your Terraform and
            OpenTofu changes, maps permissions and attack paths, explains the
            real-world impact, and automates the path to deployment.
          </p>
        </div>
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="brand"
            className="group h-10 gap-1.5 rounded-none px-4 font-semibold shadow-none"
          >
            <span>View on GitHub</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button
            variant="default"
            className="group h-10 gap-1.5 rounded-none px-4 font-semibold shadow-none"
          >
            <span>Read our docs</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
      <div className="-my-10 flex items-center justify-center">
        <img src={'/infra-app.png'} className="w-[1460px] h-[864px] object-contain"/>
      </div>
      <div className="flex w-full items-end">
        <div className="flex items-start justify-center">
          <div className="flex flex-col items-start justify-center gap-4 py-2.5">
            <h1 className="text-[40px] leading-13 font-bold text-[#1f2123]">
              Cloud infrastructure breaks <br />
              in ways that are easy to miss.
            </h1>
            <p className="self-stretch text-xl leading-8 text-[#636769]">
              Small changes, misconfigurations or disconnected tools can create
              big risks—often without you realizing it until it&apos;s too late.
            </p>
          </div>
          <div className="flex flex-col gap-5 px-10 py-10">
            {features.map(({ title, description, icon: Icon }, index) => (
              <article
                key={index}
                className="group relative flex h-28 w-[689px] border border-[#d9d9d959] bg-white shadow-[inset_0_1px_0_#ffffff80,0_8px_30px_-16px_#163c6720] transition-colors duration-200 hover:border-brand/40 motion-reduce:transition-none"
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
                <div className="flex items-center gap-10 p-6">
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center border border-[#d9d9d959] bg-[#d9d9d959] transition-colors group-hover:bg-brand/10 motion-reduce:transition-none group-hover:[&_path]:fill-brand"
                  >
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="flex flex-col justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[#1f2123]">
                      {title}
                    </h3>
                    <p className="text-sm text-[#636769]">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
