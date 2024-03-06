import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login'



// other imports

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Signup/>} />  
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    
    </>
    );
}

export default App;
