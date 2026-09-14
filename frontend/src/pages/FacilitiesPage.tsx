import { Link } from "react-router-dom";
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
      <section className="page-header">
        <h1>Our Facilities</h1>

        <p>
          Explore the facilities and services available to the Riverside
          community.
        </p>
      </section>

      <section>
        {loading && <p className="status-message">Loading facilities...</p>}

        {error && <p className="status-message error-message">{error}</p>}

        {!loading && !error && facilities.length === 0 && (
          <p className="status-message">
            No facilities are currently available.
          </p>
        )}

        {!loading && !error && facilities.length > 0 && (
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility.id}>
                <div className="facility-card-content">
                  <h2>{facility.name}</h2>

                  <p>{facility.description}</p>

                  <Link
                    to={`/facilities/${facility.id}`}
                    className="facility-button"
                  >
                    View Facility
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default FacilitiesPage;
