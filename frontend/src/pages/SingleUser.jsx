import React from "react";
import {useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import User from "../components/User";
import api from "../services/apiService";

const SingleUser = ()=>{
      const [user,setUser] = useState(null);
      const { id } = useParams(); 

      async function fetchUser(){
        try{
           const res = await api.get(`/user/${id}`);
           setUser(res.data);
        }
        catch(e){
             console.log(e);
        }
      }

      useEffect(()=>{
         fetchUser();
      },[id]);

      return (
        <div>
            <User user={user}/>
        </div>
      )
}
export default SingleUser;