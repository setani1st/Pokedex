//import logo from './logo.svg';
import './App.css';
//import LoginForm from './Components/LoginForm/LoginForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home'
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/register' element={<RegisterForm/>}></Route>
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
}

export default App;
