import React, {useContext, useState} from 'react';
import withAuth from '../../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contetxs/AuthContects';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function HomeComponent() {
    
let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);
    let handleVideoCall = async ()=>{
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
    return (  

        <>
         <div className="navBar">
            <div style={{display: "flex", alignItems: "center", textDecoration:"none", color:"black"}}>
            <IconButton onClick={
                    ()=>{
                        navigate("/");
                    }
                }>
                <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                </IconButton>
           <h2>Connectify</h2>
          
            </div>
            
            <div style={{display: "flex", alignItems: "center"}}>
                <IconButton onClick={
                    ()=>{
                        navigate("/history");
                    }
                }>
                    <RestoreIcon></RestoreIcon>
                    
                </IconButton>
                <p>History</p>
                <Button onClick={()=>{
                    localStorage.removeItem("token")
                    navigate("/auth")
                }}>
                    Logout
                </Button>
            </div>
        </div>
        <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
     </>
    );
}

export default withAuth(HomeComponent);