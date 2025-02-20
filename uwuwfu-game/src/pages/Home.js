// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Ana Ekran</h1>
      <p>Bir konsept seçin ve turnuvaya başlayın!</p>
      <div style={styles.btnContainer}>
        <Link to="/tournament/cities" style={styles.link}>
          <button style={styles.button}>Şehirler</button>
        </Link>
        <Link to="/tournament/foods" style={styles.link}>
          <button style={styles.button}>Yemekler</button>
        </Link>
        <Link to="/tournament/celebrities" style={styles.link}>
          <button style={styles.button}>Ünlüler</button>
        </Link>
        <Link to="/tournament/kuruyemis">
        <button style={styles.button}>Kuruyemiş</button></Link>


      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  btnContainer: {
    marginTop: "20px"
  },
  link: {
    textDecoration: "none",
    margin: "0 10px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer"
  }
};

export default Home;
