import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import NoHeaderFooterLayout from "./Layout/NoHeaderFooterLayout";

import HomePage from "./components/HomePage/HomePage";

import TermsOfService from "./components/EULA/TermsOfService ";

import EventBoarding from "./components/EventOnboarding/EventBoarding";
import Error from "./components/utils/Error";
import EventSucess from "./components/EventOnboarding/EventSucess";
import Events from "./components/ParticipantEvents/Events";
import EventsDetail from "./components/ParticipantEvents/EventsDetail";
import EventRegistration from "./components/ParticipantEvents/EventRegistration";
import UserSucess from "./components/ParticipantEvents/UserSucess";
import ContactUs from "./components/utils/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/company-eula" element={<TermsOfService />} />
          <Route
            path="/secure/v3/Event-On-Boarding"
            element={<EventBoarding />}
          />
          <Route
            path="/secure/v3/Event-On-Boarding/success/:id"
            element={<EventSucess />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventsDetail />} />
          <Route
            path="/event/secure/v3/:p/:secureId/:id/:eventId/:postSecureId"
            element={<EventRegistration />}
          />
          <Route path="/event/:id/success" element={<UserSucess />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* Routes without Header and Footer */}
        <Route element={<NoHeaderFooterLayout />}>
          <Route
            path="/secure/dashboard/:id"
            element={<div>Admin Panel</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
