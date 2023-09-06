import './App.css';
import { BrowserRouter, Routes, Route, json} from "react-router-dom";
import Services from './components/Services';
import Footer from './components/Footer';
import Gist from './components/Gist';
import Header from './components/Header';
import Headervideo from './components/Headervideo';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './components/Contact';
import Donate from './components/Donate';
import LoginRegister from './components/LoginRegister';
import Navbar1 from './components/Navbar1';
import Testimonials from './components/testimonials1/Testimonials';
import Foundermessage from './components/Foundermessage';
import WSPGallery from './components/WSPGallery';

function App() {

  

  return (
    
    <div class="App">

      <Navbar1/>
      <Header/>
      <Headervideo/>
      <WSPGallery/>

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/blog/:id" element= {<Blog/>}/>
      </Routes>

      <Gist/>
      <Contact/>
      <Services/>
      <Donate/>
      <LoginRegister/>
      <Testimonials/>
      <Foundermessage/>
      <Footer/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services/>} />
          <Route path="/login" element={<Services/>} />
          <Route path="/signup" element={<Services/>} />
          <Route path="/about" element={<Services/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter> */}

      
    </div>
  );
}

export default App;
