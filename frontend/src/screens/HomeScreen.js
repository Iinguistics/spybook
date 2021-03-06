import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';


const HomeScreen = ({ userInfo }) => {


    return (
        <div className="d-flex align-items-center " id="home-screen">
             <Jumbotron className=" main-jumbo-bg shadow ">
               <h1 className="font-weight-bold home-title my-4">Get to know your viewers & grow your channel</h1>
               <h3 id="home-title-sub" className="d-inline font-weight-bold">Data tool</h3><br /> <h3>for streamers who <br />are dedicated to their craft</h3>
               {userInfo ? <Link to="/profile" className="btn btn-primary mt-3 shadow">My profile</Link> :
               <Link to="/login" className="btn btn-primary mt-3 shadow">Log in</Link>
               }
            </Jumbotron>
        </div>
    )
}

export default HomeScreen
