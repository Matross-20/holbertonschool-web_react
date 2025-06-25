import './Header.css';
import { getFullYear,getFooterCopy } from './utils';

function Header() {
  return (
      <header className="App-header">
        <img className="App-Logo" alt='' src={require('./logo.jpg')} />
        <h1>School dashboard</h1>
      </header>
  );
}

export default Header;
