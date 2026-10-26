import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Braces, ChevronRight, Code2, Database, Github, Globe2, Layers3, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { profile, skillGroups, experience, work } from './content';
import './style.css';

const icons = { chart: Database, globe: Globe2, layers: Layers3 };
const nav = [{title:'About',href:'#about'},{title:'Expertise',href:'#expertise'},{title:'Experience',href:'#experience'},{title:'Work',href:'#work'}];

function App(){
  const [open,setOpen] = React.useState(false);
  const year = new Date().getFullYear();
  return <>
    <div className="ambient ambient-one" aria-hidden="true"/><div className="ambient ambient-two" aria-hidden="true"/>
    <header className="header shell">
      <a className="brand" href="#top" aria-label="Home"><span className="brand-mark">a<span>.</span></span><span className="brand-name">ARSAL MUNIR</span></a>
      <nav className={open?'nav open':'nav'} aria-label="Main navigation">{nav.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.title}</a>)}<a className="mobile-contact" href="#contact" onClick={()=>setOpen(false)}>Contact</a></nav>
      <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X size={23}/>:<Menu size={23}/>}</button>
    </header>
    <main id="top">
      <section className="hero shell">
        <div className="hero-content">
          <div className="eyebrow"><span className="signal"/> SOFTWARE ENGINEER <span className="eyebrow-line"/></div>
          <h1>Building software<br/>that <span className="shine">makes an<br className="desktop-break"/> impact.</span></h1>
          <p className="hero-description">I'm <strong>Arsal Munir</strong> — a software engineer turning complex problems into thoughtful, scalable products. From robust APIs to intuitive experiences.</p>
          <div className="hero-actions"><a href="#work" className="primary-button">Explore my work <ArrowUpRight size={18}/></a><a href="#about" className="secondary-button">More about me <ArrowDownRight size={17}/></a></div>
          <div className="hero-meta"><span><MapPin size={15}/> Based in Germany</span><span className="meta-divider"/><span>Full-stack · Backend · Cloud</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative code-themed graphic">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="art-glow"/><div className="code-card"><div className="code-card-head"><span className="code-dots"><i/><i/><i/></span><span>developer.ts</span><Braces size={16}/></div><pre><span className="muted">// Engineering with purpose</span>{'\n'}<span className="purple">const</span> <span className="light">engineer</span> = {'{'}{'\n'}  name: <span className="green">'Arsal'</span>,{'\n'}  focus: [<span className="green">'backend'</span>,{'\n'}          <span className="green">'fullstack'</span>],{'\n'}  mindset: <span className="green">'build better'</span>{'\n'}{'};'}<span className="cursor">▌</span></pre></div>
          <div className="floating-chip chip-one"><Code2 size={17}/> Clean architecture</div><div className="floating-chip chip-two"><span className="chip-dot"/> Always learning</div>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17}/></a>
      </section>
      <section className="strip"><div className="shell strip-inner"><span>WHAT I WORK WITH</span><strong>.NET</strong><strong>REACT</strong><strong>PYTHON</strong><strong>TYPESCRIPT</strong><strong>AZURE</strong><strong>DOCKER</strong></div></section>
      <section className="section shell about-section" id="about"><div className="section-label"><span>01 / ABOUT</span><div/></div><div className="about-layout"><h2>Curious by nature.<br/><span>Engineer by craft.</span></h2><div className="about-text"><p>I build software at the intersection of <em>strong engineering foundations</em> and practical business needs.</p><p>My background spans enterprise applications, backend services, modern frontend development, and cloud-based systems. I enjoy creating solutions that are reliable under the hood and genuinely useful to the people using them.</p><p>I hold an M.Sc. in Computer Science from the University of Passau, Germany.</p><a className="text-link" href="#contact">Let's connect <ArrowUpRight size={17}/></a></div></div></section>
      <section className="section shell" id="expertise"><div className="section-label"><span>02 / EXPERTISE</span><div/></div><div className="section-heading"><h2>My technical <span>toolkit.</span></h2><p>Technologies I use to design, build, and ship software.</p></div><div className="skills-grid">{skillGroups.map((g,i)=><article className="skill-card" key={g.title}><div className="skill-card-top"><span className="skill-number">0{i+1}</span>{i===0?<Database size={23}/>:i===1?<Code2 size={23}/>:<Layers3 size={23}/>}</div><h3>{g.title}</h3><div className="pills">{g.skills.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></section>
      <section className="section shell" id="experience"><div className="section-label"><span>03 / EXPERIENCE</span><div/></div><div className="section-heading"><h2>Where I've <span>contributed.</span></h2><p>Building, collaborating, and evolving across teams.</p></div><div className="timeline">{experience.map((job,i)=><article className="job" key={job.company}><div className="job-left"><span className="job-index">0{i+1} /</span><div className="job-line"/></div><div className="job-details"><div className="job-heading"><div><h3>{job.role}</h3><p className="company">{job.company}</p></div><span className="period">{job.period}</span></div><p className="job-summary">{job.summary}</p><div className="job-tags">{job.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
      <section className="section shell" id="work"><div className="section-label"><span>04 / SELECTED WORK</span><div/></div><div className="section-heading"><h2>Problems worth <span>solving.</span></h2><p>A few areas I've worked on. Specific details are summarized at a high level.</p></div><div className="work-grid">{work.map(item=>{const Icon=icons[item.icon as keyof typeof icons];return <article className="work-card" key={item.num}><div className="work-card-top"><span>{item.num} / {item.category}</span><ArrowUpRight size={19}/></div><div className="work-visual"><div className="work-visual-grid"/><div className="work-symbol"><Icon size={45} strokeWidth={1.25}/></div></div><h3>{item.title}</h3><p>{item.summary}</p><div className="work-stack">{item.stack}</div></article>})}</div></section>
      <section className="contact-section" id="contact"><div className="shell"><div className="section-label"><span>05 / CONTACT</span><div/></div><div className="contact-layout"><div><span className="contact-kicker"><span className="signal"/> OPEN TO CONNECTING</span><h2>Have something<br/><span>in mind?</span></h2><p>Whether it's a new opportunity, an interesting technical problem, or simply a conversation about software — I'd love to hear from you.</p><div className="contact-actions">{profile.email?<a className="primary-button" href={`mailto:${profile.email}`}>Get in touch <Mail size={17}/></a>:<a className="primary-button" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={17}/></a>}{profile.resume&&<a className="secondary-button" href={profile.resume} download>Download CV <ArrowDownRight size={17}/></a>}</div></div><div className="contact-aside"><div className="contact-icon"><Mail size={26}/></div><p>LET'S START A CONVERSATION</p><strong>{profile.email||'Your next conversation starts here.'}</strong><div className="socials">{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn <ChevronRight size={16}/></a>}{profile.github&&<a href={profile.github} target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ChevronRight size={16}/></a>}{!profile.linkedin&&!profile.github&&<span className="social-note">Add your personal LinkedIn and GitHub URLs in src/content.ts</span>}</div></div></div></div></section>
    </main>
    <footer className="footer shell"><a className="footer-brand" href="#top">a<span>.</span></a><span>© {year} {profile.name}. Built with intention.</span><a href="#top">Back to top ↑</a></footer>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
