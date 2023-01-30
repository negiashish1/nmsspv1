import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services/>} />
          <Route path="/login" element={<Services/>} />
          <Route path="/signup" element={<Services/>} />
          <Route path="/about" element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
