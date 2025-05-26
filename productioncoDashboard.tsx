//PRODUCTION COORDINATOR DASHBOARD
import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import './Dashboard.css';

const PrDashboard = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOPen] = useState(false);
    const sections:any[] = [
        {
            title: "Cast And Crew",
            description: "Manage Cast and Crew for Movie Production Management System",
            buttonText: "Cast & Crew",
            route: "/castcrew",
        },
        {
            title: "Flim Location",
            description: "Location Management for shooting",
            buttonText: "Manage Location",
            route: "/locations",

        },
        {
            title: "Physical Assets",
            description: "Create,assign and track tasks for Assets Management",
            buttonText: "View Assets",
            route: "/assets",
        },
        {
            title: "Production Documents",
            description: "Access production performance indicators and reports",
            buttonText: "View Documents",
            route: "/documents",
        },

    ];
    const toggleDropdown = () => {
        setDropdownOPen(!dropdownOpen);
    };
    const handleProfileClick = (action: any) => {
        switch (action) {
            case "view-profile":
                navigate("/profile");
                break;
            case "view-users":
                navigate("/users");
                break;
            case "logout":
                console.log("Logged out");
                break;
            default:
                break;

        }
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/home">Movie Production</a>
                    <div className="dropdown ms-auto">
                        <button className="btn custom-btn" type="button" id="dropdownMenuButton" onClick={toggleDropdown}>Profile</button>
                        <ul className={'dropdown-menu dropdown-menu-end'} aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item"
                                onClick={() =>handleProfileClick("view-profile")}>View Profile</button>
                            </li>
                            <li><button className="dropdown-item"
                                onClick={() =>handleProfileClick("view-users")}>View Users</button>
                            </li>
                            <li><button className="dropdown-item"
                                onClick={() =>handleProfileClick("logout")}>Logout</button>
                            </li></ul>
                    </div>
                </div>
            </nav>
            <div className="container py-5 light-theme min-vh-100">
               <h2 style={{color:"white"}}>🎬 Welcome to the Production Dashboard</h2><br></br>
                <div className="row g-4">{sections.map((section, index) => (
                    <div key={index} className="col-md-6">
                        <div className="custom-card h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div style={{color:"white"}}>
                                    <h5 className="card-title">{section.title}</h5>
                                    <p className="card-text">{section.description}</p>
                                </div>
                                <button className="btn btn-light mt-3" onClick={() => navigate(section.route)}>{section.buttonText}</button>
                            </div>
                        </div>
                    </div>

                ))}
                </div>
            </div>
        </div>

    );
};
export default PrDashboard;





