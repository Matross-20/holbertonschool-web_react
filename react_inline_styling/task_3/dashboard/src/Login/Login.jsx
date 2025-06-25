import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
      </div>
      <div className={css(styles.buttonGroup)}>
        <button type="button" className={css(styles.button)}>OK</button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: "2rem",
    fontSize: "1rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.4rem",
    marginTop: "0.3rem",
    fontSize: "1rem",
  },
  buttonGroup: {
    marginTop: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#e0354b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
});

export default Login;