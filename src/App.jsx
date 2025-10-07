import { useState } from 'react'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import Navbar from './Components/Navbar'
import Tooltip from './Components/Tooltip'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import NotFound from './Pages/NotFound'
import OurProject from './Pages/OurProject'
import OurTeam from './Pages/OurTeam'
import Portfolio from './Pages/Portfolio'
import TermsAndConditions from './Pages/TermsAndConditions'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function Layout() {
  return (
    <>
      <Tooltip />
      <Navbar />
      <Outlet />  {/* renders the current child route */}
      <ScrollToTop />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* All valid pages use Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/ourprojects" element={<OurProject />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>

      {/* 404 fallback → no layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;