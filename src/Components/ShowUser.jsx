// x
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {DataContext} from './FrontPage';
import { Link } from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';

export default function ShowUser() {
  const [data, setData] = useState([])
  const name = useContext(DataContext)
  console.log("name==> " , name)
  useEffect(() => {
    const token = localStorage.getItem('token')

    axios.get("http://127.0.0.1:8000/account/get-users",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log(response.data.data)
      setData(response.data.data)


    }).catch(error => {
      console.log("error")

    })
  }, [])
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
  },[])

  return (
    <div className='container'>
      <h1>{name} Singh</h1>
      <h2>my name is {a.state.name}</h2>
      
     <div className="row">
      <div className="col-md-6 mx-auto">
      <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Action's</th>
    </tr>
  </thead>
  <tbody>
 
    {data.map((user, i) => {
      const { id, username } = user;
            return <>
              <tr key={i}>
              
                <td>{username}</td>
                <td><Link to={`/edit/${id}`} className='btn btn-success mr-2'>Update</Link>
                  <button onClick={e => submitHandler(id)} className="btn btn-danger mx-2">Delete</button></td>


              </tr>

            </>
          })}
  
  </tbody>
</table>
      </div>
     </div>
    </div>
  );
  function submitHandler(id) {
    const conf = window.confirm("Do you want delete")
    if (conf) {
      axios.delete("http://127.0.0.1:8000/account/get-single/" + id).then(res => {
        alert("record deleted")

      }).catch(err => console.log(err))
    }
  }
}
