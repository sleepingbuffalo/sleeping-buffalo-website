import HeroSection from '../components/HeroSection'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import './Dining.css'

export default function Dining() {
  return (
    <>
      {/* HERO */}
      <HeroSection image="/images/saloon-exterior-night.png" alt="Buffalo Saloon exterior at night">
        <SectionEyebrow text="Dine & Drink" />
        <h1>From Ranch to Table</h1>
      </HeroSection>

      {/* 54 PRIME STEAKHOUSE */}
      <section className="din-steakhouse section-dark">
        <div className="container">
          <div className="din-two-col">
            <ScrollReveal className="din-two-col-image">
              <img
                src="/images/restaurant-dining.png"
                alt="54 Prime Steakhouse dining room"
                className="din-img"
              />
            </ScrollReveal>
            <ScrollReveal className="din-two-col-text" delay={150}>
              <SectionEyebrow text="Fine Dining" />
              <h2>54 Prime Steakhouse</h2>
              <p>
                Built in 2023. Gourmet dining on the Hi-Line. Commercial kitchen,
                in-floor radiant heating, 30'&times;35' outdoor patio. Much of our
                produce sourced from our on-site greenhouse.
              </p>
              <p>
                54 Prime sources its beef locally from Math Farms Beef out of Malta, Montana.
                Their cattle are grass-fed and grain-finished, and the whole animal is dry-aged
                before hitting our kitchen — as local and as good as it gets.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BUFFALO SALOON */}
      <section className="din-saloon section-warm">
        <div className="container">
          <div className="din-two-col din-two-col-reverse">
            <ScrollReveal className="din-two-col-text">
              <SectionEyebrow text="The Bar" />
              <h2>Buffalo Saloon</h2>
              <p>
                The Buffalo Saloon is the heart of Sleeping Buffalo's social scene.
                Full bar, gaming machines, pool table, darts, and the most Montana
                ambiance you'll ever find.
              </p>
            </ScrollReveal>
            <ScrollReveal className="din-two-col-image din-stacked-images" delay={150}>
              <img
                src="/images/saloon-interior-bison.png"
                alt="Buffalo Saloon interior with mounted bison"
                className="din-img"
              />
              <img
                src="/images/saloon-bar-red.png"
                alt="Buffalo Saloon bar with red lighting"
                className="din-img"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GAME ROOM */}
      <section className="din-game-room section-dark">
        <div className="container">
          <ScrollReveal className="din-full-image-wrap">
            <img
              src="/images/saloon-game-room.png"
              alt="Game room with pool table and dart machines"
              className="din-img din-full-img"
            />
          </ScrollReveal>
          <ScrollReveal className="din-full-text" delay={100}>
            <SectionEyebrow text="Recreation" />
            <h2>Game Room</h2>
            <p>
              Pool table, dart machines, and more — connected right to the bar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CAMP STORE */}
      <section className="din-camp-store section-warm">
        <div className="container">
          <div className="din-two-col">
            <ScrollReveal className="din-two-col-image din-stacked-images">
              <img
                src="/images/camp-store.png"
                alt="Camp store stocked with snacks and essentials"
                className="din-img"
              />
              <img
                src="/images/lobby-front-desk.png"
                alt="Resort lobby and front desk"
                className="din-img"
              />
            </ScrollReveal>
            <ScrollReveal className="din-two-col-text" delay={150}>
              <SectionEyebrow text="Essentials" />
              <h2>Camp Store</h2>
              <p>
                Grab snacks, drinks, and poolside essentials at our camp store.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GREENHOUSE & FARM */}
      <section className="din-greenhouse section-dark">
        <div className="din-greenhouse-image-wrap">
          <img
            src="/images/greenhouse-interior.png"
            alt="Interior of the on-site greenhouse with rows of fresh produce"
            className="din-img din-greenhouse-img"
          />
          <div className="din-greenhouse-overlay" />
        </div>
        <div className="container din-greenhouse-content">
          <ScrollReveal>
            <SectionEyebrow text="Grown Here" />
            <h2>Greenhouse &amp; Farm</h2>
            <p>
              Our on-site 30'&times;96' greenhouse supplies the restaurant with
              fresh herbs and vegetables year-round. Our resident chickens provide
              fresh eggs daily. Farm to table — Montana style.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* HOURS */}
      <section className="din-hours section-warm">
        <div className="container">
          <ScrollReveal>
            <div className="din-hours-card">
              <SectionEyebrow text="Hours & Reservations" />
              <h2>Join Us</h2>
              <p>
                Check with us at{' '}
                <a href="tel:4065273320" className="din-phone-link">
                  (406) 527-3320
                </a>{' '}
                for current dining hours and reservations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
