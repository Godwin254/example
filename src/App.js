import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
      
    </div>
  );
}

export default App;
