import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function LoginPage() {
    const submitHandler = (event) => {
        event.preventDefault();
        const username = event.target.name.value
        const password = event.target.password.value
        axios.post("http://192.168.1.10:8000/api/token/" , { username, password}).then(response => {
            console.log(response.data.access)
            // setToken(response.data.access)
            localStorage.setItem("token", response.data.access)
        }).then(error => {
            console.log(error)
        })
    }
  return (
    <div><div class="container">
    <div class="row">
        <form onSubmit={submitHandler}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
             
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
</div></div>
  )
}
