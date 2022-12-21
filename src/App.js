import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import SignUpPage from './Component/Pages/SignUpPage';
import LoginPage from './Component/Pages/LoginPage';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Component/Pages/Dashboard';
import Error from './Component/Pages/Error';


function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
        <Routes>     
          <Route path='/' element={<SignUpPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
