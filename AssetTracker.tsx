// import React, {useEffect,useState} from 'react';
// import axios from 'axios';

// interface Asset{
//     id: number;
//     name: string;
//     type: string;
//     status: string;
//     assignToScene: string;
//     barcode: string;
//     shootingDay: string;
//     maintenanceSchedule: string;
// }

// const AssetTracker:React.FC=()=>{
//     const [assets,setAssets]=useState<Asset[]>([]);
//     const [formData,setFormData]=useState<Partial<Asset>>({});
//     useEffect(()=>{
//         fetchAssets();
//     },[]);

//     const fetchAssets=()=>{
//         axios.get('http://localhost:8080/api/assets')
//         .then(res=>setAssets(res.data))
//         .catch(err=>console.error(err));
//     };

//     const handleChange=(e:
//         React.ChangeEvent<HTMLInputElement>)=>{
//             const {name,value}=e.target;
//             setFormData(prev=>({...prev,[name]:value}));
//     };

//     const handleSubmit=(e:
//         React.FormEvent)=>{
//             e.preventDefault();
//             axios.post('http://localhost:8080/api/assets', formData)
//             .then(()=>{
//                 fetchAssets();
//                 setFormData({});
//             });
//         };
    
//     const handleDelete =(id:number)=>{
//         const confirmDelete=window.confirm("Are you sure you want to delete this asset?");
//         if(confirmDelete){
//             axios.delete(`http://localhost:8080/api/assets/${id}`)
//             .then(()=>{
//                 alert("Deleted!");
//                 fetchAssets();
//             })
//         .catch(()=>alert('Failed to delete asset'));
//         }
//     };

//     return(
//         <div>
//             <h2>Asset Tracker</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name="name" placeholder="Name" onChange={handleChange} required/>
//                 <input name="type" placeholder="Type" onChange={handleChange} required/>
//                 <input name="status" placeholder="Status" onChange={handleChange} required/>
//                 <input name="assignedToScene" placeholder="Assigned Scene" onChange={handleChange} required/>
//                 <input name="barcode" placeholder="Barcode" onChange={handleChange} required/>
//                 <input type="date" name="shootingDay" placeholder="Shooting Day" onChange={handleChange} required/>
//                 <input type="date" name="maintenanceSchedule" onChange={handleChange} required/>
//                 <button type="submit">Add Asset</button>
//             </form>
//             <ul>
//                 {assets.map(asset=>(
//                     <li key={asset.id}>
//                         {asset.name}-{asset.status}-{asset.assignToScene}-{asset.shootingDay}
//                         <button onClick={()=> handleDelete(asset.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// export default AssetTracker;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
//npm install react-qr-barcode-scanner
interface Asset {
    id: number;
    name: string;
    type: string;
    status: string;
    assignedToScene: string;
    barcode: string;
    shootingDay: string;
    maintenanceSchedule: string;
}

const AssetTracker: React.FC = () => {
    const [assets, setAssets] = useState<Asset[]>([]);
    // const [editinAsset,setEditingAsset]=useState(null);
    const [formData, setFormData] = useState<Partial<Asset>>({});
    const[isEditing,setIsEditing]=useState(false);
    const[editId,setEditId]=useState<number|null>(null);
    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = () => {
        axios.get('http://localhost:8080/api/assets')
            .then(res => setAssets(res.data))
            .catch(err => console.error(err));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8080/api/assets', formData)
    //         .then(() => {
    //             fetchAssets();
    //             setFormData({});
    //         });
    // };

    const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if(isEditing && editId!==null){
                axios.put(`http://localhost:8080/api/assets/${editId}`,formData)
                .then(()=>{
                    fetchAssets();
                    setFormData({});
                    setIsEditing(false);
                    setEditId(null);
                });
            } else{
                axios.post('http://localhost:8080/api/assets',formData)
                .then(()=>{
                    fetchAssets();
                    setFormData({});
                });
            }
    };

    const handleToggleStatus=(id:number)=>{
        axios.put(`http://localhost:8080/api/assets/${id}/toggle-status`)
        .then(()=>fetchAssets())
        .catch(err=>console.error(err));
    };

    const handleEdit=(asset:Asset)=>{
        setFormData(asset);
        setIsEditing(true);
        setEditId(asset.id);
    };

    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this asset?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8080/api/assets/${id}`)
                .then(() => {
                    alert("Deleted!");
                    fetchAssets();
                })
                .catch(() => alert('Failed to delete asset'));
        }
    };

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
            {/* Form Box */}
            <div style={{
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '8px',
                width: '300px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                backgroundColor: '#f5f5f5'
            }}>
                <h2>Add New Asset</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input name="name" placeholder="Name" onChange={handleChange} required />
                    <input name="type" placeholder="props/costumes/equipment" onChange={handleChange} required />
                    <input name="status" placeholder="Status(Checked In/Checked Out)" onChange={handleChange} required />
                    <input name="assignedToScene" placeholder="Assigned Scene" onChange={handleChange} required />
                    <input name="barcode" placeholder="Barcode" onChange={handleChange} required />
                    ShootingDay<input type="date" name="shootingDay" onChange={handleChange} required />
                    Schedule Maintenance<input type="date" name="maintenanceSchedule" onChange={handleChange} required />
                    <button type="submit">{isEditing?'Update Asset':'Add Asset'}</button>
                </form>
            </div>

            {/* Asset List Box */}
            <div style={{
                flexGrow: 1,
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                backgroundColor: '#fafafa'
            }}>
                <h2>Asset List</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {assets.map(asset => (
                        <li key={asset.id} style={{
                            backgroundColor: '#f0f8ff', // Light blue background
                            padding: '10px',
                            marginBottom: '10px',
                            border: '1px solid #eee',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <strong>{asset.name}</strong><br />
                                Type: {asset.type}<br />
                                Status: {asset.status}<br />
                                Scene: {asset.assignedToScene}<br />
                                Shooting Day: {asset.shootingDay}
                            </div>
                            {/* <button onClick={() => handleEdit(asset)}>Edit</button>
                            <button onClick={() => handleDelete(asset.id)}>Delete</button> */}
                            <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={() => handleToggleStatus(asset.id)}>{asset.status==="Checked In"?"Check Out":"Check In"}</button>
                            <button onClick={() => handleEdit(asset)}>Edit</button>
                            <button onClick={() => handleDelete(asset.id)}>Delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AssetTracker;
