import React from 'react'

export default function PostEvent() {
  return (
    <div> <div className="container">
    <div className="row">
        <div className="col-sm-6 mx-auto">
          <h1 class="text-center">Post Event</h1>
        <form>
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
<label for="exampleInputEmail1">Image</label>
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

</div>
</form>
   
        </div>
    </div>
</div></div>
  )
}
