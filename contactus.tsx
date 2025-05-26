import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
const ContactUs:React.FC=()=>
{
    return(
        <div><nav className="navbar navbar-expand-lg navbar-dark">

        

        <Link className="navbar-brand" to="/home">Home</Link>
        <Link className="navbar-brand" to="/about">About</Link>
        <Link className="navbar-brand" to="/contactus">Contact Us</Link>
        <ul className="navbar-nav ml-auto">
          
          <li className="nav-item">
            <Link className="nav-link" to="/Signup"> Register here </Link>
          </li>

        </ul>
      </nav>
        <div className="container">
        <div className="right-panel">
            
        
            <section className='contact-box'>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions, feedback, or inquiries about our Movie Production Management System, feel free to reach out to us.
                </p>
                <h3 className='contacth3'>Email</h3>
                <p>support@movieproduction.com</p>
                <h3 className='contacth3'>Phone</h3>
                <p>+91 12345 12345</p>
                <h3 className='contacth3'>Address</h3>
                <p>123, Film City Road,<br />
                India -600097</p>
            </section>
        
        </div>
        </div>
        
</div>
    )
};

export default ContactUs;
