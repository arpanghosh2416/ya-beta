import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white bg-slate-950">
      {/* Background gradients */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-rose-500/10 to-amber-500/10 blur-3xl" />
      </div>

      {/* Subtle star field */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.6), transparent 1px), radial-gradient(1px 1px at 100px 80px, rgba(255,255,255,0.5), transparent 1px), radial-gradient(1px 1px at 250px 120px, rgba(255,255,255,0.4), transparent 1px), radial-gradient(1px 1px at 300px 200px, rgba(255,255,255,0.4), transparent 1px)",
          backgroundSize: "350px 350px",
        }}
      />

      {/* Floating planet illustration */}
      <motion.div
        aria-hidden
        initial={{ y: -8 }}
        animate={{ y: 8 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute hidden pointer-events-none left-6 top-16 sm:block"
      >
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="planet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <ellipse
            cx="48"
            cy="60"
            rx="36"
            ry="10"
            fill="url(#ring)"
            opacity="0.35"
          />
          <circle cx="48" cy="48" r="22" fill="url(#planet)" />
        </svg>
      </motion.div>

      {/* Shooting comet */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-10 top-20 h-1 w-28 rounded-full bg-gradient-to-r from-white/70 to-transparent shadow-[0_0_10px_2px_rgba(255,255,255,0.35)]"
        initial={{ x: 80, y: -30, opacity: 0 }}
        animate={{ x: -40, y: 40, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3.8,
          ease: "easeInOut",
        }}
      />

      {/* Content container */}
      <section className="relative z-10 flex flex-col items-center justify-center max-w-6xl min-h-screen px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <div className="max-w-3xl p-8 mx-auto border rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg sm:p-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs tracking-wider uppercase border rounded-full border-white/20 bg-white/5 text-white/80">
                <strong> Error 404</strong>
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-transparent bg-gradient-to-br from-white via-white to-white/70 bg-clip-text sm:text-5xl md:text-6xl">
              Page not found
            </h1>

            <p className="mt-4 text-base max-w-prose text-white/80 md:text-lg">
              The URL you tried to access doesn’t exist, has moved, or went on
              an unexpected vacation. Let’s get you back on track.
            </p>

            {/* Quick actions */}
            <div className="flex flex-col gap-3 mt-8 sm:flex-row sm:items-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Go home
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-5 py-3 font-semibold transition border rounded-2xl border-white/20 bg-white/5 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Contact support
              </Link>
            </div>

            {/* Helpful links */}
            <div className="grid grid-cols-1 gap-3 mt-10 text-sm text-white/80 sm:grid-cols-3">
              <Link
                to="/sitemap.xml"
                className="p-4 transition border group rounded-xl border-white/10 bg-white/5 hover:bg-white/10"
              >
                <p className="font-semibold text-white">Sitemap</p>
                <p className="mt-1 text-white/70">
                  See the full structure of the site.
                </p>
              </Link>
              <Link
                to="/robots.txt"
                className="p-4 transition border group rounded-xl border-white/10 bg-white/5 hover:bg-white/10"
              >
                <p className="font-semibold text-white">Robots</p>
                <p className="mt-1 text-white/70">See what is allowed.</p>
              </Link>
              <Link
                to="/"
                className="p-4 transition border group rounded-xl border-white/10 bg-white/5 hover:bg-white/10"
              >
                <p className="font-semibold text-white">Blogs</p>
                <p className="mt-1 text-white/70">Coming Soon</p>
              </Link>
            </div>
          </div>

          {/* Footer hint */}
          <p className="max-w-md mx-auto mt-6 text-xs text-center text-white/60">
            Tip: set this component on a catch-all route (path="*") so any
            unknown URL lands here.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
