import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import {Routes, Route} from 'react-router';

import Welcome from './pages/Welcome'
import About from './pages/About'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='about' element={<About />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;