// import React, { useState, useEffect } from "react"; 
// import axios from "axios";

// interface Schedule {
//   id: number;
//   startDate: string;
//   endDate: string;
//   purpose: string;
//   bookedBy: string;
// }

// interface Props {
//   locationId: number;
// }

// const ScheduleForm: React.FC<Props> = ({ locationId }) => {
//   const [schedules, setSchedules] = useState<Schedule[]>([]);
//   const [formData, setFormData] = useState({
//     startDate: "",
//     endDate: "",
//     purpose: "",
//     bookedBy: "",
//   });

//   // Load schedules for the location
//   useEffect(() => {
//     if (!locationId) return;
//     axios
//       .get(`http://localhost:8080/api/schedules/location/${locationId}`)
//       .then((res) => setSchedules(res.data))
//       .catch((err) => console.error("Failed to load schedules", err));
//   }, [locationId]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/api/schedules", { locationId, ...formData })
//       .then(() => {
//         alert("Schedule added");
//         // reload schedules after adding
//         return axios.get(`http://localhost:8080/api/schedules/location/${locationId}`);
//       })
//       .then((res) => setSchedules(res.data))
//       .catch((err) => alert("Failed to add schedule"));
//   };

//   return (
//     <div>
//       <h2>Schedule for Location {locationId}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Start Date: </label>
//         <input
//           type="date"
//           name="startDate"
//           value={formData.startDate}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>End Date: </label>
//         <input
//           type="date"
//           name="endDate"
//           value={formData.endDate}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Purpose: </label>
//         <input
//           type="text"
//           name="purpose"
//           value={formData.purpose}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Booked By: </label>
//         <input
//           type="text"
//           name="bookedBy"
//           value={formData.bookedBy}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <button type="submit">Add Schedule</button>
//       </form>

//       <h3>Existing Schedules</h3>
//       <ul>
//         {schedules.map((sch) => (
//           <li key={sch.id}>
//             {sch.startDate} to {sch.endDate} - {sch.purpose} (Booked by {sch.bookedBy})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ScheduleForm;



// import React, { useState, useEffect } from "react"; 
// import axios from "axios";

// interface Schedule {
//   id: number;
//   startDate: string;
//   endDate: string;
//   purpose: string;
//   bookedBy: string;
// }

// interface Props {
//   locationId: number;
// }

// const ScheduleForm: React.FC<Props> = ({ locationId }) => {
//   const [schedules, setSchedules] = useState<Schedule[]>([]);
//   const [formData, setFormData] = useState({
//     startDate: "",
//     endDate: "",
//     purpose: "",
//     bookedBy: "",
//   });

//   useEffect(() => {
//     if (!locationId) return;
//     axios
//       .get(`http://localhost:8080/api/schedules/location/${locationId}`)
//       .then((res) => setSchedules(res.data))
//       .catch((err) => console.error("Failed to load schedules", err));
//   }, [locationId]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/api/schedules", { locationId, ...formData })
//       .then(() => {
//         alert("Schedule added");
//         return axios.get(`http://localhost:8080/api/schedules/location/${locationId}`);
//       })
//       .then((res) => setSchedules(res.data))
//       .catch(() => alert("Failed to add schedule"));
//   };

//   const boxStyle: React.CSSProperties = {
//     backgroundColor: 'white',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '20px',
//     maxWidth: '600px',
//     margin: '20px auto',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//   };

//   return (
//     <div>
//       {/* Form Box */}
//       <div style={boxStyle}>
//         <h2 style={{ textAlign: 'center' }}>Add Schedule for Location {locationId}</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>Start Date:</label><br />
//             <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>End Date:</label><br />
//             <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>Purpose:</label><br />
//             <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} required />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>Booked By:</label><br />
//             <input type="text" name="bookedBy" value={formData.bookedBy} onChange={handleChange} required />
//           </div>
//           <button type="submit">Add Schedule</button>
//         </form>
//       </div>

//       {/* Existing Schedules Box */}
//       <div style={boxStyle}>
//         <h3 style={{ textAlign: 'center' }}>Existing Schedules</h3>
//         {schedules.length === 0 ? (
//           <p style={{ textAlign: 'center' }}>No schedules found.</p>
//         ) : (
//           <ul style={{ paddingLeft: '20px' }}>
//             {schedules.map((sch) => (
//               <li key={sch.id} style={{ marginBottom: '6px' }}>
//                 {sch.startDate} to {sch.endDate} — {sch.purpose} (Booked by {sch.bookedBy})
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ScheduleForm;




import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { useParams } from "react-router-dom";

interface Schedule {
  id: number;
  startDate: string;
  endDate: string;
  purpose: string;
  bookedBy: string;
}

// interface Props {
//   locationId: number;
// }

const ScheduleForm = () => {
    const {locationId} = useParams<{locationId:string}>();
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    purpose: "",
    bookedBy: "",
  });

  useEffect(() => {
    if (!locationId) return;
    axios
      .get(`http://localhost:8080/api/schedules/location/${locationId}`)
      .then((res) => setSchedules(res.data))
      .catch((err) => console.error("Failed to load schedules", err));
  }, [locationId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/schedules", { locationId, ...formData })
      .then(() => {
        alert("Schedule added");
        return axios.get(`http://localhost:8080/api/schedules/location/${locationId}`);
      })
      .then((res) => setSchedules(res.data))
      .catch(() => alert("Failed to add schedule"));
  };

  const handleDelete=(id:number)=>{
    axios.delete(`http://localhost:8080/api/schedules/${id}`)
    .then(()=>setSchedules(prev => prev.filter(s=>s.id!==id)))
    .catch(()=>alert("failed to delete"));
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div>
      {/* Form Box */}
      <div style={boxStyle}>
        <h2 style={{ textAlign: 'center' }}>Add Schedule for Location {locationId}</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Start Date:</label><br />
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>End Date:</label><br />
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Purpose:</label><br />
            <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Booked By:</label><br />
            <input type="text" name="bookedBy" value={formData.bookedBy} onChange={handleChange} required />
          </div>
          <button type="submit">Add Schedule</button>
        </form>
      </div>

      {/* Existing Schedules Box */}
      <div style={boxStyle}>
        <h3 style={{ textAlign: 'center' }}>Existing Schedules</h3>
        {schedules.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No schedules found.</p>
        ) : (
          <ul style={{ paddingLeft: '20px' }}>
            {schedules.map((sch) => (
              <li key={sch.id} style={{ marginBottom: '6px' }}>
                {sch.startDate} to {sch.endDate} — {sch.purpose} (Booked by {sch.bookedBy})
                <button onClick={()=>handleDelete(sch.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ScheduleForm;

