import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>School dashboard</h1>
			</div>
			<hr />
			<div className="App-body">
				<p>Login to access the full dashboard</p>
				<label htmlFor="email">Email:&nbsp;
					<input type="email"></input>
				</label>
				<label htmlFor="password">&nbsp;Password:&nbsp;
					<input type="password"></input>
				</label>
				&nbsp;
				<button>OK</button>
			</div>
			<hr />
			<div className="App-footer">
				<p>
				  Copyright&nbsp;
          {getFullYear()}
          &nbsp;-&nbsp;
          {getFooterCopy(true)}
				</p>
			</div>
		</div>
	);
}

export default App;
