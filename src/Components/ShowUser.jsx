// x
import React , { useEffect, useState } from 'react';
import axios from 'axios';
export default function ShowUser() {
    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get("http://192.168.1.2:8000/account/get-users").then(response=> {
            console.log(response.data.data)
            setData(response.data.data)
            

        }).catch(error => {
            console.log("error")
            
        })
    }, [])
  return (
    <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
     
    </tr>
  </thead>
     
        {data.map((user) => {
            const {id, username} = user;
            return <div>
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{username}</td>
    
    </tr>
   
  </tbody>
            </div>
        })}
        </table>
    </div>
  )
}
