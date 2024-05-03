import React from 'react'
// import image from './image/wp.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
    const backgroundImageStyle={
        position: 'fixed',
        top: '0',
        left:'0',
        width: '100%',
        height: '100%',
        zIndex: -1,
    };
    return (
        <div>
            <img src="https://t3.ftcdn.net/jpg/00/27/57/96/240_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt='err' style={backgroundImageStyle}/>
            <div style={{ textAlign: 'center', paddingTop: '100px',color:'white' }}>        
            <h1>WELCOME TO OUR RESTAURANT</h1>
            <p>"RAIN OR SHINE,IT'S A FINE TIME TO DINE  "</p>

        <Button variant='contained' color='error'><Link to={'/login'} style={{textDecoration:'none',color:'white'}}>ORDER NOW</Link></Button>
        </div>
        </div>
    )
    
    }
  


export default Home