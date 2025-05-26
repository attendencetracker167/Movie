// import React, { useEffect, useState } from 'react'; 
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// interface Location {
//   id: number;
//   name: string;
// }

// const HomePage = () => {
//   const [locations, setLocations] = useState<Location[]>([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/locations")
//       .then((res) => setLocations(res.data))
//       .catch((err) => console.error("Failed to fetch locations", err));
//   }, []);

//   return (
//     <div>
//       <h2>Select a Location</h2>
//       <ul>
//         {locations.map((loc) => (
//           <li key={loc.id}>
//             <Link to={`/schedule/${loc.id}`}>{loc.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Location {
  id: number;
  name: string;
}

const HomePage = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/locations")
      .then((res) => setLocations(res.data))
      .catch((err) => console.error("Failed to fetch locations", err));
  }, []);

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    margin: '40px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ textAlign: 'center' }}>Select a Location</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {locations.map((loc) => (
          <li key={loc.id} style={{ marginBottom: '10px', textAlign: 'center' }}>
            <Link to={`/schedule/${loc.id}`} style={{ textDecoration: 'none', color: '#007BFF' }}>
              {loc.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
