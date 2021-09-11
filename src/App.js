import "./App.css";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import MobileLink from "./Components/MobileLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <MobileLink />
    </div>
  );
}

export default App;
