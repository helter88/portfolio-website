import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
      
    </div>
  );
}

export default App;
