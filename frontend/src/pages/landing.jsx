import React from 'react';
import "../App.css"
import { Link, useNavigate } from "react-router-dom";

 
 
function LandingPage() {
    const router = useNavigate();
    return ( 
        <div className='landingPageCotainer'>
              <nav>
                <div className='navHeader'>
                    <h2>Connectify</h2>
                    
                    
                </div>
                <div className='navlist'>
                    <p onClick={()=>{
                       router("/gvsgv");
                    }}>Join as Guest</p>
                    <p
                     onClick = {()=>{
                        router("/auth");
                }}>Register</p>
                    <div onClick = {()=>{
                            router("/auth");
                    }}role='button'>
                        <p >Login</p>
                    </div>
                </div>
              </nav>


<div className="LandingMainContainer">
    <div>
        <h1> <span style={{color:"#FF9839"}}>Connect</span> With Your Loved Ones</h1>

        <p>Cover a distance by Connectify.</p>
        <div role='button'>
            <Link to={"/home"}> Get Started</Link>
        </div>
    </div>
    <div>
        <img src="/mobile.png" alt="" />
    </div>
</div>




        </div>
     );
}

export default LandingPage;
