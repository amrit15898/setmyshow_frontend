import React  from 'react'
import axios from 'axios'


import { Link } from 'react-router-dom'
export default function Singup() {
  const submitHandler = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    console.log(username)

    const password = event.target.password.value;
    console.log(password)
    axios.post("http://127.0.0.1:8000/account/get-users",{
      username, password
    }).then((response) => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

  }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                  <h1 class="text-center">Artist/band</h1>
                <form onSubmit={submitHandler}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name='password' id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="mt-2">
  <button type="submit" class="btn btn-primary">Submit</button>
  <Link to= "/show-users" class="btn btn-danger mx-2">Users</Link>
  </div>
</form>
           
                </div>
            </div>
        </div>
    </div>
  )
}
