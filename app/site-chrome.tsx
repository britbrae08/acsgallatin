/* oxlint-disable next/no-img-element -- Shared site header and footer for the prerendered static React site. */
import {useState} from 'react';
import {Heart,Menu,Phone,X} from 'lucide-react';
import {Button} from '@/components/ui/button';

export const facebook='https://www.facebook.com/profile.php?id=61566068740845';
export const donate='https://adventistgiving.org/donate/ANGBGG';
export const maps='https://maps.app.goo.gl/gn1T175cLyV2qRxb6';
export const church='https://gallatinmo.adventistchurch.org/';

export const programs=[
  {name:'TEFAP',description:'The Emergency Food Assistance Program',href:'https://www.fns.usda.gov/tefap/emergency-food-assistance-program'},
  {name:'CSFP',description:'Commodity Supplemental Food Program',href:'https://www.fns.usda.gov/csfp'},
  {name:'Share the Harvest',description:'Missouri’s venison donation program',href:'https://mdc.mo.gov/hunting-trapping/species/deer/share-harvest'}
];

const navigation=<>
  <a href="/">Home</a>
  <a href="/foodbank">Food Bank</a>
  <a href="/#thrift-store">Thrift store</a>
  <a href="/#get-involved">Get involved</a>
  <a href="/#visit">Visit & contact</a>
  <a href={church}>Church</a>
  <a href={donate} className="nav-donate"><Heart size={16} aria-hidden="true"/> Donate</a>
</>;

export function SiteHeader(){
  const [menu,setMenu]=useState(false);

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
  </>;
}

export function SiteFooter(){
  return <footer>
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
        <a href={church}>Church</a>
      </div>
    </div>
    <div className="wrap footer-bottom">
      <span>© {new Date().getFullYear()} Gallatin Adventist Community Services</span>
      <a href="#main">Back to top ↑</a>
    </div>
  </footer>;
}
