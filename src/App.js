import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./containers/AboutUs/AboutUs";
import Chef from "./containers/Chef/Chef";
import FindUs from "./containers/FindUs/FindUs";
import Footer from "./containers/Footer/Footer";
import Gallery from "./containers/Gallery/Gallery";
import Header from "./containers/Header/Header";
import Intro from "./containers/Intro/Intro";
import Laurels from "./containers/Laurels/Laurels";
import SpecialMenu from "./containers/Menu/SpecialMenu";
import "./App.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
