import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Riverside</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </nav>
  );
}

export default Navbar;