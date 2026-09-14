import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO RIVERSIDE</p>

          <h1>Building a stronger and more connected community.</h1>

          <p className="hero-text">
            Riverside provides accessible facilities, community support and
            opportunities that help people connect, grow and thrive.
          </p>

          <div className="hero-actions">
            <Link to="/facilities" className="primary-button">
              Explore Our Facilities
            </Link>

            <Link to="/donate" className="secondary-button">
              Support Riverside
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-content">
          <h2>About Riverside</h2>

          <p>
            Riverside is committed to serving the community by providing
            accessible facilities and creating opportunities for people to
            connect, grow and receive support.
          </p>
        </div>
      </section>

      <section className="offer-section">
        <div className="section-content">
          <div className="page-header">
            <h2>What We Offer</h2>

            <p>
              Discover some of the ways Riverside supports the community.
            </p>
          </div>

          <div className="offer-grid">
            <article className="offer-card">
              <h3>Community Facilities</h3>

              <p>
                Access facilities designed to support the needs of the
                Riverside community.
              </p>

              <Link to="/facilities">View Facilities</Link>
            </article>

            <article className="offer-card">
              <h3>Community Support</h3>

              <p>
                Helping connect community members with useful resources and
                support.
              </p>
            </article>

            <article className="offer-card">
              <h3>Ways to Help</h3>

              <p>
                Support Riverside through donations and other opportunities to
                contribute.
              </p>

              <Link to="/donate">Support Riverside</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;