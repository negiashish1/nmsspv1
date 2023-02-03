import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Services from './components/Services';
import Footer from './components/Footer';
import Gist from './components/Gist';
import Header from './components/Header';
import Headervideo from './components/Headervideo';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Home/>
      <Blog/>
      <Navbar/>
      <Header/>
      <Headervideo/>
      <Services/>
      <Gist/>
      <Footer/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services/>} />
          <Route path="/login" element={<Services/>} />
          <Route path="/signup" element={<Services/>} />
          <Route path="/about" element={<Services/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
