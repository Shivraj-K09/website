import { Icons } from "./icons"

export function WCICapabilities() {
  return (
    <section className="flex min-h-screen w-full items-start justify-between bg-white px-10 py-20 text-[#1f2123]">
      <div className="flex w-[401px] flex-col justify-center gap-4 py-2.5">
        <h1 className="-mt-px text-[40px] leading-13 font-bold whitespace-nowrap">
          Capabilites
        </h1>
        <p className="self-stretch text-xl leading-8 text-[#636769]">
          There are 3 capabilities such as analyze, explain and automate
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="py-2 text-2xl text-[#636769]">//01</p>
          <div className="flex items-center pr-4">
            <div className="flex flex-col gap-4">
              <h1 className="-mt-px text-[32px] leading-13 font-bold whitespace-nowrap">
                Analyse
              </h1>
              <div className="flex w-[377px] flex-col gap-4">
                <p className="leading-6">
                  Security scanning:{" "}
                  <span className="text-[#010000a1]">
                    Misconfigurations and weaknesses
                  </span>
                </p>
                <p className="leading-6">
                  Change & PR analysis:{" "}
                  <span className="text-[#010000a1]">
                    What a change does to your posture
                  </span>
                </p>
                <p className="leading-6">
                  Permission & access:{" "}
                  <span className="text-[#010000a1]">Who can reach what</span>
                </p>
                <p className="leading-6">
                  Attack paths:{" "}
                  <span className="text-[#010000a1]">
                    Routes to sensitive infrastructure
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-18">
              <Icons.analyse />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-[#d9d9d9] pt-8">
          <p className="py-2 text-2xl text-[#636769]">//02</p>
          <div className="flex items-center pr-4">
            <div className="flex flex-col gap-4">
              <h1 className="-mt-px text-[32px] leading-13 font-bold whitespace-nowrap">
                Explain
              </h1>
              <div className="flex w-[377px] flex-col gap-4">
                <p className="leading-6">
                  Security explanations:{" "}
                  <span className="text-[#010000a1]">
                    Complex changes turned into clear, actionable information.
                    Every finding includes:
                  </span>
                </p>
                <ul className="flex list-disc flex-col gap-2 pl-6">
                  <li>What</li>
                  <li>Why it matters</li>
                  <li>Where it came from</li>
                  <li>How to fix</li>
                </ul>
              </div>
            </div>
            <div className="ml-18">
              <Icons.explain />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-[#d9d9d9] pt-8">
          <p className="py-2 text-2xl text-[#636769]">//03</p>
          <div className="flex items-center pr-4">
            <div className="flex flex-col gap-4">
              <h1 className="-mt-px text-[32px] leading-13 font-bold whitespace-nowrap">
                Automate
              </h1>
              <div className="flex w-[377px] flex-col gap-4">
                <p className="leading-6">
                  Infrastructure automation:{" "}
                  <span className="text-[#010000a1]">
                    Repetitive config and validation
                  </span>
                </p>
                <p className="leading-6">
                  Deployment automation:{" "}
                  <span className="text-[#010000a1]">
                    Secure, repeatable deploys
                  </span>
                </p>
                <p className="leading-6">
                  CI/CD integration:{" "}
                  <span className="text-[#010000a1]">
                    Checks inside your pipeline
                  </span>
                </p>
                <p className="leading-6">
                  Continuous awareness:{" "}
                  <span className="text-[#010000a1]">
                    Posture tracked over time
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-18">
              <Icons.automate />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
