"use client"

import { useEffect, useId, useRef, useState } from "react"
import { LockKeyhole, ServerCog, ShieldKeyhole, UserShield, type LucideIcon } from "lucide-react"

type Point = readonly [number, number]
type Trace = { id: string; points: readonly Point[]; active?: boolean }

// Design coordinates: 1008 × 616. Each route stays individually addressable
// for future stroke-dashoffset or traveling-light animations.
const traces: Trace[] = [
  {
    id: "left-outer",
    points: [
      [76, 0],
      [76, 129],
      [34, 172],
      [34, 370],
      [58, 396],
      [58, 532],
      [106, 579],
      [106, 616],
    ],
  },
  {
    id: "left-inner",
    points: [
      [183, 0],
      [183, 174],
      [88, 268],
      [88, 443],
      [144, 498],
      [144, 616],
    ],
  },
  {
    id: "left-back",
    points: [
      [188, 0],
      [188, 333],
      [240, 384],
      [240, 616],
    ],
  },
  {
    id: "left-branch",
    points: [
      [188, 282],
      [237, 330],
      [237, 616],
    ],
  },
  {
    id: "top-left",
    points: [
      [318, 0],
      [318, 89],
      [355, 126],
      [355, 215],
    ],
  },
  {
    id: "top-right",
    points: [
      [619, 0],
      [619, 89],
      [579, 130],
      [579, 242],
    ],
  },
  {
    id: "right-inner",
    points: [
      [762, 0],
      [762, 155],
      [716, 201],
      [716, 296],
      [782, 360],
      [782, 519],
      [837, 574],
    ],
  },
  {
    id: "right-back",
    points: [
      [893, 0],
      [893, 102],
      [962, 172],
      [962, 347],
    ],
  },
  {
    id: "right-outer",
    points: [
      [938, 0],
      [938, 332],
      [1008, 397],
    ],
  },
  {
    id: "bottom-right",
    points: [
      [888, 530],
      [888, 616],
    ],
  },
  {
    id: "bottom-center",
    points: [
      [678, 407],
      [716, 445],
      [716, 616],
    ],
  },
  {
    id: "bottom-left",
    points: [
      [407, 483],
      [407, 616],
    ],
  },
  {
    id: "upper-left-feed",
    points: [
      [223, 0],
      [223, 102],
    ],
    active: true,
  },
  {
    id: "upper-left-out",
    points: [
      [246, 148],
      [286, 186],
      [286, 340],
      [327, 380],
      [327, 616],
    ],
    active: true,
  },
  {
    id: "lower-left-feed",
    points: [
      [165, 196],
      [165, 393],
    ],
    active: true,
  },
  {
    id: "lower-left-out",
    points: [
      [189, 439],
      [263, 508],
      [263, 616],
    ],
    active: true,
  },
  {
    id: "upper-right-feed",
    points: [
      [839, 0],
      [839, 135],
    ],
    active: true,
  },
  {
    id: "upper-right-out",
    points: [
      [864, 183],
      [908, 226],
      [908, 418],
      [955, 465],
      [955, 616],
    ],
    active: true,
  },
  {
    id: "lower-right-feed",
    points: [
      [837, 184],
      [837, 456],
    ],
    active: true,
  },
  {
    id: "lower-right-out",
    points: [
      [837, 503],
      [837, 616],
    ],
    active: true,
  },
]

type Box = { id: string; x: number; y: number; size: number }

// The diagonal port sits on the rounded corner itself, not the square's
// bounding-box corner. Routes and lights share these coordinates.
function nodePorts({ x, y, size, id }: Box) {
  const inset = 6 * (1 - Math.SQRT1_2)
  const straight = id === "lower-right"
  const entry: Point = [x + size / 2, y]
  const exit: Point = straight
    ? [x + size / 2, y + size]
    : [x + size - inset, y + size - inset]
  const lights: Point[] = [
    [entry[0], entry[1] - 1.2],
    [exit[0] + (straight ? 0 : 0.85), exit[1] + (straight ? 1.2 : 0.85)],
  ]
  return { entry, exit, lights }
}

