import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Createproject.css';

const TaskAssignment = () => {
    const [TaskId, setTaskId] = useState("");
    const [movie_id, setMovie_id] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [deadline, setDeadline] = useState("");
    const [priority, setPriority] = useState("");
    const [assigned_to, setAssigned_to] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const StatusList: string[] = [
        "Not-Started", "In-Progress", "Started","Completed"
      ]

    const handleCreateProject = () => {
        if (!title || !TaskId || !movie_id || !status || !deadline||!priority||!assigned_to||!description) {
            alert("Please fill all fields");
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
                    <h4 className="txt-center mb-4">Task Assignment</h4>
                    <div className="mb-3">
                        <label className="form-label">Assigned To</label>
                        <input className="form-control" type="text" value={assigned_to} onChange={(e) => setAssigned_to(e.target.value)} placeholder="Enter name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Movie Id</label>
                        <input className="form-control" type="text" value={movie_id} onChange={(e) => setMovie_id(e.target.value)} placeholder="Enter Movie Id" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input className="form-control" type="number" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <input className="form-control" type="number" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Set Priority" />
                    </div>
                    
                    <div className="form-group">
                                        <label className="form-label" htmlFor="status">Status</label>
                                        <select
                                            className="form-control"
                                            id="status"
                                            name="status"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            data-testid = "status">
                                            <option value="" disabled>--Select the status--</option>
                                            {StatusList.map((goal, index) => {
                                                return <option key={index} value={goal}>{goal}</option>
                                            })}
                                        </select>
                                    </div>
                    <div className="mb-4">
                    <label className="form-label">Deadline</label>
                    <input className="form-control" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-light" onClick={handleAssignTeam}>Update Task</button>
                        <button className="btn btn-light" onClick={handleCreateProject}>Generate Task ID</button>
                    </div>

                </div>
            </div>
       
        
    );
};
export default TaskAssignment;

