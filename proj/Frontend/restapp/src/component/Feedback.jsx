
import React, { useEffect, useState } from 'react';
import { Card, TextField, Typography, Button, Rating } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';



const Login = () => {
 

  const backgroundImageStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <div>
      <Card variant='outlined' style={{
        padding: '40px',
        margin: 'auto',
        marginTop: '50px',
        alignContent: 'center',
        width: '300px',
        backgroundColor: '',
        border: '0.5px solid black',
        cursor: 'pointer',
        borderRadius: '20px',
        opacity: '80%',
      }}>
        <Typography variant='h5' color='grey'>FEEDBACK</Typography>
        <TextField
          label="username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            ),
          }}
          variant='standard'
          style={{ cursor: 'pointer' }} /><br /><br /><br />
        <TextField
          label="email"
          type='email'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            )
            
          }}
        /><br /><br />
                  <TextField
                 label="Enter your feedback"
                 type='text'
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                     </InputAdornment>
                   )
                   
                 }}
                  />
                <br></br>  <br></br>&nbsp;&nbsp;

           <Rating/>      <br></br>  <br></br>&nbsp;&nbsp;

        <Button variant='contained'>SUBMIT</Button>
      
      </Card>
    </div>
  );
}

export default Login;