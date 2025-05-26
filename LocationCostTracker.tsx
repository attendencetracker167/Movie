// import React, {useEffect, useState} from "react";
// import axios from "axios";

// interface LocationCost{
//     id:number;
//     name:string;
//     cost:number;
// }

// const LocationCostTracker: React.FC=()=>{
//     const [costs, setCosts]=useState<LocationCost[]>([]);
//     useEffect(()=>{
//         axios.get("http://localhost:8080/api/locations/costs")
//         .then((res)=>setCosts(res.data))
//         .catch((err)=>console.error("Failed to fetch costs",err));
//     },[]);
//     return(
//         <div>
//             <h2>Cost per Location</h2>
//             <table style={{borderCollapse:"collapse",width:"100%"}}>
//                 <thead>
//                     <tr>
//                         <th style={{border:"1px solid black",padding:"8px"}}>Cost</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {costs.map((loc)=>(
//                         <tr key={loc.id}>
//                             <td style={{border:"1px solid black",padding:"8px"}}>{loc.name}</td>
//                             <td style={{border:"1px solid black",padding:"8px"}}>{loc.cost}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default LocationCostTracker;


import React, { useEffect, useState } from "react";
import axios from "axios";

interface LocationCost {
  id: number;
  name: string;
  cost: number;
}

const LocationCostTracker: React.FC = () => {
  const [costs, setCosts] = useState<LocationCost[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/locations/costs")
      .then((res) => setCosts(res.data))
      .catch((err) => console.error("Failed to fetch costs", err));
  }, []);

  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Cost per Location</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {costs.map((loc) => (
            <tr key={loc.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {loc.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                ${loc.cost.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationCostTracker;
