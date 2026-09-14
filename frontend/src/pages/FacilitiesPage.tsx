import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Facility = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

function FacilitiesPage() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFacilities() {
      const { data, error } = await supabase
        .from("facilities")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError("Unable to load facilities.");
        setLoading(false);
        return;
      }

      setFacilities(data ?? []);
      setLoading(false);
    }

    fetchFacilities();
  }, []);

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
        {loading && <p>Loading facilities...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && facilities.length === 0 && (
          <p>No facilities are currently available.</p>
        )}

        {!loading && !error && facilities.length > 0 && (
          <div>
            {facilities.map((facility) => (
              <article key={facility.id}>
                <h2>{facility.name}</h2>

                <p>{facility.description}</p>

                <button type="button">View Facility</button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default FacilitiesPage;