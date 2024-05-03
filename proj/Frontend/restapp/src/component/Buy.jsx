
import { Card } from '@mui/material';
import React, { useState } from 'react';

function FoodOrderForm() {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Food Item:", foodItem);
    console.log("Quantity:", quantity);
    console.log("Address:", address);
    setFoodItem('');
    setQuantity(1);
    setAddress('');
  };

  return (
    <Card variant='outlined' style={{
        padding:'40px',
        margin:'auto',
        marginTop:'50px',
        alignContent:'center',
        width:'80 px',
        backgroundColor:'lightgray',
        border:'0.5px solid black',
        cursor:'pointer',
        borderRadius:'20px',
        opacity:'80%',
    }}>
        
   
    <form onSubmit={handleSubmit}>
      <label>
        Food Item:
        <input
          type="text"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
      </label>
      <br /><br/>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </label>
      <br /><br/>
      <label>
        Address:
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br /><br/>
      <button type="submit">Place Order</button>
    </form>
    </Card>
  );
}

export default FoodOrderForm;
