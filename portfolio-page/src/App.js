import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Portfolio from './pages/Portfolio'

function App() {
  return (
  <ParallaxProvider>
    <div>
      <Portfolio />
    </div>
  </ParallaxProvider>
  );
}

export default App;
