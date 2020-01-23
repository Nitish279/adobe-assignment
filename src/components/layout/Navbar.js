import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-4 custom-navBar">
        <Link className="navbar-brand" to="/">Cart App</Link>

        <ul className="navbar-nav">
          <li className="nav-item active">

            <Link type="button" className="btn btn-secondary" to="/cart">
              Go to cart <span className="badge badge-light">{props.count || 0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
