import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
  <div>
    <h1>Home page</h1>

    <ul>
      <li><Link to={'events'}>Events</Link></li>
      <li><Link to={'doctors'}>Doctors</Link></li>
      <li><Link to={'clients'}>Clients</Link></li>
      <li><Link to={'appointments'}>Appointments</Link></li>
    </ul>
  </div>)
};
