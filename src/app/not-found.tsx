"use client";


import Link from "next/link";

export default function NotFound() {
  

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --ink: #f0ece0;
          --accent: #ff3e00;
          --muted: #3a3a3a;
          --grid: #161616;
        }

        body { background: var(--bg); }

        .page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(var(--grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        /* Noise texture */
        .noise {
          position: fixed;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;

          transition: opacity 0.4s ease;
        }

        /* Giant 404 */
        .four-o-four {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(140px, 28vw, 320px);
          line-height: 0.85;
          letter-spacing: -0.02em;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--muted);
          position: relative;
          user-select: none;
          transition: transform 0.1s ease-out;
        }

        .four-o-four .accent-zero {
          -webkit-text-stroke: 1.5px var(--accent);
          color: transparent;
          position: relative;
        }

        .four-o-four .accent-zero::after {
          content: '0';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--accent);
          opacity: 0.08;
          -webkit-text-stroke: 0;
          filter: blur(18px);
        }

        /* Glitch effect on hover */
        .four-o-four:hover {
          animation: glitch 0.3s steps(2) forwards;
        }

        @keyframes glitch {
          0%   { text-shadow: -3px 0 var(--accent), 3px 0 #00f0ff; transform: translateX(0); }
          25%  { text-shadow: 3px 0 var(--accent), -3px 0 #00f0ff; transform: translateX(-3px); }
          50%  { text-shadow: -3px 0 var(--accent), 3px 0 #00f0ff; transform: translateX(3px); }
          75%  { text-shadow: 3px 0 var(--accent), -3px 0 #00f0ff; transform: translateX(-1px); }
          100% { text-shadow: none; transform: translateX(0); }
        }

        .divider {
          width: 100%;
          max-width: 520px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--muted), transparent);
          margin: 0.5rem 0 1.5rem;
        }

        .label {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .message {
          font-family: 'DM Mono', monospace;
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 300;
          font-style: italic;
          color: #888;
          max-width: 380px;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .message span {
          color: var(--ink);
          font-style: normal;
        }

        .home-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 2rem;
          border: 1px solid var(--muted);
          color: var(--ink);
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          position: relative;
          transition: border-color 0.2s, color 0.2s;
          overflow: hidden;
        }

        .home-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
          transform: translateX(-100%);
          transition: transform 0.25s ease;
          z-index: -1;
        }

        .home-link:hover::before { transform: translateX(0); }
        .home-link:hover { border-color: var(--accent); color: #0a0a0a; }

        .home-link svg { transition: transform 0.2s; }
        .home-link:hover svg { transform: translateX(4px); }

        /* Floating corner coords */
        .coords {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 0.15em;
          font-family: 'DM Mono', monospace;
          text-align: right;
          line-height: 1.6;
        }

        .status-dot {
          position: fixed;
          top: 2rem;
          left: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 0.15em;
          font-family: 'DM Mono', monospace;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        /* Entry animation */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .content > * {
          animation: fadeUp 0.6s ease forwards;
          opacity: 0;
        }
        .content > *:nth-child(1) { animation-delay: 0.05s; }
        .content > *:nth-child(2) { animation-delay: 0.15s; }
        .content > *:nth-child(3) { animation-delay: 0.2s; }
        .content > *:nth-child(4) { animation-delay: 0.25s; }
        .content > *:nth-child(5) { animation-delay: 0.3s; }
        .content > *:nth-child(6) { animation-delay: 0.35s; }
      `}</style>

      <div className="page">
        <div className="grid-bg" />
        <div className="noise" />

        <div className="status-dot">
          <div className="dot" />
          <span>ERR_404</span>
        </div>

        <div className="content">
          <p className="label">Page not found</p>

          <h1
            className="four-o-four"

          >
            4<span className="accent-zero">0</span>4
          </h1>

          <div className="divider" />

          <p className="message">
            The page you`re looking for{" "}
            <span>doesn`t exist</span> or has been{" "}
            <span>moved somewhere else.</span>
          </p>

          <Link href="/" className="home-link">
            Return home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="coords">
          {/* <div>X {Math.round(mousePos.x * 10) / 10}</div>
          <div>Y {Math.round(mousePos.y * 10) / 10}</div> */}
        </div>
      </div>
    </>
  );
}
