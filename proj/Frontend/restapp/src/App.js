import './App.css';
import Nav from './component/Nav';
import Navv from './component/Navv';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Order from './component/Order';
import Buy from './component/Buy';
import Feedback from './component/Feedback';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path='/home' element={<><Navv/><Home/></>}/>
        <Route path='/f' element={<><Navv/><Feedback/></>}/>
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/signup' element={<><Signup/></>}/>
        <Route path='/d' element={<><Nav/><Order/></>}/>
        <Route path='/b' element={<><Buy/></>}/>
      </Routes>
    </div>
  );
}

export default App;
