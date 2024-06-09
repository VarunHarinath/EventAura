import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/NavBar/Footer";
import TermsOfService from "./components/EULA/TermsOfService ";
import ScrollToTop from "./components/NavBar/utils/ScrollToTop ";
import EventBoarding from "./components/EventOnboarding/EventBoarding";
import Error from "./components/utils/Error";
import EventSucess from "./components/EventOnboarding/EventSucess";
import Events from "./components/ParticipantEvents/Events";
import EventsDetail from "./components/ParticipantEvents/EventsDetail";
import EventRegistration from "./components/ParticipantEvents/EventRegistration";
import UserSucess from "./components/ParticipantEvents/UserSucess";
import ContactUs from "./components/Contact/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company-eula" element={<TermsOfService />} />
          {/* evenet onboading  */}
          <Route
            path="/secure/v3/Event-On-Boadring"
            element={<EventBoarding />}
          />
          {/* success event onboarding */}
          <Route
            path="/secure/v3/Event-On-Boarding/success/:id"
            element={<EventSucess />}
          />

          {/* Events Route */}
          <Route path="/events" element={<Events />} />
          {/* Events Detail Route */}
          <Route path="/event/:id" element={<EventsDetail />} />
          {/* Paricipant Registration Route */}
          <Route
            path="/event/secure/v3/:p/:secureId/:id/:eventId/:postSecureId"
            element={<EventRegistration />}
          />
          {/* User Sucess Registration */}
          <Route path="/event/:id/success" element={<UserSucess />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* error route */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
