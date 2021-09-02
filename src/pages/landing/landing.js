import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import locale from '../../locales/en'
import EventCarousel from '../../components/EventCarousel';
import FeaturedUser from '../../components/FeaturedUser';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/images/logo.png'
import landingImg from '../../assets/images/landing-img.png'
import axios from 'axios';
import https from 'https'
import { getHomePath, getEventPath, getHelpPath } from '../../router-paths';



export async function getStaticProps() {

  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  const res = await axios.get('https://api.joinstre.am/events', { httpsAgent: agent });

  const events = res.data || []

  return {
    props: {
      events,
    }
  }

  
}

export default function Home({ events }) {

  const menus = [
    { name: "Log In", url: getHomePath() },
    { name: "Create an event", url: getEventPath },
    { name: "Test help center", url: getHelpPath() },
    { name: "Pricing", url: getHomePath()  },
    { name: "Discover", url: getHomePath()  },
  ]

  const buttons = [
    { name: "Create an event", url: "/event/create",  selected: true },
    { name: "Log In", url: "/login" , selected: false },
  ]

  return (
    <>
      <div className="home-container">
        <div>
          <title>STREAM</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </div>

        <main>

          <nav className="d-flex justify-content-around align-items-center mt-5">
            <div>
              <img src={logo} alt="stream logo" />
            </div>
            <ul className="d-flex align-items-center">
              {menus.reverse().map((menu, index) => <li className="list" key={index.toString()}>
                <NavLink to={menu.url}>{menu.name}</NavLink>
              </li>
              )}
            </ul>
          </nav>

          <article className="contentMain">
            <article className="contentBlock">
              <section className="leftContent">
                <h2> One-on-One </h2>
                <h2> Creator events </h2>

                <div className="mt-4">
                  <p>{locale['meet-stream']}</p>
                  <p>{locale['hello-event']}</p>
                </div>

                <div className="d-flex mt-4">
                  {
                    buttons.map((button, index) =>
                    <Link key={index.toString()} href={button.url} passHref>
                      <button
                        className={button.selected ? "btn" : "rmBtnBg mx-4"}>
                        {button.name}
                      </button>
                      </Link>
                    )}
                </div>
              </section>

              <section className="rightContent mt-3">
                <div>
                  <img src={landingImg} alt="landing img" />
                </div>
              </section>
            </article>
          </article>

        </main>
      </div>

      <div style={{ backgroundColor: '#FAFAFA' }}>
      <section className="py-5">
        <EventCarousel title="One to One Events"  events={events && events['ONE-ONE']} />
        <EventCarousel title="Cooking related" events={events && events['cooking']}  />
        <EventCarousel title="Yoga Related events" events={events && events['yoga']}  />
      </section>

      <section>
        <div className="d-flex flex-column mx-5 px-2 py-3">
          <div className="mx-3 h4 font-weight-bold"> Featured Creator this week </div>
          <div className="d-flex flex-wrap"> {[3, 4, 4, 4, 4, 3, 4, 4, 4, 4].map((_, idx) => <FeaturedUser key={idx.toString()} />)} </div>
        </div>
      </section>

      <section>
        <EventCarousel />
      </section>

      <Footer />
      </div>
    </>
  )
}