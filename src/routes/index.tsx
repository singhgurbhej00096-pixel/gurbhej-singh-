import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Menu, X } from "lucide-react";
import shastarImage from "../assets/shastar-gallery.jpg";
import architectureImage from "../assets/heritage-architecture.jpg";
import craftImage from "../assets/craftsmanship.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gurbhej Singh Khalsa | Sikh Heritage & Virasat" },
      { name: "description", content: "Discover Gurbhej Singh Khalsa’s dedication to Sikh heritage, Shastar tradition, Punjabi craftsmanship, education, and preservation." },
      { property: "og:title", content: "Gurbhej Singh Khalsa | Sikh Heritage & Virasat" },
      { property: "og:description", content: "A premium digital museum preserving Sikh heritage, Shastar tradition, craftsmanship, and Khalsa culture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"], ["About", "about"], ["Shastar Heritage", "shastar"],
  ["Khalsa History", "history"], ["Craftsmanship", "craftsmanship"],
  ["Gallery", "gallery"], ["Marketplace", "marketplace"], ["Contact", "contact"],
];

const marketplaces = [
  { href: "/ironforge/heritage.html", label: "ਵਿਰਾਸਤ ਬਾਜ਼ਾਰ", eyebrow: "Historic & Prestige", title: "Heritage Marketplace", body: "Buy and sell authenticated historic pieces — antique Shastar, armour, instruments, medals, maps and campaign furniture — each with documented provenance and a certificate of authenticity.", cta: "Enter the collection" },
  { href: "/ironforge/heritage.html#sell", label: "ਵੇਚੋ", eyebrow: "Consign a piece", title: "Sell a Historic Piece", body: "Submit a family heirloom or collection piece for specialist authentication, set your asking price, and choose whether to accept private offers.", cta: "Start a listing" },
  { href: "/ironforge/index.html", label: "ਸਾਜ਼ੋ-ਸਾਮਾਨ", eyebrow: "IronForge Market", title: "Equipment Marketplace", body: "Professional-grade protective, outdoor, training and tactical equipment from verified sellers.", cta: "Visit IronForge" },
];

