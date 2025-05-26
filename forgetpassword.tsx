import React, { useState } from "react";
import './Login.css';
import { useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateName, validatePassword } from "../Validators/validation";

const URL: string = "http://localhost:3000/forgetpassword";
type LoginFormState = {
    username: string,
    password: string,
    loginAs:string
  }
const forgetpassword: React.FC = () => {
    
    
      
      
    return (
        <div className="container">
            <div className="right-panel">
                <div className="login-box">
                    <h2>
                        Recover Password
                    </h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Email</label>
                            <input
                                data-testid="name"
                                placeholder="Enter your email"
                                id="name"
                                type="text"
                                name="name"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">New Password</label>
                            <input
                                data-testid="password"
                                placeholder="Enter your password"
                                id="password"
                                type="password"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        
                        
                        
                        <button type="submit" className="login-button">Submit</button>
                        
                       
                    </form>
                </div>
            </div>
        </div>  
    );
};
export default forgetpassword;