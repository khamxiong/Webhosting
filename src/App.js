
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Hosting from "./Components/Hosting/Hosting";
import Contact from "./Components/Contact/Contact";
import Domain from "./Components/Domain/Domain";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
