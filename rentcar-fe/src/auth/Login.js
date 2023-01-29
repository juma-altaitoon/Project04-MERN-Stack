import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import './Login.css'
//import Input from '@mui/material/Input';

export default function Login(props) {
    const [newUser, setNewUser] = useState({});
    const [mode, setMode] = useState('login');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email_address, setEmail_address] = useState('');
    const [password, setPassword] = useState('');

    
    // const changeHandler = (e) => {
    //     const user = {...newUser};
    //     user[e.target.name] = e.target.value;
    //     console.log(user);
    //     setNewUser(user);
    // }

    // const loginHandler = event => {
    //     event.preventDefault();
    //     var newUser = {
    //       'first_name': first_name,
    //       'last_name': last_name,
    //       'email_address': email_address,
    //       'password': password
    //     }
    //     props.login(newUser)
    // }

    const toggleMode = () =>{
      if (mode === 'login')
        setMode('signup')
      else
        setMode('login')
    }

    const onSubmit = (e) => {
      e.preventDefault();
      console.log(e)
      var newUser = {
        'first_name': first_name,
        'last_name': last_name,
        'email_address': email_address,
        'password': password
      }
      console.log(newUser)
      if (mode === 'login')
        props.login(newUser)
      else
        props.register(newUser)
      }


    return (
          <div>
              {/* <h1>Sign In</h1>
                <TextField name="email_address" type="email" onChange={changeHandler} />
                <TextField name="password" type="password" onChange={changeHandler} />
                <Button varient = "primary" onClick={loginHandler}>Login</Button> */}
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
                  <section className={`form-block form-block--is-${mode}`}>
                    <header className="form-block__header">
                        <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={toggleMode} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <form onSubmit={onSubmit}>
                        <div className="form-block__input-wrapper">
                          <div className="form-group form-group--login">
                              <Input type="text" id="email_address" name="email_address" label="Email Address" disabled={mode === 'signup'} onChange={(e) => setEmail_address(e.target.value)}/>
                              <Input type="password" id="password" name="password" label="Password" disabled={mode === 'signup'} onChange={(e) => setPassword(e.target.value)}/>
                          </div>
                          <div className="form-group form-group--signup">
                            <Input type="text" id="firstname" label="First Name" name="first_name" disabled={mode === 'login'} onChange={(e) => setFirst_name(e.target.value)}/>
                            <Input type="text" id="lastname" label="Last Name" name="last_name" disabled={mode === 'login'} onChange={(e) => setLast_name(e.target.value)}/>
                            <Input type="email" id="email_address" name="email_address" label="Email Address" disabled={mode === 'login'} onChange={(e) => setEmail_address(e.target.value)}/>
                            <Input type="password" id="password" name="password" label="password" disabled={mode === 'login'} onChange={(e) => setPassword(e.target.value)}/>
                          </div>
                        </div>
                        <button className="button button--primary full-width" type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
                     </form>
                </section>
            </div>
         </div>
  )
}

const Input = ({ id, type, label, disabled }) => (
  <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);