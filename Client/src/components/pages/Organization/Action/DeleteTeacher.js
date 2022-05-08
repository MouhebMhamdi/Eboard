import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { deleteReclamation, deleteStudent } from '../../../../utils/api';
function DeleteTeachers() {
    const history=useHistory();
    const { id } = useParams()
    useEffect(()=>{
        axios.delete(deleteStudent+id,{
            headers: {
                'Authorization':`Bearer ${JSON.parse(localStorage.getItem("login")).AccessToken}`
            }
        }).then((message)  => {
            console.log('deleted');
        })
        .catch((err)=> {
            console.log(err);
        })
    
        
        history.push("/Organization");
    },[])
  return (
    <div>DeleteTeacher</div>
  )
}

export default DeleteTeachers