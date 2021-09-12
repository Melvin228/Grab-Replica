import "./App.css";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Services from "./Components/Services/Services";
import MobileLink from "./Components/MobileLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Services />
      <MobileLink />
    </div>
  );
}

export default App;
