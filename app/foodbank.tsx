/* oxlint-disable next/no-img-element -- This page is a prerendered static React site, not a Next.js runtime. */
import {useState} from 'react';
import {ArrowRight,FileText,Heart,Mail,MapPin,Menu,Phone,ShieldCheck,Wheat,X} from 'lucide-react';
import {Button} from '@/components/ui/button';

const facebook='https://www.facebook.com/profile.php?id=61566068740845';
const donate='https://adventistgiving.org/donate/ANGBGG';
const maps='https://maps.app.goo.gl/gn1T175cLyV2qRxb6';
const form='https://drive.google.com/file/d/1KH1megGEsvnDBjU-UXjQp8ZNqonxMllI/view';

const programs=[
  {name:'TEFAP',description:'The Emergency Food Assistance Program',href:'https://www.fns.usda.gov/tefap/emergency-food-assistance-program'},
  {name:'CSFP',description:'Commodity Supplemental Food Program',href:'https://www.fns.usda.gov/csfp'},
  {name:'Share the Harvest',description:'Missouri’s venison donation program',href:'https://mdc.mo.gov/hunting-trapping/species/deer/share-harvest'}
];

function Action({href,children,secondary=false}:{href:string;children:React.ReactNode;secondary?:boolean}){
  return <a className={`action ${secondary?'secondary':''}`} href={href}>{children}<ArrowRight size={18} aria-hidden="true"/></a>;
}

