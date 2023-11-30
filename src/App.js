import BottomNav from "./components/BottomNav/BottomNav";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Carousel slide */}
      <Slider />
      {/* We Make */}
      {/* React slick autoslide, focus when hovered */}
      {/* Card Title */}
      {/* Cards with scrollevent slide motion (framer motion) */}
      {/* Footer */}
      {/* Only triggers in mobile screen */}
      <BottomNav />
    </div>
  );
}

export default App;
