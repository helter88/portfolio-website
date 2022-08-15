import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import DisplayCV from './components/DisplayCV';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <Header />
          <Hero/>
          <Portfolio />
          <Skills />
          <Resume />
          <Contact />
          <Footer />
        </div>
      } />
      <Route path='/cv' element={<DisplayCV />} />
      
    </Routes>
   
  );
}

export default App;
