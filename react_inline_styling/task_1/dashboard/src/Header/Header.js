import { getFullYear,getFooterCopy } from './utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
  }
  })

function Header() {
  return (
      <header className="App-header">
        <img className="App-Logo" alt='' src={require('./logo.jpg')} />
        <h1>School dashboard</h1>
      </header>
  );
}

export default Header;
