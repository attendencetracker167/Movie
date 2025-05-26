// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const LocationForm = ({ onLocationAdded }: { onLocationAdded: () => void }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     contactInfo: '',
//     cost: 0,
//     permitStatus: '',
//     isAvailable: true,
//     photoUrl: '',
//     latitude: 0,
//     longitude: 0,
//     permitExpiry: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const target=e.target as HTMLInputElement;
//     const { name, value, type, checked } = target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/api/locations', formData);
//       onLocationAdded(); // refresh list
//       setFormData({
//         name: '',
//         address: '',
//         contactInfo: '',
//         cost: 0,
//         permitStatus: '',
//         isAvailable: true,
//         photoUrl: '',
//         latitude: 0,
//         longitude: 0,
//         permitExpiry: ''
//       });
//     } catch (error) {
//       console.error('Failed to add location:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add New Location</h2>
//       <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
//       <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required /><br />
//       <input name="contactInfo" placeholder="Contact Info" value={formData.contactInfo} onChange={handleChange} /><br />
//       <input name="cost" type="number" placeholder="Cost" value={formData.cost} onChange={handleChange} /><br />
//       <input name="permitStatus" placeholder="Permit Status" value={formData.permitStatus} onChange={handleChange} /><br />
//       <label>
//         Available:
//         <input name="isAvailable" type="checkbox" checked={formData.isAvailable} onChange={handleChange} />
//       </label><br />
//       <input name="photoUrl" placeholder="Photo URL" value={formData.photoUrl} onChange={handleChange} /><br />
//       <input name="latitude" type="number" placeholder="Latitude" value={formData.latitude} onChange={handleChange} /><br />
//       <input name="longitude" type="number" placeholder="Longitude" value={formData.longitude} onChange={handleChange} /><br />
//       <input name="permitExpiry" type="date" value={formData.permitExpiry} onChange={handleChange} /><br />
//       <button type="submit">Add Location</button>
//     </form>
//   );
// };

// export default LocationForm;



import React, { useState } from 'react';
import axios from 'axios';

const LocationForm = ({ onLocationAdded }: { onLocationAdded: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactInfo: '',
    cost: 0,
    permitStatus: '',
    isAvailable: true,
    photoUrl: '',
    latitude: 0,
    longitude: 0,
    permitExpiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/locations', formData);
      onLocationAdded();
      setFormData({
        name: '',
        address: '',
        contactInfo: '',
        cost: 0,
        permitStatus: '',
        isAvailable: true,
        photoUrl: '',
        latitude: 0,
        longitude: 0,
        permitExpiry: ''
      });
    } catch (error) {
      console.error('Failed to add location:', error);
    }
  };

  return (
 <div className="container mt-4">
  <div className="card mx-auto shadow" style={{ maxWidth: '700px' }}>
    <div className="card-body">
      <h2 className="card-title text-center mb-4">Add New Location</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder='Enter the location' required />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input name="address" className="form-control" value={formData.address} onChange={handleChange} placeholder='Enter the address' required />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Info</label>
          <input name="contactInfo" className="form-control" placeholder='Enter the contact number' value={formData.contactInfo} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Cost</label>
          <input name="cost" type="number" className="form-control" placeholder='Enter the cost' value={formData.cost} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Permit Status</label>
          <input name="permitStatus" className="form-control" placeholder='enter your permit status' value={formData.permitStatus} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Available</label>
        {/* <div className="mb-3 d-flex align-items-center justify-content-between border rounded px-3 py-2 bg-light"> */}
          {/* <span className="text-dark fw-medium">Available</span> */}
          {/* <div className="form-check form-switch m-0"> */}
            <input
              name="isAvailable"
              type="checkbox"
              className="form-check-input"
              checked={formData.isAvailable}
              onChange={handleChange}
              id="isAvailableCheck"
            />
          {/* </div> */}
        </div>
        {/* </div> */}

        <div className="mb-3">
          <label className="form-label">Photo URL</label>
          <input type="file" accept='image/*'  name="photoUrl" className="form-control" placeholder='photo url' value={formData.photoUrl} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Latitude</label>
          <input name="latitude" type="number" className="form-control" value={formData.latitude} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Longitude</label>
          <input name="longitude" type="number" className="form-control" value={formData.longitude} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Permit Expiry</label>
          <input name="permitExpiry" type="date" className="form-control" value={formData.permitExpiry} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Location
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default LocationForm;

