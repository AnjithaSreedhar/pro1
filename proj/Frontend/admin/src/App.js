import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Order from './component/Order';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path='/home' element={<><Home/></>}/>
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/signup' element={<><Signup/></>}/>
        <Route path='/d' element={<><Nav/><Order/></>}/>
      </Routes>
    </div>
  );
}

export default App;