function makeScene(width: number, height: number) {
  const mobile = width < 900
  const unit = Math.min(1.25, Math.max(0.8, width / 400))
  const size = mobile ? 32 * unit : Math.min(58, Math.max(36, width * 0.047))
  const top = Math.min(height * 0.12, 70 * unit)
  const bottom = height - Math.min(height * 0.2, 120 * unit)
  const box = (id: string, x: number, y: number): Box => ({
    id,
    x: width * x - size / 2,
    y,
    size,
  })
  const boxes = mobile
    ? [
        box("upper-left", 0.2, top),
        box("upper-right", 0.81, top + 30 * unit),
        box("lower-left", 0.16, bottom - 20 * unit),
        box("lower-right", 0.82, bottom + 12 * unit),
      ]
    : [
        box("upper-left", 0.221, height * 0.166),
        box("upper-right", 0.832, height * 0.219),
        box("lower-left", 0.164, height * 0.638),
        box("lower-right", 0.83, height * 0.74),
      ]
  // Separate compact corner illustrations. Tall phones gain empty breathing
  // room in the middle, never longer wires or vertically stretched motifs.
  const bend = 24 * unit
  const left = width * 0.07
  const right = width - left
  const routes: Trace[] = mobile
    ? [
        {
          id: "left-outer",
          points: [
            [left + bend, 0],
            [left + bend, top + 15],
            [left, top + 15 + bend],
            [left, top + 85 * unit],
          ],
        },
        {
          id: "top-inner",
          points: [
            [width * 0.38, 0],
            [width * 0.38, top - 10],
            [width * 0.38 + bend, top - 10 + bend],
            [width * 0.38 + bend, top + 55 * unit],
          ],
        },
        {
          id: "right-outer",
          points: [
            [right, 0],
            [right, top + 65 * unit],
            [right - bend, top + 65 * unit + bend],
            [right - bend, top + 125 * unit],
          ],
        },
        {
          id: "bottom-left",
          points: [
            [left, height],
            [left, bottom + 10],
            [left + bend, bottom + 10 - bend],
            [left + bend, bottom - 65 * unit],
          ],
        },
        {
          id: "bottom-inner",
          points: [
            [width * 0.38, height],
            [width * 0.38, bottom + 25],
            [width * 0.38 - bend, bottom + 25 - bend],
            [width * 0.38 - bend, bottom - 45 * unit],
          ],
        },
        {
          id: "bottom-right",
          points: [
            [right, height],
            [right, bottom + 50],
            [right - bend, bottom + 50 - bend],
            [right - bend, bottom - 35 * unit],
          ],
        },
      ]
    : traces
        .filter((trace) => !trace.active)
        .map((trace) => {
          const points: Point[] = []
          trace.points.forEach(([x, y], index) => {
            const previous = trace.points[index - 1]
            const px = (x / 1008) * width
            let py = (y / 616) * height
            // Keep every elbow at 45 degrees rather than stretching the illustration.
            if (previous && previous[0] !== x && previous[1] !== y) {
              py =
                points[index - 1][1] +
                Math.sign(y - previous[1]) * Math.abs(px - points[index - 1][0])
            }
            points.push([px, py])
          })
          return { ...trace, points }
        })
  boxes.forEach((node, index) => {
    const { id, x, y, size } = node
    const { entry, exit } = nodePorts(node)
    const cx = x + size / 2
    const bottom = y + size
    const lower = id.startsWith("lower")
    routes.push({
      id: `${id}-feed`,
      active: true,
      points: [
        [cx, lower ? Math.max(0, y - (mobile ? 65 * unit : height * 0.37)) : 0],
        entry,
      ],
    })
    if (index === 3) {
      routes.push({
        id: `${id}-out`,
        active: true,
        points: [exit, [cx, height]],
      })
    } else {
      const elbow = mobile ? (index === 1 ? 15 : 22) : width * 0.04
      const endX = Math.min(width - 8, x + size + elbow)
      routes.push({
        id: `${id}-out`,
        active: true,
        points: [
          exit,
          [endX, bottom + endX - x - size],
          [endX, mobile && !lower ? bottom + 65 * unit : height],
        ],
      })
    }
  })
  return { routes, boxes }
}

const defaultNodeIcons: Record<string, LucideIcon> = {
  "upper-left": UserShield,
  "upper-right": ServerCog,
  "lower-left": LockKeyhole,
  "lower-right": ShieldKeyhole,
}

export interface CircuitProps extends React.ComponentProps<"svg"> {
  nodeIcons?: Partial<Record<string, LucideIcon>>
}

