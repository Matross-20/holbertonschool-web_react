import './footer.css';
import { getFullYear,getFooterCopy } from './utils';

function Footer() {
  return (
      <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
  );
}

export default Footer;
