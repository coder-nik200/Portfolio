import React from "react";

interface Experience {
  duration: string;
  role: string;
  company: string;
  badge: string;
  workDone: string[];
  isFuture?: boolean;
}

const experiences: Experience[] = [
  {
    duration: "2023",
    role: "Started Programming Journey",
    company: "Self Learning & Exploration",
    badge: "Self-taught · Foundation",
    workDone: [
      "Started learning programming fundamentals and modern web development",
      "Explored HTML, CSS, JavaScript, and responsive UI design",
      "Built small projects to improve coding and problem solving skills",
      "Developed interest in creating modern digital experiences",
    ],
  },
  {
    duration: "2024",
    role: "Frontend & Full Stack Development",
    company: "Independent Projects",
    badge: "Freelance · Building",
    workDone: [
      "Created responsive frontend interfaces using modern technologies",
      "Worked with APIs, backend systems, and database integrations",
      "Built complete full stack web applications and productivity tools",
      "Improved application performance and user experience",
    ],
  },
  {
    duration: "2025",
    role: "AI & Product Development",
    company: "Advanced Personal Projects",
    badge: "Independent · AI-Focused",
    workDone: [
      "Focused on AI-powered platforms and productivity applications",
      "Built modern applications with scalable architecture and clean UI",
      "Worked on real-world projects combining frontend and backend systems",
      "Continuously improved development skills through hands-on learning",
    ],
  },
  {
    duration: "6 Months · Internship",
    role: "Developer & Technical Support Intern",
    company: "Architech Labs, Gurgaon",
    badge: "Gurgaon Office · Live",
    workDone: [
      "Worked on frontend and backend development tasks",
      "Helped in technical support and troubleshooting",
      "Assisted in project deployment and testing",
      "Improved UI responsiveness and user experience",
      "Worked with APIs and Firebase integrations",
      "Collaborated with team members on live projects",
    ],
  },
  {
    duration: "Present",
    role: "Creative Full Stack Developer",
    company: "Continuous Growth",
    badge: "Ongoing · Scaling",
    workDone: [
      "Learning advanced full stack and AI engineering concepts",
      "Building premium digital experiences with modern technologies",
      "Improving software architecture and scalable application systems",
      "Focused on creating impactful and meaningful digital products",
    ],
  },
];

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[11px] h-[11px] flex-shrink-0"
  >
    <rect x="2" y="3" width="12" height="11" rx="1.5" />
    <path d="M5 1v3M11 1v3M2 7h12" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[11px] h-[11px] flex-shrink-0"
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v3.5l2 2" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

interface EntryMetaProps {
  duration: string;
  role: string;
  company: string;
  badge: string;
  isFuture?: boolean;
}

const EntryMeta = ({ duration, role, company, badge, isFuture }: EntryMetaProps) => (
  <div className="text-right pr-1 max-sm:text-left max-sm:pr-0">
    {/* Year / duration */}
    <div
      className={[
        "font-mono text-[10px] font-medium tracking-[0.08em]",
        "flex items-center justify-end gap-[5px] mb-[6px]",
        "max-sm:justify-start",
        isFuture ? "text-[#888880] opacity-60" : "text-[#888880]",
      ].join(" ")}
    >
      {isFuture ? <ClockIcon /> : <CalendarIcon />}
      {duration}
    </div>

    {/* Role */}
    <p
      className={[
        "font-serif italic font-normal leading-[1.2] mb-[5px]",
        isFuture ? "text-[22px] opacity-60 text-[#111111]" : "text-[22px] text-[#111111]",
      ].join(" ")}
      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
    >
      {role}
    </p>

    {/* Company */}
    <p
      className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#888880]"
    >
      {company}
    </p>

    {/* Badge */}
    {!isFuture && (
      <span
        className="inline-block mt-[10px] px-[10px] py-[3px] border border-black/25 bg-[#FAF9F6] font-mono text-[9px] uppercase tracking-[0.12em] text-[#555550] rounded-[2px]"
      >
        {badge}
      </span>
    )}
  </div>
);

interface ContributionCardProps {
  workDone: string[];
  isFuture?: boolean;
}

