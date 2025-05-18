import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
	return (
    <div className="App-footer">
      <p>
        Copyright&nbsp;
        {getFullYear()}
        &nbsp;-&nbsp;
        {getFooterCopy(true)}
      </p>
    </div>
    );
}

export default Footer;
