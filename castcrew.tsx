import React, { FormEvent, useState } from "react";
import './Login.css';
import { useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateName, validatePassword } from "../Validators/validation";

const URL: string = "http://localhost:3000/castcrew";

type Member={
    Name:string;
    Role:string;
    Image:string;
}



const CastCrew: React.FC = () => {
    
    const[Members,setMembers]=useState<Member[]>([]);
    const[Name,setName]=useState("");
    const[Role,setRole]=useState("");
    const[Image,setImage]=useState("");
    const[formValid,setFormValid]=useState("");
    const[successMessage,setSuccesMessage]=useState("");
    const[errorMessage,setErrorMessage]=useState("");
    const [errors,setErrors]=useState({
        Name:"",
        role:"",
        image:"",
    })
    type Messages={
        MANDATORY: string
    }
   const[mandatory,setMandatory]=useState(false)
   const handleSubmit=(e:React.FormEvent):void=>
   {
    e.preventDefault()
    if(errors.Name==""||errors.image==""||errors.role=="")
    {
        setMandatory(true)
    }
    else{
        setMandatory(false)
        axios.post(URL,Members)
        .then((response)=>
        {
            setSuccesMessage("Cast Member is added Successfully")
            setErrorMessage("")

        })
        .catch((errors)=>
        {
            setErrorMessage("All the fields are Mandatory")
            setSuccesMessage("");
        })
    }
   }
 

  
    const handleAddMember=()=>{
        const newErrors={
            Name:Name.trim()?'':'Name is required',
            role:   Role.trim()?'':'Role is required',
            image:Image.trim()?'':'Image URL is required'

        }
        setErrors(newErrors);
        if(newErrors.Name||newErrors.role || newErrors.image )
            return;
        const newMember:Member={Name,Role,Image};
        setMembers([...Members,newMember]);
        setName("");
        setRole("");
        setImage("");
        setErrors({Name:'',role:'',image:''})
    }
      
      
    return (
        <div className="container">
            <div className="right-panel">
                <div className="login-box">
                    <h2 style={{textAlign:'center'}}>
                      
                        Cast And Crew
                    </h2>
                    
                        <div className="form-group">
                            <label htmlFor="name" className="form-label" >Add Cast or Crew Member</label>
                            <input
                                data-testid="name"
                                placeholder="Enter your Name"
                                id="name"
                                value={Name}
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={(e)=>setName(e.target.value)}
                                style={{margin:'5px',padding:'8px'}}
                            />
                            {errors.Name? (<span className="text-danger">{errors.Name}</span>):("")}
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="role" className="form-label">Role</label>
                            <input
                                data-testid="name"
                                placeholder="Enter the role"
                                id="role"
                                value={Role}
                                name="role"
                                className="form-control"
                                type="text"
                                onChange={(e)=>setRole(e.target.value)}
                                style={{margin:'5px',padding:'8px'}}
                            />
                               {errors.Name? (<span className="text-danger">{errors.role}</span>):("")}
                        </div>
                        <div className="form-group">
                            <label htmlFor="image" className="form-label">Add the signed document url</label>
                            <input
                                data-testid="image"
                                placeholder="Enter the document url"
                                id="image"
                                type="text"
                                name="image"
                                className="form-control"
                                value={Image}
                                onChange={(e)=>setImage(e.target.value)}
                                 style={{margin:'5px',padding:'8px'}}
                            />
                            
                            {errors.Name? (<span className="text-danger">{errors.image}</span>):("")}
                        </div>
                        <br/>
                        <button onClick={handleAddMember} style={{padding:'8px 12px',backgroundColor:'#007bff',color:'white',border:'none',borderRadius:'5px',cursor:'pointer',alignSelf:'center',height:'42px',marginLeft:'10px'}}>Add Member</button>
                        {mandatory?(<div className="text-danger" id="mandatory">{errorMessage}</div>):("")}
                        <div className="text-success">{successMessage}</div>
                        <div className="text-danger">{errorMessage}</div>     
                        <div style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap'}}>
                            {Members.map((member,index)=>(
                                <div key={index}
                                     style={{
                                        border:'1px solid #ccc',
                                        borderRadius:'10px',
                                        backgroundColor:'#f9f9f9',
                                        padding:'10px',
                                        textAlign:'center',
                                        width:'150px',
                                     }}
                                >
                              {/* <img 
                              src={member.Image}
                              alt={member.Name}
                              style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                              <h4>{member.Name}</h4>
                              <p>{member.Role}</p> */}
                              </div>
                        ))}
                        </div>
                        </div>
                      
                   
                </div>
            </div>
       
    );
};
export default CastCrew;