import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
