import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, json} from "react-router-dom";
import Services from './components/Services';
import Footer from './components/Footer';
import Gist from './components/Gist';
import Header from './components/Header';
import Headervideo from './components/Headervideo';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Message from './components/Message';
import LoginRegister from './components/LoginRegister';
import Navbar1 from './components/Navbar1';
import Testimonials from './components/testimonials1/Testimonials';
import Foundermessage from './components/Foundermessage';
import WSPGallery from './components/WSPGallery';

function App() {

  const galleryImages = [
    {
      img: '../../assets/images/gallery1.jpg'
    },
    {
      img: "../../assets/images/gallery2.jpg"
    },
    {
      img: "../../assets/images/gallery3.jpg"
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    
    <div class="App">
      
      {/* <Home/> */}
      {/* <Navbar/> */}
      <Navbar1/>
      {/* <Blogs/> */}
      <Header/>


      {/* <Blogs/> */}
      <Headervideo/>

      <div>
        <strong>Our Gallery</strong>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      {/* <div>- WebStylePress -</div> */}

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/blog/:id" element= {<Blog/>}/>
      </Routes>

      <Gist/>
      <Contact/>
      {/* <Message/> */}
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
