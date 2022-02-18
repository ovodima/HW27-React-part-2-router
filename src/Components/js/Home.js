import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Home() {
  return (
  <div>
    <h1>Home page</h1>

    <ul>
      <li><Link to={'events'}><Button variant="contained" color="success" size="small">Event</Button></Link></li>
      <li><Link to={'doctors'}><Button variant="contained" color="success" size="small">Doctors</Button></Link></li>
      <li><Link to={'clients'}><Button variant="contained" color="success" size="small">Clients</Button></Link></li>
      <li><Link to={'appointments'}><Button variant="contained" color="success" size="small">Appointments</Button></Link></li>
    </ul>
  </div>)
};
