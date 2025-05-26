import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Createproject.css';



const Createproject = () => {
    
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const isFutureOrToday = (dateStr: string): boolean => {
        const selected = new Date(dateStr);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today;
    };
    const StatusList: string[] = [
        "Not Yet Started","In Progress","Completed"
      ]
    const isEndAfterStart = (): boolean => {
        return new Date(endDate) > new Date(startDate);
    };
    const handleCreateProject = () => {
        if (!title || !genre || !budget || !startDate || !endDate || !description ||!status) {
            alert("Please fill all fields");
            return;
        }
        if (!isFutureOrToday(startDate)) {
            alert("Start Date must be today or in the future");
            return;
        }
        if (!isEndAfterStart()) {
            alert("End Date must be future date");
            return;
        }
        alert("project Created!");
        navigate("/overview");
    };
    const handleAssignTeam = () => {
        alert("Team member assignment module coming soon.")
    };
    return (
        
            <div className="project-form-container">
                <div className="project-form-card">
                    <h4 className="txt-center mb-4">Create new Movie Project</h4>
                    <div className="mb-3">
                        <label className="form-label">Movie Title</label>
                        <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <input className="form-control" type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Enter Genre" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Budget</label>
                        <input className="form-control" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter budget" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Start Date</label>
                        <input className="form-control" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="mb-4">
                    <label className="form-label">End Date</label>
                    <input className="form-control" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                    </div>
                    <div className="form-group">
                                        <label className="form-label" htmlFor="StatusList">Status</label>
                                        <select
                                            className="form-control"
                                            id="LoginList"
                                            name="StatusList"
                                            value={status}
                                            data-testid = "StatusList"
                                            onChange={(e)=>setStatus(e.target.value)}>
                                                                                 
                                            <option value="" disabled>--Select your role--</option>
                                            {StatusList.map((goal, index) => {
                                                return <option key={index} value={goal}>{goal}</option>
                                            })}
                                        </select>
                                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-light" onClick={handleAssignTeam}>Assign Key Team members</button>
                        <button className="btn btn-light" onClick={handleCreateProject}>Create Project</button>
                    </div>

                </div>
            </div>
       
        
    );
};
export default Createproject;

