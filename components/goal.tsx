import { Icons } from "@/components/icons"

const areas = [
  {
    title: "Software",
    description:
      "Practical tools that bring software, security and automation together.",
    icon: Icons.software,
  },
  {
    title: "Cybersecurity",
    description:
      "Security built in from the start, not added as an afterthought.",
    icon: Icons.cybersecurity,
  },
  {
    title: "Automation",
    description: "Less repetitive work, fewer mistakes and more time to focus.",
    icon: Icons.automation,
  },
  {
    title: "Innovation",
    description:
      "Research and fresh ideas that turn into useful, real-world products.",
    icon: Icons.innovation,
  },
]

const corner =
  "pointer-events-none z-1 col-start-1 row-start-1 -m-px size-3 border-slate-600 transition-colors duration-200 group-hover:border-brand motion-reduce:transition-none"

function GoalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none col-start-1 row-start-1 grid h-full min-h-0 w-full min-w-0 self-stretch overflow-hidden [contain:size]"
    >
      <div className="col-start-1 row-start-1 bg-radial-[at_0%_80%] from-brand/15 via-brand/3 to-transparent" />
      <div className="col-start-1 row-start-1 bg-radial-[at_100%_10%] from-brand/12 via-transparent to-transparent" />
      {/* <div className="goal-field-grid col-start-1 row-start-1" /> */}
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        className="col-start-1 row-start-1 h-full max-h-full w-full min-w-0 text-brand opacity-20 max-sm:opacity-15"
      >
        <g
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M0 166H108L174 232H338M0 194H80L146 260H256" />
          <path d="M136 0V94L196 154H390M164 0V78L218 132H284" />
          <path d="M1600 160H1476L1416 220H1300M1600 190H1500L1448 242H1376" />
          <path d="M1458 0V78L1396 140H1270" />
          <path d="M0 814H124L188 750H310M0 846H146L210 782H260" />
          <path d="M144 1000V904L206 842H376" />
          <path d="M1600 820H1478L1410 752H1292M1600 852H1460L1406 798H1350" />
          <path d="M1440 1000V918L1372 850H1190" />
          <circle cx="1580" cy="-16" r="282" opacity=".25" />
          <circle cx="1580" cy="-16" r="306" opacity=".15" />
          <circle cx="-100" cy="980" r="325" opacity=".25" />
          <circle cx="-100" cy="980" r="350" opacity=".15" />
        </g>
        <g fill="currentColor">
          {[
            [338, 232],
            [390, 154],
            [1300, 220],
            [1270, 140],
            [310, 750],
            [376, 842],
            [1292, 752],
            [1190, 850],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
          ))}
        </g>
      </svg>
    </div>
  )
}

export function Goal() {
  return (
    <section
      id="goal"
      aria-labelledby="goal-heading"
      className="isolate grid min-h-svh w-full shrink-0 overflow-hidden border-y border-brand/10 bg-[#f8faff] text-slate-900"
    >
      <GoalBackground />
      <div className="z-1 col-start-1 row-start-1 grid min-w-0 items-center px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-340">
          <header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <h2
              id="goal-heading"
              className="text-[clamp(32px,3.2vw,48px)] leading-tight font-semibold tracking-tight text-balance"
            >
              Four Areas, One <span className="text-brand">Goal</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              The problems we pick sit where software, security and automation
              overlap.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 min-[540px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {areas.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className="group grid min-w-0 border border-brand/15 bg-[#edf3fa] bg-linear-to-br from-[#f2f6fb] to-[#e5edf7] shadow-[inset_0_1px_0_#ffffff80,0_8px_30px_-16px_#163c6720] transition-colors duration-200 hover:border-brand/40 motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className={`${corner} self-start justify-self-start border-t-2 border-l-2`}
                />
                <span
                  aria-hidden="true"
                  className={`${corner} self-start justify-self-end border-t-2 border-r-2`}
                />
                <span
                  aria-hidden="true"
                  className={`${corner} self-end justify-self-start border-b-2 border-l-2`}
                />
                <span
                  aria-hidden="true"
                  className={`${corner} self-end justify-self-end border-r-2 border-b-2`}
                />
                <div className="col-start-1 row-start-1 flex min-h-65 min-w-0 flex-col justify-between gap-12 p-6 sm:min-h-75 lg:min-h-85 lg:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      aria-hidden="true"
                      className="grid size-16 place-items-center border border-brand/15 bg-brand/5 transition-colors group-hover:bg-brand/10 motion-reduce:transition-none group-hover:[&_path]:fill-brand [&_svg]:h-9 [&_svg]:w-8"
                    >
                      <Icon />
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-[11px] text-slate-400 tabular-nums"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg leading-snug font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="mx-auto hidden h-11 w-[calc(75%+6px)] grid-cols-3 border-b border-brand/20 lg:grid"
          >
            <span className="border-x border-brand/20" />
            <span className="border-r border-brand/20" />
            <span className="border-r border-brand/20" />
          </div>
          <div className="flex flex-col items-center">
            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-brand/25 lg:block"
            />
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 border border-brand/15 bg-white px-5 py-2.5 text-center text-xs text-slate-500 lg:mt-0">
              <span aria-hidden="true" className="mr-1 size-1.5 bg-brand" />
              Four disciplines.
              <strong className="font-medium text-slate-700">
                Designed to work together.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
