import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appointments from './Components/js/Appointments';
import Clients from './Components/js/Clients';
import Doctors from './Components/js/Doctors';
import Events from './Components/js/Events';
import  Home  from './Components/js/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
      </Routes>
    </BrowserRouter>
  );
}

