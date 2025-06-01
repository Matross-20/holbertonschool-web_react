import { StyleSheet, css } from 'aphrodite';
import React, { useContext } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import newContext from '../Context/context';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    logo: {
        display: 'flex',
        width: '80px',
    },
    heading: {
        display: 'flex',
        fontWeight: 'bold',
        color: '#e1003c',
    },
    logoutSection: {
        marginLeft: 'auto',
    },
    logoutLink: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: '#e1003c',
    },
});

const Header = () => {
    const { user, logOut } = useContext(newContext);

    return (
        <>
            <div className={css(styles.header)}>
                <img src={holbertonLogo} className={css(styles.logo)} alt="holberton logo" />
                <h1 className={css(styles.heading)}>School dashboard</h1>
            </div>
            {user.isLoggedIn && (
                <div id="logoutSection" className={css(styles.logoutSection)}>
                    Welcome {user.email} (
                    <span
                        className={css(styles.logoutLink)}
                        onClick={logOut}
                    >
                        logout
                    </span>
                    )
                </div>
            )}
        </>
    );
};

export default Header;