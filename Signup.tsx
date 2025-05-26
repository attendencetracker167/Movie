import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef} from "react";
import './SignUp.css';


const Signup: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        if(!acceptTerms){
            alert("You must accept the terms.");
            return;
        }
        console.log('Submitted:',{firstName,lastName,email,password,confirmPassword});
    };
    return (
        <React.Fragment>
      <div className="row">
        <div>
            <br></br>
            <div className="signup-container">
                <div className="signup-box">
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="name-fields">
                            <input type="text" 
                            placeholder="First Name" value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                                required />
                                <br/>
                            <input type="text" placeholder="Last Name" value={lastName} 
                            onChange={(e) => setLastName(e.target.value)}
                                required />
                        </div>  
                        <input type="email" placeholder="Email" value={email}
                         onChange={(e) => setEmail(e.target.value)}
                            required />
                             <br/> 
                        <input type="password" placeholder="Password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                            required />  <br/> 
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                            required />
                        <div className="terms">
                            <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)}
                                required />
                            <label>
                                I accept the <a href="#">Terms Of Use</a> & <a href="#">Privacy Policy</a></label>
                        </div>
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </form>
                    <p className="bottom-text">

                        Already have an account? <Link to="/Login">Login here.</Link>
                    </p>
                </div>
            </div>
            </div>
            </div>
            </React.Fragment>

            );
};
export default Signup;