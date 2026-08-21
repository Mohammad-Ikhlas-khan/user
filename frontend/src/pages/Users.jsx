import React,{useState,useEffect} from  'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/apiService';
import { IoChevronForwardSharp,IoChevronBackSharp } from "react-icons/io5";

const Users = ({users,setUsers}) => {

     const navigate = useNavigate();
     const [currentPage,setCurrentPage] = useState(1);
     const usersPerPage = 5;
     const totalPages = Math.ceil(users.length/usersPerPage);

     let firstUserIndex = usersPerPage*currentPage - usersPerPage; 
     let lastUserIndex = usersPerPage*currentPage;



     function addUser(){
           navigate("/create");
     }

     async function fetchUsers(){
        try{
           const res = await api.get("/users")
           const data = res.data;
           setUsers(data);
        }
        catch(e){
           console.log(e);
        }
     }
     useEffect(()=>{
        fetchUsers();
     },[]);

     function  calculateAge(dob){
        let birthDate = new Date(dob);
        let today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();

        if(month<0 || (month===0 && today.getDate()<birthDate.getDate())) age--;
        return age;
     }

     const handleUpdate= (user)=>{
        try{
             navigate("/create",{state:{user}});
        }
        catch(e){
            console.log(e);
        }
     }

     const handleDelete= async (id)=>{
        try{
            await api.delete(`user/${id}`)
            fetchUsers();
        }
        catch(e){
            console.log(e);
        }
     }

     return (
        <div className='flex flex-col'>
            <div>
                <button onClick={addUser}
                className='border border-black cursor-pointer p-2 bg-blue-500 hover:bg-blue-900 rounded-lg'>
                     Add User
                </button>
            </div>
            {users?.length>0 ? <div className='flex flex-col'>
                {users.slice(firstUserIndex,lastUserIndex).map((user) => (
                    <div key={user.id} className="border p-4 m-2 bg-gray-300">
                       <div className='flex flex-col gap-2'>
                           <a href={`user/${user.id}`} className='font-bold'>{user.name}</a>
                           <div className='flex gap-2'>
                              <span className='font-light'>Age : {calculateAge(user.dob)}</span>
                              <p className='font-light'>Gender : {user.gender}</p>
                           </div>
                       </div>
                          <div className='flex flex-row-reverse '>
                               <button onClick={()=>handleUpdate(user)}
                                 className="border border-black m-4 p-1 rounded-lg bg-blue-400 hover:bg-blue-600 cursor-pointer">
                                 Update
                                </button>
                               <button onClick={()=>handleDelete(user.id)}
                               className='border border-black m-4 p-1 rounded-lg bg-red-500 hover:bg-red-800 cursor-pointer'>
                               Delete
                               </button>    
                          </div>
                    </div>
                ))}
                <div className='flex justify-center items-center m-2 text-white'>
                    <button 
                        disabled = {currentPage===1}
                        onClick={()=>setCurrentPage(currentPage-1)}
                        className="disabled:opacity-50">
                              <IoChevronBackSharp/>
                        </button>
                        <div>
                            {currentPage}/{totalPages}
                        </div>
                        <button 
                           disabled = {currentPage===totalPages}
                           onClick={()=>setCurrentPage(currentPage+1)}
                            className="disabled:opacity-50">
                              <IoChevronForwardSharp/>
                        </button>
                </div>
            </div>
            :
            <div>
                No user Found
            </div>
            }
        </div>
     )
}

export default Users;