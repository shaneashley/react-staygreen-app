import './App.css';
import About from './component/About';
import Actions from './component/Actions';
import Banner from './component/Banner';
import Happenings from './component/Happenings';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import UsefulWebsites from './component/UsefulWebsites';

function App() {
  return (
    <div className="App">
      <Navbar />
 <Hero />
 <About />
 <Actions />
 <Happenings />
 <UsefulWebsites />
 <Banner/>
    </div>
  );
}

export default App;
