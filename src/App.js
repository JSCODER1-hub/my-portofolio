
import './App.css';
import Introuction from './components/Introuction';
import Stats from './components/Stats';
import Work from './components/Work';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import  Contact  from './components/Contact';
import  Footer  from './components/Footer';
function App() {
  return (
    <div className="App">

        <Introuction />
        <Stats />
        <Work />
        <Technologies />
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
