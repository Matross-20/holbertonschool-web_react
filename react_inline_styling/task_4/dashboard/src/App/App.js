import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notification from '../Notifications/Notifications'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
    '*':{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    root: {
        '--red': '#e11c3e',
    },
    body:{
        width: '100%',
        height: '100vh',
        background: 'red',
    },
    contentHeader: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: '0',
        borderBottom: '3px solid var(--red)',
    },
    appBody:{
        height: '100%',
        padding: '20px',
    },
    appFooter:{
        textAlign: 'center',
        borderTop: '3px solid var(--red)',
    },
    smallContentHeader: {
        '@media (max-width: 900px)': {
            padding: '0',
        }
    },
    smallAppBpody: {
        '@media (max-width: 900px)': {
            padding: '20px',
        }
    },
    smallTextIpsun: {
        padding: '0',
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];

        this.state = {
            listNotifications: [
                { id: 1, type: 'default', value: 'New course available' },
                { id: 2, type: 'urgent', value: 'New resume available' },
                { id: 3, type: 'urgent', html: { __html: 'Custom notification with HTML' } },
            ],
        };
    }

    static defaultProps = {
        logOut: () => {},
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        event.preventDefault();

        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    render() {
        const { isLoggedIn } = this.props;
        const { listNotifications } = this.state;
        let title = isLoggedIn ? 'Course list' : 'Log in to continue'

        return(
            <div className={css(styles.root)}>
                <div className={css(styles.contentHeader, styles.smallContentHeader)}>
                    <Notification displayDrawer={true} listNotifications={listNotifications} />
                    <Header />
                </div>
                <div className={css(styles.appBody, styles.smallAppBpody)}>
                    <BodySectionWithMarginBottom title={title}>
                        {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
                    </BodySectionWithMarginBottom>

                    <BodySection title='News from the School'>
                        <p className={css(styles.smallTextIpsun)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </BodySection>
                </div>
                <div className={css(styles.appFooter)}><Footer/></div>
            </div>
        )
    }
}


App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};


export default WithLogging(App);