import React from 'react'

export default function Profile() {
    const paracss = {
        float: "left"
    }
    const img_style = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        padding: "10px"
    };
    return (
        <div>
            <div class="container d-flex justify-content-center mt-5">
                <div class="card p-3 py-4">
                    <div class="text-center">
                        <img src="https://i.imgur.com/stD0Q19.jpg" width="100" class="rounded-circle" />
                        <h3 class="mt-2">Amritpal Singh</h3>
                        <span class="mt-1 clearfix">Python Developer</span>

                        <div class="row mt-3 mb-3">

                            <div class="col-md-4 mx-auto">
                                <h5>From</h5>
                                <span class="num"> Majatri Punjab</span>
                            </div>
                            <div class="mx-auto">
                                <button class="btn btn-primary btn-sm m-3">Add Friend</button>
                                <button class="btn btn-success btn-sm">Message</button>
                            </div>

                            <small class="mt-4">About <br /> My name is amritpal singh i am 24 years old i am software eng.</small>

                        </div>




                    </div>
                </div>
            </div>
            <hr />
            <div class="container d-flex justify-content-center mt-5">
            <div class="card" >
                <p class="card-title" style={{padding: "0px"}}><img src="https://static.toiimg.com/thumb/msid-91992705,imgsize-35398,width-400,resizemode-4/91992705.jpg" alt="" style={img_style}/><b>Sunny Singh</b></p>
                <p style={{paddingLeft: "15px"}}>Today Performance</p>
                <img class="card-img-top" src="https://static.toiimg.com/thumb/msid-91992705,imgsize-35398,width-400,resizemode-4/91992705.jpg" style={{height: "400px",  padding: "0px"}} alt="Card image cap" />
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div class="container d-flex justify-content-center mt-5">
            <div class="card" >
                <p class="card-title" style={{padding: "0px"}}><img src="https://static.toiimg.com/thumb/msid-91992705,imgsize-35398,width-400,resizemode-4/91992705.jpg" alt="" style={img_style}/><b>Sunny Singh</b></p>
                <p style={{paddingLeft: "15px"}}>Today Performance</p>
                <img class="card-img-top" src="https://static.toiimg.com/thumb/msid-91992705,imgsize-35398,width-400,resizemode-4/91992705.jpg" style={{height: "400px",  padding: "0"}} alt="Card image cap" />
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <hr />
        </div>
    )
}
