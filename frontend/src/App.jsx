import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router';

import Welcome from './pages/Welcome'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;