import { useEffect, useRef, useState } from 'react'
import './SaleSite.css'

const LISTING_URL = 'https://www.northwestranchland.com/properties/mt/historic-sleeping-buffalo-hot-springs-resort-for-sale/1129953/'
const PHONE_DISPLAY = '(406) 390-6746'
const PHONE_HREF = 'tel:+14063906746'
const EMAIL = 'carly@bishopincmt.com'
const SHORT_LETTER_PDF = '/sleeping-buffalo-letter-short.pdf'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const ref = useReveal()
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}

function ScrollNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`scroll-nav ${scrolled ? 'scroll-nav-tight' : ''}`}>
      <div className="scroll-nav-inner">
        <a href="#hero" className="scroll-nav-mark">Sleeping Buffalo</a>
        <div className="scroll-nav-links">
          <a href="#origin">Origin</a>
          <a href="#property">Property</a>
          <a href="#case">The Case</a>
          <a href="#letter">Letter</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default function SaleSite() {
  return (
    <>
      <ScrollNav />

      {/* SECTION 1 — HERO */}
      <section id="hero" className="sb-hero" aria-label="Sleeping Buffalo Hot Springs and Resort">
        <img
          className="sb-hero-bg"
          src="/images/hero-aerial-sunset.png"
          alt="Aerial view of Sleeping Buffalo Hot Springs at sunset with steam rising from the outdoor pool"
        />
        <div className="sb-hero-overlay" />
        <div className="sb-hero-content container">
          <div className="sb-hero-eyebrow">For Sale · Saco, Montana</div>
          <h1 className="sb-hero-title">
            Sleeping Buffalo<br />
            <em>Hot Springs and Resort</em>
          </h1>
          <p className="sb-hero-sub">
            32 acres on the Hi-Line. Mineral water rising from 3,200 feet beneath
            the Montana plains. A fully restored, turnkey legacy property.
          </p>
          <div className="sb-hero-price">
            <span className="sb-hero-price-label">Asking</span>
            <span className="sb-hero-price-value">$9.7 Million</span>
          </div>
          <div className="sb-hero-broker">
            <div className="sb-hero-broker-name">Listed with Carly Bishop</div>
            <div className="sb-hero-broker-firm">Northwest Realty and Auction</div>
            <div className="sb-hero-broker-line">
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <span className="sb-hero-dot">·</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <a href="#origin" className="sb-hero-scroll" aria-label="Scroll to story">
            <span>Begin</span>
            <span className="sb-hero-scroll-line" />
          </a>
        </div>
      </section>

      {/* SECTION 2 — ORIGIN */}
      <section id="origin" className="sb-section sb-origin">
        <div className="container sb-origin-grid">
          <Reveal className="sb-origin-image">
            <img
              src="/images/history-bw-aerial.png"
              alt="Historic black and white aerial of the Sleeping Buffalo property"
              loading="lazy"
            />
            <div className="sb-origin-stamp">1909</div>
          </Reveal>
          <Reveal className="sb-origin-text" delay={120}>
            <div className="sb-eyebrow">Origin</div>
            <h2>It Began in 1909</h2>
            <p>
              In 1909 an oil drilling crew was working the Hi-Line plains outside
              of Saco, Montana. They hit something they were not looking for. Hot
              mineral water came rushing up from deep in the earth and they could
              not shut it off.
            </p>
            <p>
              Someone in the community learned about it and saw not a problem but
              an answer. Their son had polio. They piped that water into a horse
              trough and let the boy bathe in it.
            </p>
            <p>
              That is where Sleeping Buffalo Hot Springs begins. Not with a resort
              or a business plan, but with a parent who loved their child and a
              community that believed in something.
            </p>
            <p>
              The Saco Health Legion eventually built the first proper pools and
              opened the place to the public. For decades families across the
              Hi-Line came to know this place by heart.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — THE PROPERTY */}
      <section id="property" className="sb-section sb-property">
        <div className="container">
          <Reveal className="sb-section-head">
            <div className="sb-eyebrow">The Property</div>
            <h2>What You Are Buying</h2>
          </Reveal>

          <div className="sb-prop-row">
            <Reveal className="sb-prop-text">
              <p>
                The property spans 32 acres along the Hi-Line plains outside of
                Saco, Montana, with Nelson Reservoir sitting directly across the
                road.
              </p>
              <p>
                At the heart of the operation is the mineral water itself. A brand
                new artesian well was drilled in 2021 to a depth of 3,200 feet,
                delivering fresh mineral water the way it was always meant to
                flow. The indoor facility features multiple pools at varying
                temperatures. The outdoor pool was fully remodeled in 2024 and
                stretches 128 feet under an open Montana sky with underwater
                lighting and a hot tub.
              </p>
            </Reveal>
            <Reveal className="sb-prop-image" delay={120}>
              <img src="/images/aerial-full-property.png" alt="Aerial view of the full Sleeping Buffalo property" loading="lazy" />
            </Reveal>
          </div>

          <div className="sb-prop-row sb-prop-row-reverse">
            <Reveal className="sb-prop-image">
              <img src="/images/outdoor-pool-main.png" alt="The 128 foot outdoor mineral pool lit at night" loading="lazy" />
            </Reveal>
            <Reveal className="sb-prop-text" delay={120}>
              <p>
                The original stone cabins were built in the 1920s using rock
                quarried for the Fort Peck Dam. Every one of them was fully
                restored in 2016 with every modern comfort fitted inside while
                every bit of that history was kept intact. The property also
                includes hotel suites, and an RV park and campground built in 2017
                with a full bathhouse.
              </p>
              <p>
                The Buffalo Saloon and 54 Prime Steakhouse were built from scratch
                in 2023, along with a regenerative greenhouse that grows food
                directly on the property.
              </p>
            </Reveal>
          </div>

          <div className="sb-prop-quad">
            <Reveal className="sb-prop-tile">
              <img src="/images/indoor-pool-green-wide.png" alt="Wide indoor mineral pool" loading="lazy" />
            </Reveal>
            <Reveal className="sb-prop-tile" delay={80}>
              <img src="/images/cabin-exterior-night.png" alt="Restored stone cabin exterior at night" loading="lazy" />
            </Reveal>
            <Reveal className="sb-prop-tile" delay={160}>
              <img src="/images/saloon-exterior-night.png" alt="Buffalo Saloon exterior at night" loading="lazy" />
            </Reveal>
            <Reveal className="sb-prop-tile" delay={240}>
              <img src="/images/nelson-reservoir-sunset.png" alt="Nelson Reservoir at sunset across from the property" loading="lazy" />
            </Reveal>
          </div>

          <div className="sb-prop-row">
            <Reveal className="sb-prop-text sb-prop-text-full">
              <p>
                The owner's residence is a 5,388 square foot custom built home
                with radiant floor heating, a heated garage, detailed woodwork,
                four bedrooms, three bathrooms, and a concrete encased walk in gun
                safe. A 1,200 square foot manager's home with three bedrooms and
                two bathrooms sits on the property as well. A 100 by 50 foot shop
                provides additional storage, parking, and workspace.
              </p>
              <p className="sb-prop-closer">
                To stand at the edge of the outdoor pool on a cold Montana
                evening, watching steam rise from the water while the reservoir
                catches the last light across the road, is to understand
                immediately why people have been coming here for over a century.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE INVESTMENT CASE */}
      <section id="case" className="sb-section sb-case">
        <div className="container sb-case-grid">
          <Reveal className="sb-case-text">
            <div className="sb-eyebrow">The Investment Case</div>
            <h2>Why This Works</h2>
            <p>
              The demand for Sleeping Buffalo was never manufactured. When Dennis
              and Michelle began working on the property in 2013, Michelle posted
              a single update on Facebook letting people know the old Sleeping
              Buffalo was being brought back. By the next morning several thousand
              people had responded. People who had grown up on the Hi-Line. People
              who had been coming since they were kids. People from across Montana
              and into Canada. All of them saying the same thing. They had been
              waiting.
            </p>
            <p className="sb-case-pull">
              That is not a marketing result. That is a community telling you it
              was ready.
            </p>
            <p>
              The history backs it up. In the 1980s, when a swim cost about a
              dollar, this property grossed over three million dollars a year. The
              demand has always been there. Today the resort boasts an extremely
              high occupancy rate across its accommodations and the pools draw
              visitors year round from across Montana and into Canada.
            </p>
            <p>
              Every major capital improvement has already been made. The new buyer
              inherits a turnkey operation. New artesian well. Remodeled pools.
              Rebuilt hotel rooms. New restaurant and saloon. Restored stone
              cabins. New campground. The heavy lifting is done. What remains is
              the opportunity.
            </p>
            <p>
              You do not have to relocate to own this. The existing team is strong
              and professional management options are available. And 116 years of
              community history do not need to be built. They are already there,
              and they are loyal.
            </p>
          </Reveal>
          <Reveal className="sb-case-image" delay={120}>
            <img src="/images/indoor-pool-night-amber.png" alt="Guests soaking in the warmly lit indoor pool" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — BEFORE / AFTER */}
      <section id="transformation" className="sb-section sb-transform">
        <div className="container">
          <Reveal className="sb-section-head">
            <div className="sb-eyebrow">Then and Now</div>
            <h2>What We Found. What We Built.</h2>
          </Reveal>

          <div className="sb-transform-grid">
            <Reveal className="sb-transform-col sb-transform-before">
              <div className="sb-transform-tag">Then</div>
              <div className="sb-transform-stack">
                <img src="/images/history-bw-aerial.png" alt="Historic aerial of the property in earlier days" loading="lazy" />
                <img src="/images/aerial-steam-mist.png" alt="The property as it stood when work began" loading="lazy" className="sb-transform-mono" />
              </div>
              <p>
                When Dennis arrived in 2013, the state had shut the whole
                operation down for sanitary reasons. Algae had taken over the
                pools. Mice had moved into the rooms. The previous owner had
                rigged up old carnival water slides and the local EMTs who still
                came here to soak told Dennis those slides had been sending people
                to the emergency room on a regular basis. The doors were locked
                and the whole place was falling apart.
              </p>
            </Reveal>

            <Reveal className="sb-transform-col sb-transform-after" delay={140}>
              <div className="sb-transform-tag sb-transform-tag-gold">Now</div>
              <div className="sb-transform-stack">
                <img src="/images/outdoor-pool-main.png" alt="The remodeled 128 foot outdoor pool lit at night" loading="lazy" />
                <img src="/images/saloon-exterior-night.png" alt="The Buffalo Saloon and 54 Prime Steakhouse exterior at night" loading="lazy" />
              </div>
              <p>
                What followed was ten years of giving it everything. In 2014 the
                interior was gutted and rebuilt from the ground up, the pools
                retiled, the hotel rooms rebuilt. In 2016 the original stone
                cabins were brought back to life. In 2017 the RV park and
                campground were built with a proper bathhouse. In 2021 a new
                artesian well was drilled 3,200 feet down. In 2023 the Buffalo
                Saloon and 54 Prime Steakhouse were built from scratch alongside a
                greenhouse to grow food on the property. In 2024 the outdoor pool
                was remodeled to stretch 128 feet under an open Montana sky.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE LETTER */}
      <LetterSection />

      {/* SECTION 7 — TRANSITION */}
      <section id="transition" className="sb-section sb-transition">
        <div className="container sb-transition-grid">
          <Reveal className="sb-transition-image">
            <img src="/images/cabin-stone-detail.png" alt="Quiet stone detail at the resort" loading="lazy" />
          </Reveal>
          <Reveal className="sb-transition-text" delay={120}>
            <div className="sb-eyebrow">Your Transition</div>
            <h2>You Don't Have to Live Here. But You Could.</h2>
            <p>
              The operation has a strong existing team and professional management
              options are available. Owning Sleeping Buffalo does not require
              uprooting your life. Plenty of successful properties like this one
              are run by owners who are not on the property every day.
            </p>
            <p>
              Christian Simpson has been part of this place since the beginning.
              He knows every guest, every system, every quiet detail that does not
              make it into any manual. When the transition happens, he will be
              there to make sure whoever takes the reins understands what they
              have. That offer stands for as long as it is needed.
            </p>
            <p>
              Dennis is not hovering. He is not looking to consult from a distance
              or stay involved once the handshake is done. He is looking to hand
              this to someone who is hungry for it and then go be with his wife.
              Clean. Complete.
            </p>
            <a className="sb-download" href={SHORT_LETTER_PDF}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 4v12" />
                <path d="M6 12l6 6 6 6" transform="translate(0 -6)" />
                <path d="M5 20h14" />
              </svg>
              <span>Download the one page letter to share with a partner or advisor</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — CONTACT */}
      <section id="contact" className="sb-section sb-contact">
        <img
          className="sb-contact-bg"
          src="/images/aerial-steam-mist.png"
          alt="Steam rising over the outdoor mineral pool"
          loading="lazy"
        />
        <div className="sb-contact-overlay" />
        <div className="container sb-contact-inner">
          <Reveal className="sb-contact-head">
            <div className="sb-eyebrow">Contact</div>
            <h2>This Place Is Ready for You</h2>
          </Reveal>
          <Reveal className="sb-contact-body" delay={120}>
            <p>
              The story above is not a pitch. It is the honest account of what
              this place has been and what it has become. If you felt something
              reading it, that feeling is worth a conversation. Carly Bishop has
              spent real time with this property and with this family. She will
              answer your questions honestly, arrange a visit, and take care of
              you throughout the process.
            </p>
          </Reveal>

          <Reveal className="sb-contact-card" delay={200}>
            <div className="sb-contact-broker">Carly Bishop</div>
            <div className="sb-contact-firm">Northwest Realty and Auction</div>
            <div className="sb-contact-lines">
              <a className="sb-contact-line" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <a className="sb-contact-line" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <a className="sb-contact-cta" href={LISTING_URL} target="_blank" rel="noopener noreferrer">
              View the Official Listing
            </a>
          </Reveal>

          <Reveal className="sb-contact-price" delay={260}>
            <div className="sb-price-label">Asking Price</div>
            <div className="sb-price-value">$9.7 Million</div>
          </Reveal>
        </div>
      </section>

      <footer className="sb-footer">
        <div className="container sb-footer-inner">
          <div className="sb-footer-mark">Sleeping Buffalo Hot Springs and Resort</div>
          <div className="sb-footer-meta">
            Saco, Montana <span className="sb-footer-dot">·</span> Listed with{' '}
            <a href={PHONE_HREF}>Carly Bishop</a>{' '}
            <span className="sb-footer-dot">·</span>{' '}
            <a href={LISTING_URL} target="_blank" rel="noopener noreferrer">Official Listing</a>
          </div>
        </div>
      </footer>
    </>
  )
}

