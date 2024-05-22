import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Profile></Profile>
      <Services></Services>
    </div>
  );
}

export default App;
