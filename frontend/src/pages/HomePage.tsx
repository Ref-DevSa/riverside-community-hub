function HomePage() {
  return (
    <main>
      <section>
        <h1>Welcome to Riverside</h1>

        <p>
          Creating a safe, supportive and welcoming community where people
          can access essential facilities, support and opportunities.
        </p>

        <div>
          <a href="/facilities">Explore Our Facilities</a>
          <a href="/donate">Support Riverside</a>
        </div>
      </section>

      <section>
        <h2>About Riverside</h2>

        <p>
          Riverside is committed to serving the community by providing
          accessible facilities and creating opportunities for people to
          connect, grow and receive support.
        </p>
      </section>

      <section>
        <h2>What We Offer</h2>

        <div>
          <article>
            <h3>Community Facilities</h3>
            <p>
              Access facilities designed to support the needs of the Riverside
              community.
            </p>
          </article>

          <article>
            <h3>Community Support</h3>
            <p>
              Helping connect community members with useful resources and
              support.
            </p>
          </article>

          <article>
            <h3>Ways to Help</h3>
            <p>
              Support Riverside through donations and other opportunities to
              contribute.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;