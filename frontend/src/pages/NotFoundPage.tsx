import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main>
      <section className="not-found-page">
        <div className="not-found-card">
          <p className="not-found-code">404</p>

          <h1>Page Not Found</h1>

          <p>
            Sorry, the page you are looking for does not exist or may have
            moved.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="primary-button">
              Return Home
            </Link>

            <Link to="/facilities" className="secondary-button">
              View Facilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;