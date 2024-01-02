import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Featuring from './Components/Featuring';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path='/features' element={<Featuring />}></Route>
        </Routes>
        <Routes>
          <Route path='/pricing' element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
