import React, { FC, FormEvent, useState } from "react";
import './Login.css';
import { useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateName, validatePassword } from "../Validators/validation";

const URL: string = "http://localhost:3000/Login-form";
type LoginFormState = {
    username: string,
    password: string,
    loginAs:string
  }
const Login: React.FC = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const [state, setState] = useState<LoginFormState>({
        username: "",
        password: "",
        loginAs: ""
      });

      type LoginFormError = {
        usernameError: string;
        passwordError: string;
    
      }
      const [formErrors, setFormErrors] = useState<LoginFormError>({
        usernameError: "",
        passwordError: "",
    
      });
    
      const LoginList: string[] = [
        "Assistant Director", "Production Manager", "Production Coordinator", "Team Members"
      ]
      const [mandatory, setMandatory] = useState(false);
      const [successMessage, setSuccessMessage] = useState("");
      const [valid, setvalid] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");


      type Messages = {
        USERNAME_ERROR: string,
        PASSWORD_ERROR: string,
        Success: string;
        Error: string;
        Mandatory: string;
      }
      const messages: Messages = {
        USERNAME_ERROR: "Please enter a valid  user name",
        PASSWORD_ERROR: "Please enter a valid password.",
        Success: "Successfully signed in :",
        Error: "Please run the backend",
        Mandatory: "Enter all the form fields"
      }

    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log('Submitted:', { username, password, remember });
        if(state.username===""||state.password===""||state.loginAs===""){
            setMandatory(true);
          }
          else{
            setMandatory(false);
            
            axios.post(URL, state)
            .then((Response)=>{
               console.log(Response.data)
               setSuccessMessage(messages.Success+ Response.data.id);
               setErrorMessage("");
            })
            .catch((error)=>{
              console.log(error);
              setErrorMessage(messages.Error);
              setSuccessMessage("");
            }
            )
          }
    };
    
      const navigate = useNavigate();

      const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        let name:string=event.target.name
        let value:string =event.target.value
        setState({...state,[name]:value});
        validateField(name,value);
      } 
      const validateField = (name: string, value: any): void => {
        let errors = {...formErrors};
        switch(name){
          case "username":
            errors.usernameError=(validateName(value)) ?"":messages.USERNAME_ERROR
            break;
          case "password":
            errors.passwordError=(validatePassword(value))?"":messages.PASSWORD_ERROR
            break;
          default:
            break;    
        }
        setFormErrors(errors);
        const valid=Object.values(errors).every((error)=>error==="")
        setvalid(valid);

      };
      
      
    return (
      <React.Fragment>
      <div className="row">
        
          <div >
        <div className="container">
            <div className="right-panel">
                <div className="login-box">
                    <h2>
                        LOGIN
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                data-testid="username"
                                placeholder="Enter your username"
                                id="username"
                                type="text"
                                name="username"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <span className="text-danger" data-testid="userNameError">{formErrors.usernameError}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                data-testid="password"
                                placeholder="Enter your password"
                                id="password"
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <span className="text-danger" data-testid="passwordError">{formErrors.passwordError}</span>
                        </div>
                        <div className="form-group">
                                        <label className="form-label" htmlFor="LoginList"><b>Login As</b></label>
                                        <select
                                            className="form-control"
                                            id="LoginList"
                                            name="LoginList"
                                            value={state.loginAs}
                                            onChange={handleChange}
                                            data-testid = "LoginList">
                                                                                    
                                            <option value="" disabled>--Select your role--</option>
                                            {LoginList.map((goal, index) => {
                                                return <option key={index} value={goal}>{goal}</option>
                                            })}
                                        </select>
                                    </div>
                        <div className="options">
                            <label>
                                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />{''} Remember
                            </label>
                            <a href="forgetpassword">Forgot Password?</a>
                        </div>
                        <div>
                        <button type="submit" name="submit" disabled={!valid} className="login-button">LOGIN</button>
                                       
                        {
                         mandatory ? <div data-testid="mandatory" className='text-danger'><h5><b>{messages.Mandatory}</b></h5></div>:""
                         }</div>
                                        {
                                          successMessage ? <span data-testid="success" className='text-success'><h5><b>{successMessage}</b></h5></span>:("")
                                        }
                                        {
                                          errorMessage ? <span data-testid="error" className='text-danger'><h5><b>{errorMessage}</b></h5></span>:""
                                        }

                     <br></br>
                        <br></br>                   
                    <p className="signup-text">
                            Have no account yet? <br></br> <a href="/Signup">SIGN UP</a>
                    </p>
                    </form>
                </div>
            </div>
        </div>  
        </div>
        </div>
      
    </React.Fragment>
    );
};
export default Login;