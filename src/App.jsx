import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/NavBar/Footer";
import TermsOfService from "./components/EULA/TermsOfService ";
import ScrollToTop from "./components/NavBar/utils/ScrollToTop ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company-eula" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
