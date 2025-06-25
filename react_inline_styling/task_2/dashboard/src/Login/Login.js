import React from "react"
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    login: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'start',
    },
    p: {
       margin: '40px 0px 20px 40px',
       fontSize: '16px',
       fontWeight: '600',
    },
    div: {
       display: 'flex',
       top: '10px',
       paddingLeft: '40px',
       fontWeight: '600',
    },
    inputButton: {
       margin: '0px 10px',
       borderRadius: '5px',
       border: '2px solid rgb(223, 222, 222)',
       backgroundColor: 'white',
    },
   });
   

export default function Login() {
    return (
        <div className={css(styles.login)}>
           <p className={css(styles.p)}>Login to access the full dashboard</p>
           <div className={css(styles.div)}>
               <label htmlFor="email">Email:</label>
               <input type="text" id='email' name="email" className={css(styles.inputButton)}></input>
               <label htmlFor="password">Password:</label>
               <input type="password" id='password' name="password" className={css(styles.inputButton)}></input>
               <button className={css(styles.inputButton)}>OK</button>
           </div>
        </div>
       );       
}