export default function FoodBank(){
  const [menu,setMenu]=useState(false);

  const navigation=<>
    <a href="/">Home</a>
    <a href="/foodbank" aria-current="page">Food Bank</a>
    <a href="/#thrift-store">Thrift store</a>
    <a href="/#visit">Visit & contact</a>
    <a href={donate} className="nav-donate"><Heart size={16} aria-hidden="true"/> Donate</a>
  </>;

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>

    <div className="utility">
      <div className="wrap utility-inner">
        <nav className="program-links" aria-label="Food assistance resources">
          {programs.map(p=><a key={p.name} href={p.href} title={p.description}>{p.name}</a>)}
        </nav>
        <div className="contact-links">
          <a href="tel:+16606632478"><Phone size={14} aria-hidden="true"/>660-663-2478</a>
          <a href="mailto:gacsc.fb@gmail.com" className="utility-email">gacsc.fb@gmail.com</a>
          <a href={facebook}>Facebook</a>
        </div>
      </div>
    </div>

    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="/" aria-label="Gallatin Adventist Community Services home">
          <img src="/images/acs-logo.gif" alt="" width="74" height="74"/>
          <span><strong>Gallatin</strong><span>Adventist Community Services</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation}</nav>
        <Button className="mobile-menu-button" variant="outline" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-navigation">
          {menu?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>} Menu
        </Button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav wrap" hidden={!menu} aria-label="Mobile navigation">
        {navigation}
        <div className="mobile-resources">
          {programs.map(p=><a key={p.name} href={p.href}>{p.name}</a>)}
          <a href={facebook}>Facebook</a>
          <a href="mailto:gacsc.fb@gmail.com">gacsc.fb@gmail.com</a>
        </div>
      </nav>
    </header>

    <main id="main">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">Daviess County Food Bank · Gallatin, Missouri</p>
          <h1>Food assistance, with a <em>helping hand.</em></h1>
          <p className="intro">If your household needs food, we’re here to help you through the process.</p>
          <p>Start by filling out the Food Bank form. Then call us to make an appointment. We’ll let you know what to expect and answer any questions you may have.</p>
          <div className="actions">
            <a className="action" href={form} target="_blank" rel="noopener noreferrer">Open & Print the Food Bank Form <FileText size={18} aria-hidden="true"/></a>
            <a className="text-link" href="tel:+16606632478">Call 660-663-2478 <Phone size={18} aria-hidden="true"/></a>
          </div>
          <p className="small-note">The application is 7 pages. If you have trouble opening or printing it, please call us.</p>
        </div>

        <aside className="hero-aside">
          <div className="welcome-mark">
            <img src="/images/acs-logo.gif" alt="Adventist Community Services Disaster Response" width="220" height="220"/>
          </div>
          <p className="eyebrow">Make an appointment</p>
          <h2>Call us before you come.</h2>
          <p>Food Bank visits are by appointment. Please call <a href="tel:+16606632478"><strong>660-663-2478</strong></a> to schedule your visit.</p>
          <a href="tel:+16606632478" className="text-link">Call now <ArrowRight size={18} aria-hidden="true"/></a>
        </aside>
      </section>

      <div className="service-strip">
        <div className="wrap service-inner">
          <a href={form} target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true"/> 1. Fill out the form</a>
          <a href="tel:+16606632478"><Phone aria-hidden="true"/> 2. Call for an appointment</a>
          <a href="#bring"><ShieldCheck aria-hidden="true"/> 3. Bring your documents</a>
        </div>
      </div>

      <section id="bring" className="section wrap food-grid">
        <div>
          <p className="eyebrow">Before your appointment</p>
          <h2>What to bring with you</h2>
          <p>Bringing these items will help your appointment go as smoothly as possible:</p>
          <ul className="check-list">
            <li><strong>Your completed Community Food Bank Application.</strong> <a href={form} target="_blank" rel="noopener noreferrer">Open the form here.</a></li>
            <li><strong>A picture ID.</strong></li>
            <li><strong>Proof of your address.</strong> A phone bill or utility bill in the applicant’s name may be used.</li>
            <li><strong>Proof of gross income for each household member who has income.</strong> This may include a pay stub, public assistance, Social Security income, disability income, child support, pension, or a tax document in the applicant’s name.</li>
            <li><strong>Social Security numbers for everyone in your household.</strong></li>
          </ul>
          <p>Please bring private information with you to your appointment. For your protection, do not email Social Security numbers or other sensitive personal information.</p>
          <div className="actions">
            <a className="action" href={form} target="_blank" rel="noopener noreferrer">Open & Print the Form <FileText size={18} aria-hidden="true"/></a>
            <Action href="tel:+16606632478" secondary>Call the Food Bank</Action>
          </div>
        </div>

        <aside className="program-panel">
          <Wheat size={32} aria-hidden="true"/>
          <h3>Not sure what to bring?</h3>
          <p>That’s okay. Give us a call before your appointment and we’ll be glad to help you figure out what you need.</p>
          <a className="program" href="tel:+16606632478">
            <span><strong>660-663-2478</strong><span>Call to make an appointment or ask a question</span></span>
            <Phone size={19} aria-hidden="true"/>
          </a>
          <a className="program" href={form} target="_blank" rel="noopener noreferrer">
            <span><strong>Food Bank Form</strong><span>Open the Community Food Bank Application</span></span>
            <FileText size={19} aria-hidden="true"/>
          </a>
        </aside>
      </section>

      <section className="mission">
        <div className="wrap mission-inner">
          <Heart size={34} aria-hidden="true"/>
          <h2>We’re glad you reached out.</h2>
          <p>Everyone needs a little help sometimes. Our goal is to make the process clear, respectful, and welcoming.</p>
          <p>If you have questions before your appointment, please call. We’re happy to help.</p>
          <Action href="tel:+16606632478">Call 660-663-2478</Action>
        </div>
      </section>

      <section id="visit" className="section wrap visit-grid">
        <div>
          <p className="eyebrow">Daviess County Food Bank</p>
          <h2>Visit us</h2>
          <address>
            <a href={maps}><MapPin aria-hidden="true"/><span>1210 S Willow St<br/>Gallatin, MO 64640</span></a>
            <a href="tel:+16606632478"><Phone aria-hidden="true"/>660-663-2478</a>
            <a href="mailto:gacsc.fb@gmail.com"><Mail aria-hidden="true"/>gacsc.fb@gmail.com</a>
          </address>
          <p>Please call to make an appointment before coming to the Food Bank.</p>
          <Action href={maps} secondary>Get Directions</Action>
        </div>
        <iframe
          title="Google map: Gallatin Adventist Community Services at 1210 S Willow St"
          src="https://www.google.com/maps?q=1210+S+Willow+St,+Gallatin,+MO+64640&output=embed"
          width="640"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main>

    <footer>
      <div className="wrap footer-grid">
        <div>
          <a className="brand footer-brand" href="/" aria-label="Gallatin Adventist Community Services home">
            <img src="/images/acs-logo.gif" alt="" width="70" height="70"/>
            <span><strong>Gallatin</strong><span>Adventist Community Services</span></span>
          </a>
          <p>Neighbors helping neighbors<br/>in Daviess County, Missouri.</p>
          <a href={donate} className="footer-gift">Give a financial gift <Heart size={16} aria-hidden="true"/></a>
        </div>
        <nav aria-label="Footer navigation">
          <h3>How we can help</h3>
          <a href="/foodbank">Food Bank</a>
          <a href="/#thrift-store">Thrift store & photos</a>
          <a href="/#donate-items">Donate items</a>
          <a href="/#volunteer">Volunteer</a>
          <a href={donate}>Donate money</a>
        </nav>
        <nav aria-label="Food program links">
          <h3>Food programs</h3>
          {programs.map(p=><a href={p.href} key={p.name}>{p.name}</a>)}
        </nav>
        <div>
          <h3>Visit & contact</h3>
          <a href={maps}>1210 S Willow St<br/>Gallatin, MO 64640</a>
          <a href="tel:+16606632478">660-663-2478</a>
          <a href="mailto:gacsc.fb@gmail.com">gacsc.fb@gmail.com</a>
          <a href={facebook}>Follow us on Facebook</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Gallatin Adventist Community Services</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  </>;
}
