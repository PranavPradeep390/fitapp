import './App.css';
import Header from './components/Header/Header';
import About from './components/About';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Review from './components/Review';
import Contact from './components/Contact';
import Download from './components/Download';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="features">
        <Features/>
      </div>
      <Screenshots/>
      <Download/>
      <div id="pricing">
        <Pricing/>
      </div>
      <div id="review">
        <Review/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
