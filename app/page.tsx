/* oxlint-disable next/no-img-element -- This page is a prerendered static React site, not a Next.js runtime. */
import {useState} from 'react';
import {ArrowRight,Heart,Phone,Mail,MapPin,Menu,ShoppingBag,HandHeart,Wheat,Users,X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import photos from './photos.json';

const facebook='https://www.facebook.com/profile.php?id=61566068740845';
const donate='https://adventistgiving.org/donate/ANGBGG';
const maps='https://maps.app.goo.gl/gn1T175cLyV2qRxb6';

const programs=[
  {name:'TEFAP',description:'The Emergency Food Assistance Program',href:'https://www.fns.usda.gov/tefap/emergency-food-assistance-program'},
  {name:'CSFP',description:'Commodity Supplemental Food Program',href:'https://www.fns.usda.gov/csfp'},
  {name:'Share the Harvest',description:'Missouri’s venison donation program',href:'https://mdc.mo.gov/hunting-trapping/species/deer/share-harvest'}
];

const sponsors=[
  ['Iowa-Missouri Conference','https://imsda.org/','imsda.png','light'],
  ['Stith Family Funeral Home & Cremation Services','https://www.stithfamilyfunerals.com/','stith.png','dark'],
  ['Terry Implement','https://terryimplement.com/','terry.webp','dark'],
  ['BTC Bank','https://btcbank.bank/','btc-bank.svg','light'],
  ['Farmers Bank of Northern Missouri','https://www.onlinefarmersbank.com/','farmers-bank.png','dark'],
  ['Shelter Insurance','https://www.shelterinsurance.com/','shelter.svg','light']
];

function Action({href,children,secondary=false}:{href:string;children:React.ReactNode;secondary?:boolean}){
  return <a className={`action ${secondary?'secondary':''}`} href={href}>{children}<ArrowRight size={18} aria-hidden="true"/></a>;
}

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [gallery,setGallery]=useState(false);

  const openGalleryAndScroll=()=>{
    setGallery(true);
    window.setTimeout(()=>{
      document.getElementById('store-gallery-heading')?.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });
    },0);
  };

  const navigation=<>
    <a href="#food-assistance">Food assistance</a>
    <a href="#thrift-store">Thrift store</a>
    <a href="#get-involved">Get involved</a>
    <a href="#visit">Visit & contact</a>
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
        <a className="brand" href="#main" aria-label="Gallatin Adventist Community Services home">
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
          <p className="eyebrow">Gallatin, Missouri · Serving Daviess County</p>
          <h1>Neighbors helping neighbors in <em>Daviess County.</em></h1>
          <p className="intro">Everyone needs a helping hand sometimes.</p>
          <p>The Daviess County Food Bank and Gallatin Adventist Community Services Center are here to make that help easier to find—with kindness, dignity, and no judgment.</p>
          <div className="actions">
            <Action href="#food-assistance">Get Food Assistance</Action>
            <a className="text-link" href="#thrift-store">Explore our thrift store <ArrowRight size={18} aria-hidden="true"/></a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="welcome-mark">
            <img src="/images/acs-logo.gif" alt="Adventist Community Services Disaster Response" width="220" height="220"/>
          </div>
          <p className="eyebrow">Your community. Your center.</p>
          <h2>A helping hand,<br/>close to home.</h2>
          <p>Located at <a href={maps}>1210 S Willow St in Gallatin, Missouri</a>, our center provides food assistance, an affordable thrift store, emergency support, and meeting space for local community groups.</p>
          <a href="#visit" className="text-link">Plan your visit <ArrowRight size={18} aria-hidden="true"/></a>
        </aside>
      </section>

      <div className="service-strip">
        <div className="wrap service-inner">
          <a href="#food-assistance"><Wheat aria-hidden="true"/> Food for your household</a>
          <a href="#thrift-store"><ShoppingBag aria-hidden="true"/> Affordable everyday finds</a>
          <a href="#get-involved"><HandHeart aria-hidden="true"/> A place to give back</a>
        </div>
      </div>

      <section id="food-assistance" className="section wrap food-grid">
        <div>
          <p className="eyebrow">Daviess County Food Bank</p>
          <h2>Need food assistance?</h2>
          <p>The Daviess County Food Bank serves approximately 200 local households during an average month.</p>
          <p>Qualifying Daviess County residents may receive:</p>
          <ul className="check-list">
            <li>Food for their household</li>
            <li>Government food commodities</li>
            <li>Additional food assistance for seniors</li>
            <li>Emergency food assistance</li>
          </ul>
          <p>You may be asked to provide a photo ID, proof that you live in Daviess County, and information about the people in your household.</p>
          <Action href="tel:+16606632478">Get Food Assistance</Action>
          <p className="small-note">Call 660-663-2478 to ask about assistance and current hours.</p>
        </div>
        <aside className="program-panel">
          <Wheat size={32} aria-hidden="true"/>
          <h3>Food assistance programs</h3>
          <p>Learn more about the programs that help feed our neighbors.</p>
          {programs.map(p=>
            <a className="program" key={p.name} href={p.href}>
              <span><strong>{p.name}</strong><span>{p.description}</span></span>
              <ArrowRight size={19} aria-hidden="true"/>
            </a>
          )}
        </aside>
      </section>

      <section id="thrift-store" className="thrift-section">
        <div className="wrap section">
          <div className="thrift-grid">
            <div className="store-photos">
              <img className="store-main" src={photos[6].src} alt={photos[6].alt} loading="lazy" width="700" height="760"/>
              <img className="store-detail" src={photos[18].src} alt={photos[18].alt} loading="lazy" width="360" height="340"/>
              <span className="photo-caption">A look inside our thrift store</span>
            </div>
            <div>
              <p className="eyebrow">Good finds. A good cause.</p>
              <h2>Shop—and help<br/>a neighbor.</h2>
              <p>Our thrift store offers donated clothing, furniture, and household items at affordable prices.</p>
              <p>But every purchase does something more: thrift store proceeds help support the Food Bank and provide emergency assistance to local people facing difficult circumstances.</p>
              <p className="serif-note">Something simple you buy today could help another family tomorrow.</p>

              <Button
                className="action"
                onClick={openGalleryAndScroll}
                aria-expanded={gallery}
                aria-controls="store-gallery"
              >
                Visit Our Thrift Store
                <ArrowRight size={18} aria-hidden="true"/>
              </Button>

              <p className="small-note"><a href={facebook}>See updates on Facebook</a> · <a href="#visit">Find us & get directions</a></p>
            </div>
          </div>

          <div id="store-gallery" hidden={!gallery} className="gallery-section">
            <div className="gallery-heading">
              <div>
                <h3 id="store-gallery-heading">Explore our thrift store</h3>
                <p>Photos from our store collection. Items may no longer be available; check Facebook for current updates.</p>
              </div>
              <Button variant="outline" className="close-gallery" onClick={()=>setGallery(false)}>
                Close photos <X size={16} aria-hidden="true"/>
              </Button>
            </div>
            <div className="photo-grid">
              {photos.map(p=>
                <a key={p.src} href={p.src} target="_blank" rel="noopener noreferrer" aria-label={`${p.alt} — open photo in a new tab`}>
                  <img src={p.src} alt={p.alt} loading="lazy" width="400" height="400"/>
                </a>
              )}
            </div>
            <a className="text-link" href={facebook}>Visit our Facebook page <ArrowRight size={18} aria-hidden="true"/></a>
          </div>
        </div>
      </section>

      <section id="get-involved" className="section wrap">
        <p className="eyebrow">Small acts. Lasting kindness.</p>
        <h2>There’s a place for you here.</h2>
        <div className="involvement-grid">
          <article id="donate-items">
            <HandHeart className="section-icon" size={30} aria-hidden="true"/>
            <h3>Donate useful items</h3>
            <p>We gladly accept clean clothing, furniture, and household items that are complete and in good working condition.</p>
            <p>We cannot accept items that are broken, badly worn, or soiled. Giving useful items helps us serve others while treating every shopper with care and respect.</p>
            <Action href="mailto:gacsc.fb@gmail.com?subject=Donating%20items" secondary>Learn How to Donate</Action>
          </article>
          <article id="volunteer">
            <Users className="section-icon" size={30} aria-hidden="true"/>
            <h3>You are never too old—or too young—to help</h3>
            <p>More than 28 volunteers serve during an average month. Our volunteers have ranged in age from 15 to 98!</p>
            <p>Whether you can help regularly or only occasionally, your time can make a real difference right here in Daviess County.</p>
            <Action href="mailto:gacsc.fb@gmail.com?subject=Volunteering%20at%20the%20center" secondary>Become a Volunteer</Action>
          </article>
        </div>
      </section>

      <section className="mission">
        <div className="wrap mission-inner">
          <Heart size={34} aria-hidden="true"/>
          <h2>Local help. Real hope.</h2>
          <p>The Gallatin Adventist Community Services Center is a ministry of the Seventh-day Adventist Church, serving all eligible members of our community with compassion and respect.</p>
          <p>Come for help. Shop for something useful. Donate what you no longer need. Or join us in caring for our neighbors.</p>
          <Action href="#visit">Contact the Center</Action>
        </div>
      </section>

      <section id="visit" className="section wrap visit-grid">
        <div>
          <p className="eyebrow">We’re here for our neighbors</p>
          <h2>Visit us</h2>
          <address>
            <a href={maps}><MapPin aria-hidden="true"/><span>1210 S Willow St<br/>Gallatin, MO 64640</span></a>
            <a href="tel:+16606632478"><Phone aria-hidden="true"/>660-663-2478</a>
            <a href="mailto:gacsc.fb@gmail.com"><Mail aria-hidden="true"/>gacsc.fb@gmail.com</a>
          </address>
          <p>Call for current food assistance and thrift store hours.</p>
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

      <section className="sponsors wrap">
        <p className="eyebrow">Together, we make a difference</p>
        <h2>With thanks to our sponsors</h2>
        <div className="sponsor-grid">
          {sponsors.map(([name,href,file,tone])=>
            <a key={name} href={href} className={tone}>
              <img src={'/images/sponsors/'+file} alt={name} loading="lazy" width="200" height="90"/>
            </a>
          )}
        </div>
      </section>
    </main>

    <footer>
      <div className="wrap footer-grid">
        <div>
          <a className="brand footer-brand" href="#main" aria-label="Gallatin Adventist Community Services home">
            <img src="/images/acs-logo.gif" alt="" width="70" height="70"/>
            <span><strong>Gallatin</strong><span>Adventist Community Services</span></span>
          </a>
          <p>Neighbors helping neighbors<br/>in Daviess County, Missouri.</p>
          <a href={donate} className="footer-gift">Give a financial gift <Heart size={16} aria-hidden="true"/></a>
        </div>
        <nav aria-label="Footer navigation">
          <h3>How we can help</h3>
          <a href="#food-assistance">Food assistance</a>
          <a href="#thrift-store">Thrift store & photos</a>
          <a href="#donate-items">Donate items</a>
          <a href="#volunteer">Volunteer</a>
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
