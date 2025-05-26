// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// interface Location {
//   id: number;
//   name: string;
//   permitExpiry: string; // YYYY-MM-DD
//   permitStatus: string;
// }

// const PermitTracker = () => {
//   const [expiring, setExpiring] = useState<Location[]>([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/locations/permits/expiring')
//       .then(res => setExpiring(res.data))
//       .catch(err => console.error('Permit tracking failed', err));
//   }, []);

//   const getPermitColor = (expiry: string) => {
//     const today = new Date();
//     const expiryDate = new Date(expiry);
//     const diffInDays = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

//     if (diffInDays < 0) return 'red'; // Already expired
//     if (diffInDays <= 7) return 'orange'; // Expiring soon
//     return 'green'; // Safe
//   };

//   return (
//     <div>
//       <h2>Permit Alerts</h2>
//       {expiring.length === 0 ? (
//         <p>All permits are valid.</p>
//       ) : (
//         <ul>
//           {expiring.map(loc => (
//             <li key={loc.id} style={{ color: getPermitColor(loc.permitExpiry), marginBottom: '8px' }}>
//               <strong>{loc.name}</strong> — 
//               Permit Status: {loc.permitStatus} — 
//               Expiry: {loc.permitExpiry}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PermitTracker;


import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

interface Location {
  id: number;
  name: string;
  permitExpiry: string;
  permitStatus: string;
}

const getPermitColor = (expiry: string): string => {
  const today = new Date();
  const expiryDate = new Date(expiry);
  const diff = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

  if (diff <= 30) return 'Red';
  if (diff <= 90) return 'Orange';
  return 'Green';
};

const permitPriority: { [key: string]: number } = {
  Red: 1,
  Orange: 2,
  Green: 3
};

const PermitTracker: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    axios
      .get('http://localhost:8080/api/locations')
      .then((res) => setLocations(res.data))
      .catch((err) => console.error('Failed to fetch locations', err));
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/api/locations/${id}`)
      .then(() => {
        alert('Location deleted');
        fetchLocations();
      })
      .catch(() => alert('Failed to delete location'));
  };

  const sortedLocations = [...locations].sort(
    (a, b) =>
      permitPriority[getPermitColor(a.permitExpiry)] -
      permitPriority[getPermitColor(b.permitExpiry)]
  );

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '40px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Permit Tracker</h2>
      {sortedLocations.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No locations available.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sortedLocations.map((loc) => (
            <li
              key={loc.id}
              style={{
                marginBottom: '12px',
                padding: '10px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <strong>{loc.name}</strong>
              <span>Permit Status: <strong>{loc.permitStatus}</strong></span>
              <span>
                Expiry: <strong>{loc.permitExpiry}</strong> — 
                <span style={{ color: getPermitColor(loc.permitExpiry), marginLeft: '6px' }}>
                  {getPermitColor(loc.permitExpiry)}
                </span>
              </span>
              <button
                onClick={() => handleDelete(loc.id)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PermitTracker;
