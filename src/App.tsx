import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Portfolio />
      <Skills />
      
    </div>
  );
}

export default App;
