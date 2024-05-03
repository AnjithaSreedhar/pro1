import { Button, Chip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './image/image.png';
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
       {/* <img src={logo} alt="Logo" style={{ width: '50px',marginTop:'-300px',paddingRight:'2500px'}} /> */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>ARCADO</h1>
         <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', }}>
        
          
        </ul> 
      </div>
    </nav>
  );
}

export default Navbar;