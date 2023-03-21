import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams , Navigate} from 'react-router-dom'

export default function Edit() {
    const {id} = useParams();
    const [data, setData] = useState([])
    console.log(id)
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/account/get-single/" + id).then(response=> {
            console.log(response.data)
            setData(response.data.data)
            

        }).catch(error => {
            console.log("error")
            
        })
    }, [])

   function subnmitHandler(event){
    event.preventDefault()
    axios.patch("http://127.0.0.1:8000/account/get-single/"+id, data).then(res => {
        alert("data update succefully")
        
    })
    
   }
  return (
    <div>
      <form onSubmit={subnmitHandler}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" onChange={e => setData({...data , username : e.target.value})} name="name" value={data.username} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  name='password' id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div className="mt-2">
  <button type="submit" className="btn btn-primary">Submit</button>
  {/* <Link to= "/show-users" className="btn btn-danger mx-2">Users</Link> */}
  </div>
</form>
    </div>
  )
}