export function Circuit({
  className = "",
  style,
  nodeIcons,
  ...props
}: CircuitProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [ready, setReady] = useState(false)
  const [bounds, setBounds] = useState({ width: 1008, height: 616 })
  const id = useId().replace(/:/g, "")

  useEffect(() => {
    const element = svgRef.current?.parentElement ?? svgRef.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => {
      setReady(true)
      setBounds({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const { width, height } = bounds
  const { routes, boxes } = makeScene(width, height)

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute inset-0 size-full mask-[radial-gradient(ellipse_24%_26%_at_50%_49%,transparent_10%,#0006_52%,#000_100%)] max-[899px]:mask-[radial-gradient(ellipse_65%_31%_at_50%_48%,transparent_35%,#0005_65%,#000_100%)] ${className}`}
      style={{ visibility: ready ? "visible" : "hidden", ...style }}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
      fill="none"
      {...props}
    >
      <defs>
        <mask
          id={`${id}-outside-nodes`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={width}
          height={height}
        >
          <rect width={width} height={height} fill="white" />
          {boxes.map(({ id: boxId, x, y, size }) => (
            <rect
              key={boxId}
              x={x + 0.7}
              y={y + 0.7}
              width={size - 1.4}
              height={size - 1.4}
              rx="5.3"
              fill="black"
            />
          ))}
        </mask>
        <radialGradient id={`${id}-spark`}>
          <stop stopColor="var(--circuit-highlight)" />
          <stop
            offset=".18"
            stopColor="var(--circuit-highlight)"
            stopOpacity=".55"
          />
          <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
        <filter
          id={`${id}-bloom`}
          x={-10}
          y={-10}
          width={width + 20}
          height={height + 20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        {routes.map(({ id: routeId, points, active }) => {
          const start = points[0]
          const end = points[points.length - 1]
          const feed = routeId.endsWith("feed")
          return (
            <linearGradient
              key={routeId}
              id={`${id}-${routeId}`}
              gradientUnits="userSpaceOnUse"
              x1={start[0]}
              y1={start[1]}
              x2={end[0]}
              y2={end[1]}
            >
              <stop
                stopColor={
                  active && !feed
                    ? "var(--circuit-highlight)"
                    : "var(--brand)"
                }
                stopOpacity={active && !feed ? 0.95 : feed ? 0 : 0.12}
              />
              <stop
                offset={feed ? ".65" : ".16"}
                stopColor="var(--brand)"
                stopOpacity={active ? 0.48 : 0.2}
              />
              <stop
                offset={feed ? ".88" : ".55"}
                stopColor="var(--brand)"
                stopOpacity={active ? (feed ? 0.75 : 0.14) : 0.08}
              />
              <stop
                offset="1"
                stopColor={
                  active && feed ? "var(--circuit-highlight)" : "var(--brand)"
                }
                stopOpacity={active && feed ? 1 : 0}
              />
            </linearGradient>
          )
        })}
      </defs>
      {routes.map(({ id: routeId, points, active }) => {
        const coordinates = points.map((point) => point.join(",")).join(" ")
        return (
          <g
            key={routeId}
            data-circuit={routeId}
            mask={`url(#${id}-outside-nodes)`}
          >
            {active && (
              <polyline
                points={coordinates}
                stroke={`url(#${id}-${routeId})`}
                strokeWidth="3.5"
                opacity=".22"
                filter={`url(#${id}-bloom)`}
              />
            )}
            <polyline
              points={coordinates}
              stroke={`url(#${id}-${routeId})`}
              strokeWidth={active ? 1.4 : 1}
              strokeLinejoin="round"
            />
          </g>
        )
      })}
      {boxes.map((node) => {
        const { id: boxId, x, y, size } = node
        const Icon = nodeIcons?.[boxId] ?? defaultNodeIcons[boxId]
        const iconSize = Math.round(size * 0.46)
        const iconOffset = (size - iconSize) / 2
        return (
          <g key={boxId} data-circuit-node={boxId}>
            <rect
              x={x}
              y={y}
              width={size}
              height={size}
              rx="6"
              className="fill-(--circuit-surface) stroke-brand stroke-[1.4px] [stroke-opacity:0.6]"
            />
            {Icon && (
              <g
                transform={`translate(${x + iconOffset}, ${y + iconOffset})`}
                className="text-(--circuit-highlight)"
              >
                <Icon
                  size={iconSize}
                  strokeWidth={1.8}
                  className="opacity-90 drop-shadow-[0_0_4px_var(--brand)]"
                />
              </g>
            )}
            {nodePorts(node).lights.map(([cx, cy], i) => (
              <g key={i} mask={`url(#${id}-outside-nodes)`}>
                <circle cx={cx} cy={cy} r="7" fill={`url(#${id}-spark)`} />
                <circle
                  cx={cx}
                  cy={cy}
                  r="1.3"
                  fill="var(--circuit-highlight)"
                />
              </g>
            ))}
          </g>
        )
      })}
      {routes
        .filter((route) => !route.active && route.points.length > 1)
        .map(({ id: routeId, points }) => {
          const [x, y] = points[0]
          const next = points[1]
          const cy = y + (next[1] - y) * 0.55
          return (
            <g key={routeId}>
              <circle
                cx={x}
                cy={cy}
                r="6"
                fill={`url(#${id}-spark)`}
                opacity=".7"
              />
              <circle
                cx={x}
                cy={cy}
                r=".9"
                fill="var(--circuit-highlight)"
                opacity=".7"
              />
            </g>
          )
        })}
    </svg>
  )
}
