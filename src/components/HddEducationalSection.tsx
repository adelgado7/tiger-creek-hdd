export function HddEducationalSection() {
  const stages = [
    {
      num: "01",
      tag: "PILOT BORE",
      title: "Guide the path",
      description:
        "A steerable drill head creates the initial path. Tracking helps the crew monitor its position.",
    },
    {
      num: "02",
      tag: "REAMING",
      title: "Make room for the pipe",
      description:
        "The initial bore is enlarged as needed for the pipe size and ground conditions.",
    },
    {
      num: "03",
      tag: "PULLBACK",
      title: "Bring the pipe through",
      description:
        "The product pipe is pulled into the prepared bore. Reaming and pullback may be combined on some installations.",
    },
  ];

  return (
    <section
      id="why-hdd"
      className="py-20 sm:py-24 bg-[oklch(0.23_0.02_168)] text-white scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[oklch(0.32_0.03_168)]">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.67_0.19_43.5)] font-mono">
              Understand The Method
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Go under. <br />
              Keep more of what&apos;s above.
            </h2>
          </div>

          <div className="lg:col-span-5 text-base text-[oklch(0.85_0.02_168)] leading-relaxed space-y-4">
            <p>
              <strong>Horizontal directional drilling (HDD)</strong> installs pipe through a guided
              bore. It can reduce surface disturbance compared with a continuous open trench. Entry
              and exit excavations, utility exposure, and restoration may still be needed.
            </p>
          </div>
        </div>

        {/* Technical SVG Cross-Section Diagram */}
        <div className="mt-12 bg-[oklch(0.18_0.02_168)] border border-[oklch(0.32_0.03_168)] rounded-[2px] p-4 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 text-xs font-mono text-[oklch(0.65_0.02_168)] border-b border-[oklch(0.28_0.02_168)] mb-6">
            <span className="uppercase tracking-widest text-[oklch(0.67_0.19_43.5)] font-bold">
              Cross-Section Diagram
            </span>
            <span>Conceptual illustration. Not to scale.</span>
          </div>

          {/* Responsive SVG */}
          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[620px] max-w-[960px] mx-auto">
              <svg
                viewBox="0 0 960 380"
                className="w-full h-auto drop-shadow-sm select-none"
                aria-label="Conceptual diagram of horizontal directional drilling bore path beneath a road surface"
                role="img"
              >
                {/* Surface background sky/air */}
                <rect x="0" y="0" width="960" height="110" fill="#131b18" />

                {/* Ground profile (Subsurface Soil) */}
                <rect x="0" y="110" width="960" height="270" fill="#202925" />
                <line x1="0" y1="110" x2="960" y2="110" stroke="#37453f" strokeWidth="3" />

                {/* Road Crossing Section */}
                <g id="road-crossing">
                  {/* Road Base embankment */}
                  <polygon points="340,110 390,92 570,92 620,110" fill="#2d3833" />
                  {/* Asphalt road deck */}
                  <rect x="390" y="90" width="180" height="8" fill="#444f4a" />
                  {/* Dashed white center line */}
                  <line
                    x1="430"
                    y1="94"
                    x2="465"
                    y2="94"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="6,4"
                  />
                  <line
                    x1="495"
                    y1="94"
                    x2="530"
                    y2="94"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="6,4"
                  />
                </g>

                {/* Labels above ground */}
                <text
                  x="130"
                  y="70"
                  fill="#e8edea"
                  fontSize="13"
                  fontFamily="Fira Sans, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.1em"
                >
                  ENTRY
                </text>
                <text
                  x="480"
                  y="55"
                  fill="#e8edea"
                  fontSize="13"
                  fontFamily="Fira Sans, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.1em"
                  textAnchor="middle"
                >
                  ROAD CROSSING
                </text>
                <text
                  x="830"
                  y="70"
                  fill="#e8edea"
                  fontSize="13"
                  fontFamily="Fira Sans, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.1em"
                  textAnchor="end"
                >
                  EXIT
                </text>

                {/* Entry HDD Drill Rig Silhouette */}
                <g id="rig-silhouette" transform="translate(100, 78)">
                  <polygon points="0,32 45,32 55,18 20,18" fill="#f47626" />
                  <rect x="5" y="10" width="22" height="10" fill="#d95d12" />
                  <line
                    x1="28"
                    y1="20"
                    x2="80"
                    y2="46"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </g>

                {/* Exit Pit indicator */}
                <g id="exit-pit" transform="translate(770, 105)">
                  <polygon
                    points="0,5 50,5 40,25 10,25"
                    fill="#18221f"
                    stroke="#f47626"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Curving Guided Underground Bore Path */}
                {/* Arc from (175, 122) curving down through depth ~270 and exiting at (785, 122) */}
                <path
                  d="M 175 122 Q 480 340 785 122"
                  fill="none"
                  stroke="#f47626"
                  strokeWidth="6"
                  strokeDasharray="10 8"
                  strokeLinecap="round"
                />

                {/* Subsurface safety depth buffer indicator */}
                <path
                  d="M 175 122 Q 480 340 785 122"
                  fill="none"
                  stroke="#f47626"
                  strokeWidth="18"
                  strokeOpacity="0.12"
                />

                {/* Tracking / Guided Depth Text Label */}
                <rect
                  x="360"
                  y="275"
                  width="240"
                  height="28"
                  fill="#18221f"
                  rx="2"
                  stroke="#37453f"
                  strokeWidth="1"
                />
                <text
                  x="480"
                  y="294"
                  fill="#f6f4ed"
                  fontSize="12"
                  fontFamily="Fira Sans, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.12em"
                  textAnchor="middle"
                >
                  GUIDED UNDERGROUND PATH
                </text>

                {/* Depth dimension guide */}
                <line
                  x1="480"
                  y1="110"
                  x2="480"
                  y2="255"
                  stroke="#71827a"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <text
                  x="490"
                  y="190"
                  fill="#9db0a7"
                  fontSize="11"
                  fontFamily="Fira Sans, sans-serif"
                  fontStyle="italic"
                >
                  Depth profile planned per site & utility clearance
                </text>
              </svg>
            </div>
          </div>

          <div className="text-center pt-2 text-xs text-[oklch(0.65_0.02_168)]">
            Distinguishes the bore path from installed pipe. Existing utilities along any alignment
            must be verified before boring.
          </div>
        </div>

        {/* 3 Simplified Stages of Horizontal Boring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="bg-[oklch(0.18_0.02_168)] border border-[oklch(0.32_0.03_168)] p-7 rounded-[2px] space-y-4"
            >
              <div className="text-xs font-mono font-bold text-[oklch(0.67_0.19_43.5)] tracking-wider flex items-center gap-2">
                <span>{stage.num}</span>
                <span>/</span>
                <span className="uppercase">{stage.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">{stage.title}</h3>
              <p className="text-sm text-[oklch(0.85_0.02_168)] leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Planning Caution Box */}
        <div className="mt-10 p-5 bg-[oklch(0.20_0.02_168)] border border-[oklch(0.28_0.02_168)] rounded-[2px] text-xs text-[oklch(0.75_0.02_168)] leading-relaxed">
          <strong className="text-white">Engineering Note:</strong> Feasibility depends on soil and
          rock characteristics, existing utilities, entry/exit access, project design requirements,
          municipal/TxDOT permits, pipe size, and crossing length. This overview serves as
          commercial guidance, not operating tutorial or final engineered alignment.
        </div>
      </div>
    </section>
  );
}
