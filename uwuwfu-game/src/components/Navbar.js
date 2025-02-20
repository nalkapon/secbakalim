// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.logo}>Ana Ekran</Link>
      <div>
        <Link to="/tournament/cities" style={styles.navLink}>Şehirler</Link>
        <Link to="/tournament/foods" style={styles.navLink}>Yemekler</Link>
        <Link to="/tournament/celebrities" style={styles.navLink}>Ünlüler</Link>
        <Link to="/tournament/kuruyemis" style={styles.navLink}>Kuruyemiş</Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px"
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "15px"
  }
};

export default Navbar;
