import { useState } from 'react'
import { Route, BrowserRouter, Routes,NavLink} from "react-router-dom";

import './App.css';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contetxs/AuthContects';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';

function App() {
  
   return (
    <>
     <BrowserRouter>
     <AuthProvider>
      <Routes>
        {/* <Route path="/home"></Route> */}
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/auth" element={<Authentication></Authentication>}></Route>
         <Route path='/home' element={<HomeComponent></HomeComponent>}></Route>
         <Route path="/history" element={<History></History>}></Route>
        <Route path = "/:url" element={<VideoMeetComponent></VideoMeetComponent>}></Route>
      </Routes>
      </AuthProvider>
     </BrowserRouter>
    </>
  )
}

export default App
