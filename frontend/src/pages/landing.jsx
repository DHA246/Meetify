import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Meetify</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF8C00" }}>Talk.</span> Laugh.  Repeat.</h1>

                    <p>Just one tap away</p>
                    <div role='button'>
                        <Link to={"/auth"}>Start Calling</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />
                    

                </div>
            </div>



        </div>
    )
}
