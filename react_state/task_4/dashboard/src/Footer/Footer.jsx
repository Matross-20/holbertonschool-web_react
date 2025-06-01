import React, { useContext } from 'react'
import newContext from '../Context/context'
import { getCurrentYear, getFooterCopy } from '../utils/utils'
import './Footer.css'

const Footer = () => {
    const { user } = useContext(newContext);

    return (
        <div className="App-footer">
            <p>
                Copyright {getCurrentYear()} - {getFooterCopy(true)}
            </p>
            {user.isLoggedIn && (
                <p>
                    <a href="#">Contact us</a>
                </p>
            )}
        </div>
    )
}

export default Footer