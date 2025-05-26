import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationForm from './LocationForm';
import { useNavigate } from 'react-router-dom';



interface Location {
  id:number;
  name:string;
  address: string;
  contactInfo: string;
  cost: number;
  permitStatus: string;
  isAvailable: boolean;
  photoUrl: string;
  latitude: number;
  longitude:number;
  permitExpiry: string;
}

const LocationList:React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  
  
  const loadLocations= async()=>{
    try{
      const res=await
      axios.get('http://localhost:8080/api/locations');
      setLocations(res.data);
    }catch(error){
        console.error('Failed to load Locations:',error);
    }
  };

  const handleDelete=async (id: number) => {
    try{
        await
        axios.delete(`http://localhost:8080/api/locations/${id}`);
        loadLocations();
    } catch(error){
        console.error('Delete failed;',error);
    }
  };

  useEffect(()=>{
    loadLocations();
  },[]);

  const navigate = useNavigate(); 

  return (
    <div style={{color:"white"}}>
      <h2 style={{color:"white"}}>Filming Locations</h2>
      {/* <LocationForm onLocationAdded={loadLocations}/> */}
      <ul>
      <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px', // space between cards
    padding: '20px'
  }}>
        {locations.map(loc => (
            <li key={loc.id} style={{ marginBottom: '20px' }}>
            <div style={{
              border: '1px solid #ccc',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#2c2c2c',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              width: '300px',
              color: 'white'
            }}>
            <img src={loc.photoUrl} alt={loc.name} width="200" height="150"></img><br/>
            <strong>{loc.name}</strong><br/>
            Address: {loc.address}<br/>
            Contact: {loc.contactInfo}<br/>
            Cost: ${loc.cost}<br/>
            Permit Status:{loc.permitStatus}<br/>
            Permit Expiry: {loc.permitExpiry}<br/>
            Available: {loc.isAvailable?'Yes':'No'}<br/>
            Coordinates:({loc.latitude},{loc.longitude})<br/>
            <button onClick={()=>handleDelete(loc.id)}>Delete</button><hr/>
            </div>
          </li>
        ))}
        </div>
      </ul>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/locationForm')}>Add Location</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/permittracker')}>PermitTracker</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/homePage')}>Schedule Form</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/costs')}>LocationCostTracker</button>
      </div>
      <br></br>
      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.378979602845!2d76.59899197417059!3d12.35752738790424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a366d8a9b3f%3A0x13d75d1eda9aa3c2!2s2%2C%20Infosys%20Rd%2C%20Meenakunte%2C%20Hebbal%20Industrial%20Estate%2C%20Hebbal%20Industrial%20Area%2C%20Mysuru%2C%20Karnataka%20570018!5e0!3m2!1sen!2sin!4v1747723327468!5m2!1sen!2sin" width="600" height="450" 
       loading="lazy" style={{alignContent:"flex-start"}}></iframe>
       </section>
    </div>
  );
};

export default LocationList;

