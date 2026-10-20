import { useEffect, useMemo, useState } from "react";
import { profile, skills, projects, job, education } from "./data";
import { icons } from "./icons";

const used = new Set(projects.flatMap((p) => p.tags));
const roles = ["React.js applications", "Node.js and PHP APIs", "AI-powered features", "payment integrations", "custom software tools"];
const grads = ["#7c5cff,#22d3ee", "#ff6bd6,#7c5cff", "#22d3ee,#2dd4a0", "#ffb86b,#ff6bd6", "#2dd4a0,#7c5cff", "#4f8cff,#ff6bd6"];
const orbit = ["React.js", "Node.js", "PHP", "MySQL", "PostgreSQL", "TypeScript", "Stripe", "OpenAI API"];
const marquee = ["React.js", "Node.js", "Express.js", "TypeScript", "JavaScript", "PHP", "Laravel", "MySQL", "PostgreSQL", "AWS S3", "Stripe", "PayPal", "OpenAI API", "Claude API", "Bootstrap", "Postman"];

function Icon({ name, size = 30 }) {
  const [bad, setBad] = useState(false);
  const src = icons[name];
  const px = Math.round(size * 0.68);
  return (
    <span className="ic" style={{ width: size, height: size }} title={name}>
      {src && !bad ? <img src={src} alt={name} width={px} height={px} onError={() => setBad(true)} /> : <b style={{ fontSize: Math.max(10, size * 0.36) }}>{name.slice(0, 2)}</b>}
    </span>
  );
}

function useTyped(words) {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const wait = !del && n === w.length ? 1400 : del ? 30 : 70;
    const t = setTimeout(() => {
      if (!del) n < w.length ? setN(n + 1) : setDel(true);
      else n > 0 ? setN(n - 1) : (setDel(false), setI((i + 1) % words.length));
    }, wait);
    return () => clearTimeout(t);
  }, [n, del, i, words]);
  return words[i].slice(0, n);
}

function Count({ to, suffix = "" }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let s = null, raf;
    const step = (t) => { s ??= t; const p = Math.min((t - s) / 1300, 1); setV(Math.round(to * p)); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v}{suffix}</>;
}

export default function App() {
  const [active, setActive] = useState([]);
  const [open, setOpen] = useState(null);
  const [copied, setCopied] = useState(false);
  const typed = useTyped(roles);
  const [theme, setTheme] = useState(() => {
    try { const s = localStorage.getItem("theme"); if (s) return s; } catch { /* ignore */ }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);
  const toggle = (s) => setActive((a) => (a.includes(s) ? a.filter((x) => x !== s) : [...a, s]));
  const list = useMemo(() => projects.map((p) => ({ ...p, hit: active.every((s) => p.tags.includes(s)) })), [active]);
  const hits = list.filter((p) => p.hit).length;
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); } catch { /* ignore */ }
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <div className="bg" aria-hidden="true"><i className="b1" /><i className="b2" /><i className="b3" /></div>
      <header className="top">
        <a className="logo" href="#top">KM</a>
        <nav aria-label="Sections">
          <a href="#stack">Stack</a><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <div className="actions">
          <button className="theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title="Toggle light / dark mode">
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            )}
          </button>
          <a className="btn sm" href="./Kathiresan_Murugesan_Resume.pdf" download>Resume</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="copy">
            <span className="badge"><i /> Open to new roles</span>
            <h1>Hi, I'm {profile.name.split(" ")[0]}.<br />I build <span className="typed">{typed}</span><em className="caret" /></h1>
            <p>{profile.summary}</p>
            <div className="row">
              <a className="btn" href="#work">See my projects</a>
              <a className="btn" href="#contact">Get in touch</a>
            </div>
            <div className="stats">
              <div><b><Count to={4} suffix="+" /></b><span>years in production</span></div>
              <div><b><Count to={8} /></b><span>platforms delivered</span></div>
              <div><b><Count to={25} suffix="%" /></b><span>engagement gain</span></div>
              <div><b><Count to={6} /></b><span>countries on FAO dashboard</span></div>
            </div>
          </div>

          <div className="visual">
            {orbit.map((n, i) => (<span key={n} className={`fl f${i}`}><Icon name={n} size={46} /></span>))}
            <div className="win">
              <div className="dots"><i /><i /><i /></div>
              <pre>{`const developer = {
  name: "${profile.name}",
  role: "Software Engineer",
  based: "Salem, India",
  frontend: ["React", "Javascript", "Bootstrap"],
  backend: ["Node", "Express", "PHP"],
  data: ["MySQL", "PostgreSQL"],
  ai: ["OpenAI", "Claude"],
  openToWork: true,
};`}</pre>
            </div>
          </div>
        </section>

        <div className="marq" aria-hidden="true">
          <div className="track">
            {[...marquee, ...marquee].map((n, i) => (<span key={i} className="mi"><Icon name={n} size={34} />{n}</span>))}
          </div>
        </div>

        <section id="stack">
          <h2>Tech stack</h2>
          <p className="hint">Tap a technology to see the projects that used it.</p>
          <div className="skillgrid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="glass" key={group}>
                <h3>{group}</h3>
                <div className="chips">
                  {items.map((s) => used.has(s) ? (
                    <button key={s} className={"chip" + (active.includes(s) ? " on" : "")} aria-pressed={active.includes(s)} onClick={() => toggle(s)}><Icon name={s} size={22} />{s}</button>
                  ) : (<span key={s} className="chip static"><Icon name={s} size={22} />{s}</span>))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work">
          <h2>Projects</h2>
          <p className="hint" aria-live="polite">
            {active.length ? `${hits} of ${projects.length} projects use ${active.join(" + ")}.` : `${projects.length} projects. Select a card to read more.`}
            {active.length > 0 && <button className="link" onClick={() => setActive([])}>Clear filter</button>}
          </p>
          <div className="grid">
            {list.map((p, i) => (
              <article key={p.name} className={"card" + (p.hit ? "" : " dim")}>
                <div className="art" style={{ background: `linear-gradient(135deg,${grads[i % grads.length]})` }}>
                  <span className="kind">{p.kind}</span>
                  <div className="ics">{p.tags.slice(0, 4).map((t) => <Icon key={t} name={t} size={40} />)}</div>
                </div>
                <div className="body">
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  {open === i && <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>}
                  <p className="tech">{p.stack}</p>
                  {p.points.length > 0 && (
                    <button className="more" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>{open === i ? "Hide details" : "View details"}</button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="node glass">
              <span className="when">{job.period}</span>
              <h3>{job.title}</h3>
              <p className="hint">{job.company}</p>
              <ul>{job.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            {education.map(([d, s, y]) => (
              <div className="node glass" key={d}><span className="when">{y}</span><h3>{d}</h3><p className="hint">{s}</p></div>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <h2>Let's build something together</h2>
          <p>Open to software development opportunities. {profile.location}.</p>
          <div className="row center">
            <button className="btn" onClick={copyEmail}>{copied ? "Email copied" : `Copy ${profile.email}`}</button>
            <a className="btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer>
        © {new Date().getFullYear()} {profile.name}. 
        Designed & Developed with React.
      </footer>
    </>
  );
}