const ContributionCard = ({ workDone, isFuture }: ContributionCardProps) => {
  if (isFuture) {
    return (
      <div
        className="border border-dashed border-black/25 px-5 py-4 font-serif italic text-sm text-[#555550] leading-[1.7]"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        {workDone[0]}
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/25 px-5 py-[18px] transition-all duration-200 group-hover:border-[#111111] group-hover:shadow-[4px_4px_0_rgba(17,17,17,0.06)]">
      <h4
        className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-[#111111] border-b border-black/10 pb-2 mb-3"
      >
        Core Contributions
      </h4>
      <ul className="space-y-[7px]">
        {workDone.map((item, i) => (
          <li key={i} className="flex gap-[9px] text-[12.5px] text-[#555550] leading-[1.65]">
            <span
              className="text-[#888880] flex-shrink-0 font-medium mt-[1px] font-mono"
            >
              –
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ExperienceTimeline() {
  const animationDelays = [
    "0.05s", "0.15s", "0.25s", "0.35s", "0.45s", "0.55s",
  ];

  return (
    <>
      {/* Google Fonts — add this to your <head> or _document.tsx if not already present */}
      {/* <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" /> */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .entry-animate {
          opacity: 0;
          animation: fadeUp 0.55s ease forwards;
        }
        .timeline-entry:hover .node-dot-inner {
          transform: scale(1.3) rotate(45deg);
        }
        .timeline-entry:hover .node-dot-future {
          transform: scale(1.15) rotate(45deg);
        }
      `}</style>

      <section
        id="experience"
        className="py-20 md:py-32 px-6 md:px-8 bg-[#FAF9F6] min-h-screen"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-[900px] mx-auto">

          {/* ── Header ── */}
          <header className="text-center mb-[72px]">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.45em] text-[#888880] mb-[14px]"
            >
              Professional Progression
            </p>
            <h2
              className="font-serif italic font-normal text-[#111111] leading-[1.1]"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(36px, 6vw, 54px)",
              }}
            >
              The Journey
            </h2>
          </header>

          {/* ── Timeline ── */}
          <div className="relative">

            {/* Spine */}
            <div
              className="absolute left-1/2 -translate-x-px top-[6px] bottom-[30px] w-px bg-black/25 max-sm:left-[14px]"
            />

            {/* Entries */}
            <div className="space-y-[60px]">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="timeline-entry relative grid grid-cols-[1fr_24px_1fr] gap-x-6 items-start entry-animate max-sm:grid-cols-[24px_1fr] max-sm:grid-rows-[auto_auto]"
                  style={{ animationDelay: animationDelays[idx] ?? "0.5s" }}
                >
                  {/* Left meta */}
                  <div className="max-sm:col-start-2 max-sm:row-start-1 max-sm:mb-3">
                    <EntryMeta
                      duration={exp.duration}
                      role={exp.role}
                      company={exp.company}
                      badge={exp.badge}
                    />
                  </div>

                  {/* Center dot */}
                  <div className="flex justify-center pt-[10px] z-10 max-sm:col-start-1 max-sm:row-start-1 max-sm:justify-start max-sm:pl-[6px]">
                    <div
                      className="node-dot-inner w-3 h-3 rounded-[2px] bg-[#111111] border-2 border-[#FAF9F6] transition-transform duration-200"
                    />
                  </div>

                  {/* Right card */}
                  <div className="pl-1 max-sm:col-start-2 max-sm:row-start-2 max-sm:pl-0">
                    <ContributionCard workDone={exp.workDone} />
                  </div>
                </div>
              ))}

              {/* ── Future milestone ── */}
              <div
                className="timeline-entry relative grid grid-cols-[1fr_24px_1fr] gap-x-6 items-start entry-animate max-sm:grid-cols-[24px_1fr] max-sm:grid-rows-[auto_auto]"
                style={{ animationDelay: animationDelays[experiences.length] ?? "0.6s" }}
              >
                {/* Left meta */}
                <div className="max-sm:col-start-2 max-sm:row-start-1 max-sm:mb-3">
                  <EntryMeta
                    duration="Next Horizon"
                    role="Future Milestones"
                    company="Full Stack / AI Architect Specialist"
                    badge=""
                    isFuture
                  />
                </div>

                {/* Center dot — hollow dashed */}
                <div className="flex justify-center pt-[10px] z-10 max-sm:col-start-1 max-sm:row-start-1 max-sm:justify-start max-sm:pl-[6px]">
                  <div
                    className="node-dot-future w-3 h-3 rounded-[2px] bg-[#FAF9F6] border border-dashed border-black/30 transition-transform duration-200"
                  />
                </div>

                {/* Right card — dashed future card */}
                <div className="pl-1 max-sm:col-start-2 max-sm:row-start-2 max-sm:pl-0">
                  <ContributionCard
                    isFuture
                    workDone={[
                      "Actively learning and scaling software architecture standards to craft highly resilient, fast, and automated intelligent full-stack products.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}