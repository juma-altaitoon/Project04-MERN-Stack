import React from "react";
//import './auth/Login.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

export default function Login(props) {
    const [newUser, setNewUser] = useState({});
    
    const changeHandler = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div>
        <h1>Sign In</h1>
                <TextField name="email_address" type="email" onChange={changeHandler} />
                <TextField name="password" type="password" onChange={changeHandler} />
                <Button varient = "primary" onClick={loginHandler}>Login</Button>
        </div>
  )
}

//-- Fresh code
// const mode = 'login';

// class LoginComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mode: this.props.mode
//         }
//     }
//     toggleMode() {
//         var newMode = this.state.mode === 'login' ? 'signup' : 'login';
//         this.setState({ mode: newMode});
//     }
//     render() {
//         return (
//             <div>
//                 <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
//                 <section className={`form-block form-block--is-${this.state.mode}`}>
//                     <header className="form-block__header">
//                         <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
//                         <div className="form-block__toggle-block">
//                             <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
//                             <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
//                             <label htmlFor="form-toggler"></label>
//                         </div>
//                     </header>
//                     <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
//                 </section>
//             </div>
//         )
//     }
// }

// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//         <form onSubmit={this.props.onSubmit}>
//             <div className="form-block__input-wrapper">
//                 <div className="form-group form-group--login">
//                     <Input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
//                     <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
//                 </div>
//                 <div className="form-group form-group--signup">
//                     <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
//                     <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
//                     <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
//                     <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
//                 </div>
//             </div>
//             <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
//         </form>
//         )
//     }
// }

// const Input = ({ id, type, label, disabled }) => (
//     <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
// );

// const App = () => (
//     <div className={`app app--is-${mode}`}>
//         <LoginComponent
//             mode={mode}
//             onSubmit={
//                 function() {
//                     console.log('submit');
//                 }
//             }
//         />
//     </div>
// );

// ReactDOM.render( <App/>, document.getElementById("app"));





// _____ Ahmed
// export class LoginComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mode: this.props.mode,
//             userData: {}
//         }
//         this.printWord = this.printWord.bind(this);
//     }
//     toggleMode() {
//         var newMode = this.state.mode === 'login' ? 'signup' : 'login';
//         this.setState({ mode: newMode});
//         this.props.setModeType(newMode)
//     }
//     onChangeHandler = e =>{
//         console.log(e);
//         console.log('test')
//     }
//     printWord(){
//         console.log('word');
//     }
//     render() {
//         return (
//             <div>
//                 <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
//                 <section className={`form-block form-block--is-${this.state.mode}`}>
//                     <header className="form-block__header">
//                         <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
//                         <div className="form-block__toggle-block">
//                             <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
//                             <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
//                             <label htmlFor="form-toggler"></label>
//                         </div>
//                     </header>
//                     <button onClick={() => this.setState({userData: {user: "tester", password: "12345"}})}>Set state data</button>
//                     <button onClick={() => this.props.setUserData(this.state.userData)}>set Data</button>
//                     <button onClick={() => this.props.readMode()}>read Data</button>
//                     <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
//                 </section>
//             </div>
//         )
//     }
// }

// export class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//         <form onSubmit={this.props.onSubmit}>
//             <div className="form-block__input-wrapper">
//                 <div className="form-group form-group--login">
//                     <Input type="text" id="username" 
//                     label="user name" onChange={(e) => this.onChangeHandler.bind(e)} disabled={this.props.mode === 'signup'} />
//                     <input type="text" onChange={() => this.printWord()} />
//                     <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
//                 </div>
                
//                 <div className="form-group form-group--signup">
//                     <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
//                     <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
//                     <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
//                     <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
//                 </div>
//             </div>
//             <button className="button button--primary full-width" type="submit">
//             {this.props.mode === 'login' ? 
//             'Log In': 'Sign Up'
//             }</button>
//         </form>
//         )
//     }
// }

// const Input = ({ id, type, label, disabled }) => (
//     <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
// );