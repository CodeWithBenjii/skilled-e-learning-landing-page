import CardsSection from './components/CardsSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CardsSection />
      <FooterSection />
    </div>
  );
}

export default App;
