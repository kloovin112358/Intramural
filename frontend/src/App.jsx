import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import {Routes, Route, Outlet} from 'react-router';

import LoggedOutNavbar from './components/LoggedOutNavbar'
import LoggedInNavbar from './components/LoggedInNavbar'

import Welcome from './pages/Welcome'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoggedOutRoutes />}>
          <Route path='*' element={<NotFound />} />
          <Route path='' element={<Welcome />}/>
          <Route path='about' element={<About />}/>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<SignUp />}/>
        </Route>
        <Route path="/app" element={<LoggedInRoutes />}>
          <Route path='*' element={<NotFound />} />
          <Route path='' element={<Dashboard />}/>
        </Route>
      </Routes>
    </div>
  );
}

function LoggedInRoutes() {
  return (
    <>
      <LoggedInNavbar />
      <Outlet /> 
    </>
  );
}

// navbar setup courtesy of https://stackoverflow.com/a/70040379
function LoggedOutRoutes() {
  return (
    <>
      <LoggedOutNavbar />
      <Outlet /> 
    </>
  );
}

export default App;