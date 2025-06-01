import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        height: '100%',
        padding: '0.5rem',
        flexDirection: 'column',
    },
    loginDiv: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
        }
    },
    btn: {
        '@media (max-width: 900px)': {
            width: '50px',
        }
    }
});

// const Login = () => {
//     return (
//         <div className={css(styles.body)}>
//             <p>Login to access the full dashboard</p>

//             <div className={css(styles.loginDiv)}>
//                 <span>
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" name="email" />
//                 </span>
//                 <span>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" id="password" name="password" />
//                 </span>
//                 <button className={css(styles.btn)}>OK</button>
//             </div>
//         </div>
//     );
// };

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: props.email || "",
            password: props.password || "",
            enableSubmit: false,
        };
    }

    handleChangeEmail = (value) => {
        this.setState({ email: value }, this.validate);
    };

    handleChangePassword = (value) => {
        this.setState({ password: value }, this.validate);
    };

    validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    validateForm = (email, password) =>
        email && this.validateEmail(email) && password && password.length >= 8;

    validate = () => {
        const { email, password } = this.state;
        const isValid = this.validateForm(email, password);
        this.setState({ enableSubmit: isValid });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { logIn } = this.props;
        const { email, password } = this.state;
        logIn(email, password);
    };

    render() {
        const { email, password, enableSubmit } = this.state;

        return (
            <div className={css(styles.body)}>
                <p>Login to access the full dashboard</p>
                <div className={css(styles.loginDiv)}>
                    <form onSubmit={this.handleSubmit}>
                        <span>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => this.handleChangeEmail(e.target.value)}
                            />
                        </span>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => this.handleChangePassword(e.target.value)}
                            />
                        </span>
                        {enableSubmit && (
                            <input
                                data-testid="submitBtn"
                                type="submit"
                                className={css(styles.btn)}
                                value="OK"
                            />
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;