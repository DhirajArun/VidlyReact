import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li style={{ display: "inline", padding: "1em" }}>
          <Link to="/">Vidly</Link>
        </li>
        <li style={{ display: "inline", padding: "1em" }}>
          <Link to="/movies">Movies</Link>
        </li>
        <li style={{ display: "inline", padding: "1em" }}>
          <Link to="/customers">Customers</Link>
        </li>
        <li style={{ display: "inline", padding: "1em" }}>
          <Link to="/rentals">Rentals</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
