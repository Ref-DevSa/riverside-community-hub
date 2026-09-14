const facilities = [
  {
    name: "Community Hall",
    description:
      "A welcoming space available for community meetings, events and activities.",
  },
  {
    name: "Community Centre",
    description:
      "A central space where Riverside community members can access support and connect with others.",
  },
  {
    name: "Recreation Area",
    description:
      "An area designed for community activities, recreation and social gatherings.",
  },
  {
    name: "Support Services",
    description:
      "Information and support designed to help community members access available resources.",
  },
];

function FacilitiesPage() {
  return (
    <main>
      <section>
        <h1>Our Facilities</h1>

        <p>
          Explore the facilities and services available to the Riverside
          community.
        </p>
      </section>

      <section>
        <div>
          {facilities.map((facility) => (
            <article key={facility.name}>
              <h2>{facility.name}</h2>

              <p>{facility.description}</p>

              <button type="button">View Facility</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FacilitiesPage;