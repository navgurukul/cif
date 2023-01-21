import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <li><Link to='/'>navbar</Link></li> */}
      <Link to='/'>navbar</Link>
      <button>
        <Link to="/home">home</Link>
      </button>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
