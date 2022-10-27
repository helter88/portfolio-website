import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import DisplayCV from './components/pages/DisplayCV';
import NotFound from './components/pages/NotFound';

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
      <Route path='*' element={<NotFound />} />

      
    </Routes>
   
  );
}

export default App;
