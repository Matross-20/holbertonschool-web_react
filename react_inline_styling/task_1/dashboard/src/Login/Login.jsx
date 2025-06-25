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
      <button type="button" className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: "2rem",
    fontSize: "1rem",
  },
  inputGroup: {
    margin: "0.5rem 0",
  },
  input: {
    marginLeft: "0.5rem",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#e0354b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
});

export default Login;