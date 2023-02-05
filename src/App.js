import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Services from './components/Services';
import Footer from './components/Footer';
import Gist from './components/Gist';
import Header from './components/Header';
import Headervideo from './components/Headervideo';
import Home from './pages/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Donate from './components/Donate';
import Message from './components/Message';
import LoginRegister from './components/LoginRegister';

function App() {
  return (
    <div class="App">
      <Home/>
      <Navbar/>
      {/* <Blogs/> */}
      <Header/>
      <Blogs/>
      <Headervideo/>
      <Gist/>
      <Contact/>
      <Message/>
      <Services/>
      <Donate/>
      <LoginRegister/>
      <Testimonials/>
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
