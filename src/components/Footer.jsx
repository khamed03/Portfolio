import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
  <p>© {new Date().getFullYear()} Khaled. Thanks for visiting!</p>
</footer>

);

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "10px 0",
    textAlign: "center",
  },
};

export default Footer;
