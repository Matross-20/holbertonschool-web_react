import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holbertonLogo} alt="holberton logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
    padding: "20px",
  },
  logo: {
    height: "200px",
    marginRight: "20px",
  },
  title: {
    fontSize: "2rem",
    color: "#e0354b",
  },
});

export default Header;