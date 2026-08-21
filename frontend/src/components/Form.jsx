import React from "react";
import { useState,useEffect } from "react";
import api from "../services/apiService";
import { useNavigate,useLocation } from "react-router-dom";


const Form = () => {
    const state = [
        "Andhra Pradesh",
        "Delhi",
        "Tamil Nadu",
        "Karnataka",
        "Maharashtra",
        "Madhya Pradesh",
        "Uttar Pradesh",
        "Utrakhand",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Other"
    ]

    const skillsData = [
        "Java","Python","JavaScript","ReactJs","NodeJs","Django","Spring Boot","MySQL","PostgreSQL",
        "MongoDB","Git","AWS","Docker","REST APIs","OOPs","DSA"
    ]

    const initialFormData = {
               name : "",
               fatherName: "",
               email: "",
               phoneNo : "",
               nationality : "Indian",
               qualification : "",
               dob : "",
               gender : "Male",
               address : "",
               city : "",
               state : "",
               pincode : "",
               skills : [],
               password : "",
               confirmPassword : ""
            }
    const [formData,setFormData] = useState(initialFormData);
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user;

    useEffect(()=>{
         if(user){
            setFormData({
               name :user.name || "",
               fatherName:user.fatherName || "",
               email: user.email || "",
               phoneNo : user.phoneNo || "",
               nationality : user.nationality || "Indian",
               qualification : user.qualification || "",
               dob : user.dob || "",
               gender : user.gender || "",
               address : user.address || "",
               city : user.city || "",
               state : user.state || "",
               pincode : user.pincode || "",
               skills : user.skills || [],
               password : "",
               confirmPassword : ""
            })
         }
    },[user]);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
            ...prev,
            skills: checked
                ? [...prev.skills, value]
                : prev.skills.filter((skill) => skill !== value),
            }));
        } else {
            setFormData((prev) => ({
            ...prev,
            [name]: value,
            }));
        }
        };

      async function handleSubmit(event){
         event.preventDefault();
         try{
            if(formData.password!==formData.confirmPassword){
               throw new Error("Password not matching");
            }
            const { confirmPassword, ...userData } = formData;
            console.log(userData);

            if(user){
               await api.put(`/user/${user.id}`,userData);
            }
            else{
                await api.post("/users/create",userData);
                setFormData(initialFormData)
            }
            navigate("/");
         }
         catch(e){
             console.error('Error submitting application:', e);
             console.log(e);
         }
      }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}
            className="flex flex-col bg-indigo-300  rounded-2xl shadow-2xl p-8 w-full max-w-2xl ">
             <div className="m-2">
                 <label htmlFor="name">
                    <p className="text-bold">Name :</p>
                </label>
                <input
                   type="text"
                   placeholder=" Enter your name"
                   required
                   id = "name"
                   name = "name"
                   value = {formData.name}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2">
                 <label htmlFor="fatherName">
                    <p className="text-bold">Father's Name :</p>
                </label>
                <input
                   type="text"
                   placeholder=" Enter Father's name"
                   required
                   id = "fatherName"
                   name = "fatherName"
                   value = {formData.fatherName}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2">
                <label htmlFor="email">
                     <p>Email:</p>
                </label>
                <input
                   type="email"
                   placeholder=" Enter your Email"
                   required
                   id = "email"
                   name = "email"
                   value = {formData.email}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />

             </div>
             <div className="m-2">
                <label htmlFor="phoneNo">
                    <p>Phone Number:</p>
                </label>
                <input
                   type="text"
                   id = "phoneNo"
                   required
                   name = "phoneNo"
                   value = {formData.phoneNo}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2">
                <label htmlFor="qualification">
                     <p>Highest Qualification:</p>
                </label>
                <input
                   type="text"
                   id = "qualification"
                   name = "qualification"
                   required
                   value = {formData.qualification}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2 flex gap-5">
                 <label htmlFor="checkbox"><p>Skills: </p></label>
                 <br/>
                <div className="flex flex-wrap gap-3">
                    {skillsData.map((skill,index)=>(
                        <label key={index}>
                       <input
                        type = "checkbox"
                        id="checkbox"
                        name = "checkbox"
                        value = {skill}
                        checked = {formData.skills.includes(skill)}
                        onChange = {handleChange}
                        className = "border border-black mt-2 rounded-lg"
                       />
                       <p className="mt-2">{skill}</p>
                    </label>
                    ))
                    }
                </div>
             </div>
             <div className="m-2">
                <label htmlFor="dob">
                     <p>Date of Birth:</p>
                </label>
                <input
                   type="date"
                   id = "dob"
                   name = "dob"
                   required
                   value = {formData.dob}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2">
                <label htmlFor="gender">
                    <p>Gender: </p>
                </label>
                <select
                    id = "gender"
                    name = "gender"
                    value = {formData.gender}
                    onChange={handleChange}
                    className = "border border-black mt-2 rounded-lg"
                >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
             </div>
             <p className="m-2">Nationality:</p>
             <div className="flex gap-2 m-2">
                <label>
                    <input
                   type="radio"
                   id = "Indian"
                   name = "nationality"
                   value = "INDIAN"
                   checked={formData.nationality === "INDIAN"}
                   onChange={handleChange}
                   className="text-black font-bold"
                />
                  Indian
                </label>

                <label>
                    <input
                   type="radio"
                   id = "other"
                   name = "nationality"
                   value = "OTHER"
                   checked={formData.nationality === "OTHER"}
                   onChange={handleChange}
                   className="text-black font-bold"
                />
                  Other
                </label>
             </div>
             <div className="m-2">
                <label htmlFor="address">
                    <p>Address </p>
                </label>
                <textarea
                   id = "address"
                   name = "address"
                   required
                   value = {formData.address}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2">
                <label htmlFor="city">
                    <p>City</p>
                </label>
                <input
                   type = "text"
                   id = "city"
                   name = "city"
                   required
                   value = {formData.city}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="m-2">
                <label htmlFor="state">
                    <p>State </p>
                </label>
                <select
                   id = "state"
                   name = "state"
                   required
                   value = {formData.state}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                >
                   {
                    state.map((st,index)=>(
                                <option value={st} key={index}>{st}</option>
                    ))
                   }
                </select>
             </div>
             <div className="m-2">
                <label htmlFor="pincode">
                    <p>Pincode</p>
                </label>
                <input
                  type="text"
                  id = "pincode"
                  name = "pincode"
                  required
                  value = {formData.pincode}
                  onChange={handleChange}
                  className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <div className="flex gap-5 m-2">
                 <label htmlFor="password">
                     <p>Password: </p>
                 </label>
                 <input
                   type="password"
                   id="password"
                   name = "password"
                   required
                   value = {formData.password}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />

                <label htmlFor="confirmPassword">
                     <p>Confirm Password: </p>
                 </label>
                 <input
                   type="password"
                   id="confirmPassword"
                   name = "confirmPassword"
                   required
                   value = {formData.confirmPassword}
                   onChange={handleChange}
                   className = "border border-black mt-2 rounded-lg"
                />
             </div>
             <button 
               type="submit"
               className="border border-black w-10 m-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-900 rounded-lg">
                  Save
            </button>
            
            </form>
        </div>
    )
}

export default Form;