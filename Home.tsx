import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
const Home:React.FC=()=>
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
            
        
            <section className='box'>
                <h1>Welcome to Movie <br></br>Production Management System</h1>
                <p style={styles.description}>
                    Streamline your entire movie production workflow with collaborative tools to plan,manage budges,track schedules, and communicate seamlessly with your team.
                    
                    Film production management software enables movie, TV, and film producers to manage all aspects of 
                    production, including scheduling, shot lists, storyboards, call sheets, screenwriting, budgeting,
                     script breakdowns, film crew management, client approvals, and more.
                    <br></br>
                     AVID Media Composer: best for film and TV
AVID’s Media Composeris undoubtedly the industry’s gold standard NLE. This is one of the most reliable editing software
 solutions available, optimized especially for commercial projects and professional filmmaking
                </p>
                
            </section>
        
        </div>
        </div>
        </div>

    )
};
const styles={
    description:{
        padding: '40px',
        fontSize: '20px',
        marginBottom: '30px',
    },
    title:{
        color: '#333',
        marginBottom: '20px',
    }
}
export default Home;
