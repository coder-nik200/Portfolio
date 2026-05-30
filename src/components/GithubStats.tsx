import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';

type DayData = {
  commits: number;
  date: string;
};

export default function GithubStats() {
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);
  const [commitMatrix, setCommitMatrix] = useState<DayData[]>([]);

  // REAL GITHUB GRAPHQL FETCH
  const fetchGitHubData = async (token: string, username: string) => {
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();

    const weeks =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;

    if (!weeks) return [];

    const flat = weeks
      .flatMap((w: any) => w.contributionDays)
      .slice(-120)
      .map((d: any) => ({
        commits: d.contributionCount,
        date: new Date(d.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      }));

    return flat;
  };

  // LOAD DATA
  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const username = 'coder-nik200';

    fetchGitHubData(token, username).then(setCommitMatrix);
  }, []);

  const totalCommitsSum = commitMatrix.reduce((sum, item) => sum + item.commits, 0);

  const getIntensityColor = (commits: number) => {
    if (commits === 0) return 'bg-[#FAF9F6] border-on-surface/10';
    if (commits <= 2) return 'bg-[#EBE7DF] border-on-surface/20';
    if (commits <= 4) return 'bg-[#D0CCC1] border-on-surface/30';
    if (commits <= 6) return 'bg-[#A63F2C]/40 border-on-surface/45 text-white';
    return 'bg-primary border-primary text-white font-extrabold';
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-on-surface">

      <div className="glass-card p-8 sm:p-12 rounded-none border border-on-surface bg-white">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-8 border-b border-on-surface/20">

          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-primary font-bold">
              <span className="material-symbols-outlined text-xs">terminal</span>
              <span>GITHUB METRICS PORTAL</span>
            </div>

            <h3 className="font-serif italic font-extrabold text-2xl sm:text-3xl text-on-surface">
              git_stats: coder-nik200
            </h3>

            <p className="font-serif italic text-sm text-on-surface-variant mt-1">
              Active contributions and codebase metrics.
            </p>
          </div>

          <a
            href={personalData.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-on-surface/30 text-on-surface text-sm font-medium hover:bg-on-surface/5 transition"
          >
            View GitHub
          </a>
        </div>

        {/* KPI */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

          <div className="p-5 bg-[#FAF9F6] border border-on-surface/30 text-center">
            <span className="font-serif italic text-3xl font-extrabold text-primary block mb-1">
              {totalCommitsSum}
            </span>
            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">
              120-Day Commits
            </span>
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-on-surface/30 text-center">
            <span className="font-serif italic text-3xl font-extrabold text-secondary block mb-1">
              24+
            </span>
            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">
              Repositories
            </span>
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-on-surface/30 text-center">
            <span className="font-serif italic text-3xl font-extrabold text-tertiary block mb-1">
              99.2%
            </span>
            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">
              Build Success Rate
            </span>
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-on-surface/30 text-center">
            <span className="font-serif italic text-3xl font-extrabold text-[#1A1A1A] block mb-1">
              860h+
            </span>
            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">
              Active Keyboard Time
            </span>
          </div>

        </div>

        {/* HEATMAP */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant">
            <span className="font-bold">Commit Heatmap Grid</span>
            <span className="text-primary font-bold">120 Days Activity Spectrum</span>
          </div>

          <div className="relative p-3 sm:p-6 bg-[#FCFAF7] border border-on-surface/20 rounded-none overflow-x-auto">

            {/* Tooltip */}
            <div className="absolute right-3 sm:right-6 top-3 sm:top-4 font-mono text-[10px] font-bold h-6 flex items-center">
              {hoveredDay ? (
                <span className="text-[#1A1A1A] bg-white px-2 py-0.5 sm:px-2.5 border border-on-surface uppercase tracking-wider">
                  {hoveredDay.commits === 0
                    ? "No commits"
                    : `${hoveredDay.commits} commits`}{" "}
                  on {hoveredDay.date}
                </span>
              ) : (
                <span className="text-on-surface-variant/85 uppercase tracking-wider">
                  Hover tiles for daily commit data
                </span>
              )}
            </div>

            {/* Heatmap */}
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 sm:gap-2.5 pt-10 min-w-[600px] sm:min-w-0">
              {commitMatrix.slice(0, 120).map((day, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`aspect-square rounded-none border cursor-help transition-all duration-150 hover:scale-110 ${getIntensityColor(
                    day.commits
                  )}`}
                />
              ))}
            </div>

            {/* Scale Key */}
            <div className="mt-6 pt-4 border-t border-on-surface/10 flex justify-end items-center gap-2 text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-wider">
              <span>Less</span>

              <div className="h-3 w-3 rounded-none bg-[#FAF9F6] border border-on-surface/10" />
              <div className="h-3 w-3 rounded-none bg-[#EBE7DF] border border-on-surface/25" />
              <div className="h-3 w-3 rounded-none bg-[#D0CCC1] border border-on-surface/35" />
              <div className="h-3 w-3 rounded-none bg-[#A63F2C]/40 border border-[#A63F2C]/50" />
              <div className="h-3 w-3 rounded-none bg-primary border-primary" />

              <span>More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}