function LetterSection() {
  return (
    <section id="letter" className="sb-section sb-letter">
      <div className="container">
        <Reveal className="sb-letter-head">
          <div className="sb-eyebrow">A Letter</div>
          <h2>A Letter to Whoever Comes Next</h2>
          <div className="sb-letter-sub"><em>From Dennis Simpson, steward of Sleeping Buffalo Hot Springs and Resort</em></div>
        </Reveal>

        <Reveal className="sb-letter-body" delay={120}>
          <p>I want to tell you how this place began, because I think it matters more than how I found it.</p>

          <p>In 1909 an oil drilling crew was working the Hi-Line plains outside of Saco, Montana. They hit something they were not looking for. Hot mineral water came rushing up from deep in the earth and they could not shut it off. Someone in the community learned about it and saw not a problem but an answer. Their son had polio. They piped that water into a horse trough and let the boy bathe in it.</p>

          <p>That is where Sleeping Buffalo Hot Springs begins. Not with a resort or a business plan, but with a parent who loved their child and a community that believed in something.</p>

          <p>The Saco Health Legion eventually built the first proper pools and opened the place to the public. For decades it was the destination Hi-Line families came to know by heart. My wife Michelle grew up in Whitewater, just down the road. She remembered it from childhood.</p>

          <p>I had spent over ten years running a hot springs in Bozeman. Sold it. Thought I was done. Retirement lasted about five minutes before I went half crazy with nothing to do. So when Michelle told me the old Sleeping Buffalo had been shut down and was sitting empty, I drove out to Saco to take a look.</p>

          <p>What I found was a mess. The state had shut the whole operation down for sanitary reasons. Algae had taken over the pools. Mice had moved into the rooms. The previous owner had rigged up old carnival water slides and the local EMTs who still come here to soak told me those slides had been sending people to the emergency room on a regular basis. The doors were locked and the whole place was falling apart.</p>

          <p>I figured I would slap some paint on the walls, clean up the mess, and get the pools running again. Nothing too serious.</p>

          <p>Then Michelle posted about it on Facebook.</p>

          <p>She just wrote that we were out here working on the old Sleeping Buffalo and that we planned to reopen it. By the next morning that post had gathered several thousand likes and followers overnight. People who grew up on the Hi-Line, people who had been coming here since they were kids, people from across Montana and into Canada, all of them saying they had been waiting for this place to come back.</p>

          <p>That changed everything. I went back and looked at the old books. In the 1980s, when a swim cost about a dollar, this place was grossing over three million dollars a year. The demand was never the question. People had just been waiting for someone to give them a reason to return.</p>

          <p>We went at it with everything we had. Over the next ten years we rebuilt the hot springs from the ground up, restored the original stone cabins that were quarried from the same rock used to build Fort Peck Dam, added an RV park, a greenhouse, a saloon and steakhouse, and remodeled the outdoor pool to stretch 128 feet under an open Montana sky. We drilled a new artesian well 3,200 feet deep in 2021 so the mineral water would flow clean and pure the way it was always meant to.</p>

          <p>We opened on Christmas Day in 2014. I will never forget pulling up that morning and finding Kathy Salsberry standing outside at 9am with a smile on her face, waiting to come in. She has been a regular ever since.</p>

          <p>What happened after that is hard to put into words. A woman who was turning 99 came out to celebrate her birthday in these pools, the same pools where she had first learned to swim decades before. Every summer the Hi-Line Classic Car Tour rolls through and the property fills up with over 100 beautiful machines from another era. A guest once brought a full grown parrot into the Buffalo Saloon and that bird sat on my son Christian's shoulder the whole night while he bartended, greeting every single person who walked through the door.</p>

          <p>The honest reason I am selling is simple. Michelle lives and works in Scottsdale and I miss her. That is the whole story. I built something I am deeply proud of and now I want to go be with my wife. A man can only run in two directions for so long.</p>

          <p>My son Christian has been by my side through all of it. He knows every inch of this operation, every guest by name, every quirk of the well and the pools and the saloon. Christian has his own next chapter calling him and plans to pursue naturopathic medicine once this transition is complete. But he has offered to stay on and help whoever comes next find their footing before setting off toward that path. That offer is real and it is genuine.</p>

          <p>I also want to be clear about something that surprises people when they hear it. You do not have to live here to run this place. The operation has a strong team in place and management options are available that allow an owner to oversee things from wherever they call home. The difference for me is that after more than fifty years of being the person the buck stops with, I am not looking to manage from a distance. I am looking to hand the reins to someone who is hungry for them. There is a difference between being away from a business and being finished with one, and I am finished. Not because this place has not been worth every moment. It has been the greatest professional chapter of my life. But every chapter has an ending, and I have earned mine.</p>

          <p>What I am asking you to think about is not a business transaction. It is whether you are the kind of person who feels something when you walk into a place that has meant something to people for nearly a hundred years. Whether you can picture yourself standing at the edge of that outdoor pool on a cold Montana night watching the steam rise into a sky full of stars. Whether you have ever wanted to be the reason a community has a place to gather.</p>

          <p>Sleeping Buffalo has been cared for by more hands than mine. I am just the latest in a long line of people who saw something worth saving here and decided to give it everything they had. I hope you are the next one.</p>

          <p>When you are ready to talk, reach out to Carly Bishop at Northwest Realty and Auction. She knows this property and she will take good care of you.</p>

          <p>With gratitude for everything this place has given my family,</p>

          <div className="sb-letter-sig">
            <div className="sb-letter-sig-name">Dennis Simpson</div>
            <div className="sb-letter-sig-title">Steward, Sleeping Buffalo Hot Springs and Resort</div>
            <div className="sb-letter-sig-place">Saco, Montana</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
