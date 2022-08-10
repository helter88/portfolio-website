import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Portfolio />
      <Skills />
      <Resume />
      
    </div>
  );
}

export default App;
