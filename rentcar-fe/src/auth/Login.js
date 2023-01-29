import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import './Login.css'

export default function Login(props) {
    const [newUser, setNewUser] = useState({});
    const [mode, setMode] = useState('login');
    
    const changeHandler = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }

    const toggleMode = () =>{
      if (mode === 'login')
        setMode('signup')
      else
        setMode('login')
    }

    const onSubmit = (e) => {
      e.preventDefault();
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
                              <Input type="text" id="email_address" name="email_address" label="Email Address" disabled={mode === 'signup'} onChange={changeHandler}/>
                              <Input type="password" id="password" name="password" label="Password" disabled={mode === 'signup'} onChange={changeHandler}/>
                          </div>
                          <div className="form-group form-group--signup">
                            <Input type="text" id="firstname" label="First Name" name="first_name" disabled={mode === 'login'} onChange={changeHandler}/>
                            <Input type="text" id="lastname" label="Last Name" name="last_name" disabled={mode === 'login'} onChange={changeHandler}/>
                            <Input type="email" id="email_address" name="email_address" label="Email Address" disabled={mode === 'login'} onChange={changeHandler}/>
                            <Input type="password" id="password" name="password" label="password" disabled={mode === 'login'} onChange={changeHandler}/>
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