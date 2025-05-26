import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOPen] = useState(false);
    const sections:any[] = [
        {
            title: "Create Project",
            description: "Create a new Movie project with a title,genre,budget and Timeline",
            buttonText: "New Project",
            route: "/create-project",
        },
        {
            title: "Budget Management",
            description: "Create and manage film production budget with tracking and reporting",
            buttonText: "Manage Budget",
            route: "/budget-management",

        },
        {
            title: "Task Assignment",
            description: "Create,assign and track tasks  for different departments",
            buttonText: "manage Tasks",
            route: "/task-assignment",
        },
        {
            title: "Production Analytics",
            description: "Access production performance indicators and reports",
            buttonText: "View Analytics",
            route: "/analytics",
        },
        {
            title: "Post-Production Tracking",
            description: "Monitor editing,VFX delivery and sound mix statuses",
            buttonText: "Manage Post",
            route: "/post-production",
        },
        {
            title: "Overview",
            description: "Get a quick summary of your ongoing project and progress",
            buttonText: "View Overview",
            route: "/overview",
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
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/home">Movie Production</a>
                    <div className="dropdown ms-auto">
                        <button className="btn custom-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Profile ID</button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item"
                                onClick={() =>navigate("view-profile")}>View Profile</button>
                            </li>
                            <li><button className="dropdown-item"
                                onClick={() =>navigate("view-users")}>View Users</button>
                            </li>
                            <li><button className="dropdown-item"
                                onClick={() =>console.log("logout")}>Logout</button>
                            </li></ul>
                    </div>
                </div>
            </nav>
            <div className="container py-5 light-theme min-vh-100">
                <div className="row g-4">{sections.map((section, index) => (
                    <div key={index} className="col-md-6">
                        <div className="custom-card h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
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
export default Dashboard;