const history = [
  { year: "1469", title: "A spiritual foundation", body: "Guru Nanak Sahib’s teachings established a path grounded in devotion, dignity, equality, and service." },
  { year: "1606", title: "Miri and Piri", body: "Guru Hargobind Sahib articulated the inseparable balance of spiritual and temporal responsibility." },
  { year: "1699", title: "Birth of the Khalsa", body: "Guru Gobind Singh Sahib inaugurated the Khalsa at Anandpur Sahib, shaping a sovereign spiritual identity." },
  { year: "Today", title: "A living inheritance", body: "Families, scholars, artists, and craftspeople continue to document, protect, and interpret this shared heritage." },
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span>ੴ</span></span>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="heritage-site">
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="Gurbhej Singh Khalsa home">
          <BrandMark />
          <span><b>GURBHEJ SINGH KHALSA</b><small>ਗੁਰਭੇਜ ਸਿੰਘ ਖ਼ਾਲਸਾ</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}<ChevronRight /></a>)}</nav>}
      </header>

      <section className="hero" id="home">
        <img src={architectureImage} alt="Illuminated heritage architecture seen through a carved archway" className="hero-image" width={1600} height={1000} />
        <div className="hero-scrim" />
        <div className="pattern-overlay" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow">A Living Archive of Sikh Heritage</p>
          <h1>Gurbhej Singh<br /><span>Khalsa</span></h1>
          <p className="gurmukhi">ਗੁਰਭੇਜ ਸਿੰਘ ਖ਼ਾਲਸਾ</p>
          <div className="gold-rule" />
          <p className="tagline">Shastar <i>•</i> Virasat <i>•</i> Khalsa</p>
          <p className="hero-copy">Preserving Sikh heritage, Shastar tradition, craftsmanship, and Khalsa culture.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#shastar">Explore heritage <ArrowUpRight /></a>
            <a className="secondary-action" href="#about">Our story</a>
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to the story"><span>Discover</span><ArrowDown /></a>
      </section>

      <section className="about-section section" id="about">
        <div className="section-number">01</div>
        <div className="about-visual reveal">
          <div className="portrait-frame">
            <img src={architectureImage} alt="Heritage archway representing the Gurbhej Singh Khalsa story" loading="lazy" width={1600} height={1000} />
            <div className="portrait-note"><span>Personal archive</span><b>Gurbhej Singh Khalsa</b></div>
          </div>
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">The Custodian</p>
          <h2>The Journey of<br />Gurbhej Singh Khalsa</h2>
          <p className="lead">A personal commitment to safeguarding the knowledge, artistry, and living memory of Sikh tradition.</p>
          <p>Gurbhej Singh Khalsa’s work is dedicated to Sikh heritage, historical Shastar traditions, Punjabi culture, craftsmanship, education, and preservation. It approaches every object and story with reverence—connecting inherited knowledge with a new generation.</p>
          <blockquote>“Virasat is not simply what we inherit. It is what we understand, protect, and pass forward.”</blockquote>
        </div>
      </section>

      <section className="shastar-section section" id="shastar">
        <div className="section-intro reveal">
          <div><p className="eyebrow">The Living Collection · 02</p><h2>Shastar Heritage</h2></div>
          <p>Traditional Sikh Shastar are presented here as historical and cultural artefacts—bearers of artistry, discipline, sovereignty, and collective memory.</p>
        </div>
        <div className="exhibit-grid">
          <button className="feature-exhibit" onClick={() => setLightbox(shastarImage)} aria-label="View historical Shastar display">
            <img src={shastarImage} alt="Ornate historical Sikh Shastar displayed as museum artefacts" loading="lazy" width={1600} height={1000} />
            <span className="image-index">Exhibit 01 / 03</span>
          </button>
          <article className="exhibit-card reveal"><span className="gurmukhi-label">ਸ਼ਸਤਰ</span><h3>Objects of History</h3><p>Historical forms preserve stories of changing eras, regional workshops, patronage, and the Sikh tradition’s distinctive visual language.</p><a href="#history">Read the chronology <ArrowUpRight /></a></article>
          <article className="exhibit-card reveal"><span className="gurmukhi-label">ਕਲਾ</span><h3>The Artisan’s Hand</h3><p>Forging, engraving, koftgari, leatherwork, and woodcraft reveal generations of specialised knowledge and patient mastery.</p><a href="#craftsmanship">Explore craftsmanship <ArrowUpRight /></a></article>
          <article className="exhibit-card wide reveal"><span className="gurmukhi-label">ਵਿਰਾਸਤ</span><div><h3>Cultural Significance</h3><p>Beyond form and material, these objects illuminate ideas of responsibility, protection, dignity, and spiritual discipline within Sikh history.</p></div></article>
        </div>
      </section>

      <section className="history-section section" id="history">
        <div className="history-heading reveal"><p className="eyebrow">Chronicle · 03</p><h2>Khalsa History</h2><p>Selected moments in a continuing story of faith, identity, and collective responsibility.</p></div>
        <div className="timeline">
          {history.map((item, index) => <article className="timeline-item reveal" key={item.year}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><time>{item.year}</time><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
        </div>
      </section>

      <section className="craft-section" id="craftsmanship">
        <img src={craftImage} alt="Punjabi artisan engraving a traditional floral metalwork design" loading="lazy" width={1600} height={1000} />
        <div className="craft-overlay" />
        <div className="craft-content reveal"><p className="eyebrow">The Artisan’s Legacy · 04</p><h2>Crafted by hand.<br />Carried through time.</h2><p>Traditional craftsmanship lives in the precision of the line, the patience of the hand, and the knowledge passed quietly from one generation to the next.</p><div className="craft-details"><span><b>ਨੱਕਾਸ਼ੀ</b> Engraving</span><span><b>ਕੋਫ਼ਤਗਰੀ</b> Gold inlay</span><span><b>ਦਸਤਕਾਰੀ</b> Handcraft</span></div></div>
      </section>

      <section className="gallery-section section" id="gallery">
        <div className="section-intro reveal"><div><p className="eyebrow">Visual Archive · 05</p><h2>Gallery</h2></div><p>A study of objects, spaces, materials, and makers that carry the spirit of Punjab’s cultural inheritance.</p></div>
        <div className="gallery-grid">
          {[{src:architectureImage, label:"Architecture", title:"Thresholds of memory", cls:"gallery-tall"},{src:shastarImage,label:"Historical objects",title:"The museum collection",cls:"gallery-wide"},{src:craftImage,label:"Craftsmanship",title:"The artisan’s hand",cls:"gallery-wide"}].map((item) => <button className={`gallery-item ${item.cls}`} key={item.title} onClick={() => setLightbox(item.src)}><img src={item.src} alt={item.title} loading="lazy" width={1600} height={1000} /><span><small>{item.label}</small><b>{item.title}</b></span></button>)}
        </div>
      </section>

      <section className="market-section section" id="marketplace">
        <div className="section-intro reveal"><div><p className="eyebrow">Marketplace · 06</p><h2>Buy &amp; Sell Heritage</h2></div><p>A trusted place to acquire, consign, and pass forward historic pieces — every object examined, every provenance documented.</p></div>
        <div className="market-grid">
          {marketplaces.map((m) => (
            <a className="market-card reveal" href={m.href} key={m.title}>
              <span className="gurmukhi-label">{m.label}</span>
              <small>{m.eyebrow}</small>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="market-cta">{m.cta} <ArrowUpRight /></span>
            </a>
          ))}
        </div>
        <p className="market-note">Marketplace pages are a demonstration interface — no orders, offers, or payments are processed.</p>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-copy reveal"><p className="eyebrow">Correspondence · 07</p><h2>Begin a conversation</h2><p>For heritage enquiries, cultural collaborations, educational projects, or archival conversations, share a note below.</p><p className="gurmukhi-contact">ਵਿਰਾਸਤ ਨੂੰ ਸੰਭਾਲਣ ਦੀ ਸਾਂਝੀ ਯਾਤਰਾ</p></div>
        <form className="contact-form reveal" onSubmit={submit}>
          {sent ? <div className="success-message" role="status"><span><Check /></span><h3>Thank you</h3><p>Your enquiry has been prepared. Message delivery can be connected when you are ready.</p><button type="button" onClick={() => setSent(false)}>Send another enquiry</button></div> : <>
            <label><span>Your name</span><input name="name" required autoComplete="name" placeholder="Full name" /></label>
            <label><span>Email address</span><input name="email" type="email" required autoComplete="email" placeholder="name@example.com" /></label>
            <label><span>Subject</span><input name="subject" required placeholder="How can we help?" /></label>
            <label><span>Message</span><textarea name="message" required rows={5} placeholder="Write your enquiry here..." /></label>
            <button className="submit-button" type="submit">Send enquiry <ArrowUpRight /></button>
          </>}
        </form>
      </section>

      <footer><div className="footer-brand"><BrandMark /><h2>GURBHEJ SINGH KHALSA<span>ਗੁਰਭੇਜ ਸਿੰਘ ਖ਼ਾਲਸਾ</span></h2></div><p>Shastar <i>•</i> Virasat <i>•</i> Khalsa</p><small>Heritage · Education · Preservation</small></footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setLightbox(null)}><button aria-label="Close image viewer" onClick={() => setLightbox(null)}><X /></button><img src={lightbox} alt="Enlarged heritage gallery view" /></div>}
    </main>
  );
}
