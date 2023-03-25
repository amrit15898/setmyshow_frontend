import React  from 'react'
import axios from 'axios'


import { Link } from 'react-router-dom'
export default function Singup() {
  const submitHandler = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    console.log(username)
    const email = event.target.email.value;
   
    const contact = event.target.contact.value;
    const password = event.target.password.value;
    console.log(username)
    console.log(password)
    console.log(contact)
 
    axios.post("http://192.168.1.2:8000/account/get-users",{
      username,email, contact,  password
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
    <label for="exampleInputEmail1">About You/Band</label>
    <div class="form-group">
   
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Choose</label>
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
    <option selected>Artist Type</option>
    <option>Vocal artist</option>
      <option>Guitarist</option>
      <option>Drummer</option>
      <option>Purcussionist</option>
      <option>Tabla Player</option>
      <option>Dhol/Dholak</option>
      <option>Violin artist</option>
      <option>Flute artist</option>
      <option>Cazon player</option>
      <option>Harmonium player</option>
</select>
    
  </div>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Profile</label>
    <input type="file" class="form-control" name="photo" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
  
  </div>
 
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="text" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Contact Number</label>
    <input type="text" class="form-control" name="contact" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
  
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
