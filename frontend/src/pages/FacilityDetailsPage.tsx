import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Facility = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

function FacilityDetailsPage() {
  const { id } = useParams();
  const [facility, setFacility] = useState<Facility | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFacility() {
      if (!id) {
        setError("Facility could not be found.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("facilities")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Unable to load this facility.");
        setLoading(false);
        return;
      }

      setFacility(data);
      setLoading(false);
    }

    fetchFacility();
  }, [id]);

  if (loading) {
  return (
    <main>
      <section className="facility-details">
        <div className="facility-loading-card">
          <div className="loading-spinner"></div>

          <p>Loading facility...</p>
        </div>
      </section>
    </main>
  );
}

  if (error || !facility) {
  return (
    <main>
      <section className="facility-details">
        <div className="facility-error-card">
          <p className="facility-error-code">Oops</p>

          <h1>Facility Not Found</h1>

          <p>
            We could not find the facility you are looking for. It may have
            been removed or the link may be incorrect.
          </p>

          <Link to="/facilities" className="primary-button">
            Back to Facilities
          </Link>
        </div>
      </section>
    </main>
  );
}

  return (
    <main>
      <section className="facility-details">
        <Link to="/facilities" className="back-link">
          ← Back to Facilities
        </Link>

        <div className="facility-details-card">
          <p className="facility-label">RIVERSIDE FACILITY</p>

          <h1>{facility.name}</h1>

          <p className="facility-details-description">
            {facility.description}
          </p>

          <div className="facility-details-actions">
            <Link to="/facilities" className="primary-button">
              View All Facilities
            </Link>

            <Link to="/donate" className="secondary-button">
              Support Riverside
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FacilityDetailsPage;