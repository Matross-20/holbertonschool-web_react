import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
      </header>
      <hr></hr>
      <body>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
      </body>
      <footer>
        <div className="App-footer">
          <hr></hr>
          <div className="Copyright">
            <i>Copyright 2024 - holberton School</i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
