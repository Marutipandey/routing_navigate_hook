import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link><br /><br />
      <Link to="/about">About</Link><br /><br />
      <Link to="/shine">Shine</Link><br /><br />
      <Link to="/light">Light</Link><br /><br />
      {/* <Link to="/aaa">pagenotfound</Link><br /><br /> */}
      <Link to="/">pagenotfound</Link><br /><br />
      <Link to="/Permsuser/pri">Priya</Link><br /><br />
      <Link to="/Permsuser/poo">Poonam</Link><br /><br />
      <Link to="/Filter">Filter</Link><br /><br />

    </div>
  );
}

export default Navbar;
