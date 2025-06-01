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
    constructor(prop) {
        super(prop);

        this.state = {
            email: "",
            password: "",
            enableSubmit: false,
        };
    };

    handleChangeEmail(e) {
        const email = e;
        const { password } = this.state;

        this.setState({ email }, () => {
            const isValid = this.validateForm(this.state.email, password);
            this.setState({ enableSubmit: isValid });
        });
    }

    handleChangePassword(e) {
        const password = e;
        const { email } = this.state;

        this.setState({ password }, () => {
            const isValid = this.validateForm(email, this.state.password);
            this.setState({ enableSubmit: isValid });
        });
    }

    // Email validation function (basic pattern)
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Form validation: both fields filled, email valid, password ≥ 8 chars
    validateForm(email, password) {
        return email && this.validateEmail(email) && password && password.length >= 8;
    }

    render() {
        const { handleLogin } = this.props;
        return (<div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>

            <div className={css(styles.loginDiv)}>
                <form onSubmit={() => { handleLogin() }}>
                    <span>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={e => this.handleChangeEmail(e.target.value)} />
                    </span>
                    <span>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onChange={e => this.handleChangePassword(e.target.value)} />
                    </span>
                    {this.state.enableSubmit ? (<input data-testid="submitBtn" type='submit' className={css(styles.btn)} value="OK" />) : (null)}
                </form>
            </div>
        </div>)
    }
}

export default Login;