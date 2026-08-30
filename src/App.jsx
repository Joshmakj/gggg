import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recruitment from './pages/Recruitment';
import InsideSales from './pages/InsideSales';
import It from './pages/It';
import Jobseeker from './pages/Jobseeker';
import RemoteFrontDesk from './pages/RemoteFrontDesk';
import LawFirm from './pages/LawFirm';
import RFD_LawFirms from './pages/remote-front-desk/LawFirms';
import RFD_MedicalClinics from './pages/remote-front-desk/MedicalClinics';
import RFD_CorporateOffices from './pages/remote-front-desk/CorporateOffices';
import RFD_GovernmentBuildings from './pages/remote-front-desk/GovernmentBuildings';
import RFD_CoWorkingSpaces from './pages/remote-front-desk/CoWorkingSpaces';
import Blog from './pages/Blog';
import JobSeekerLeadMagnet from './pages/JobSeekerLeadMagnet';
import RecruiterLeadMagnet from './pages/RecruiterLeadMagnet';
import CybersecurityLeadMagnet from './pages/CybersecurityLeadMagnet';
import CybersecurityHiringManagers from './pages/CybersecurityHiringManagers';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/blog');
  const navigate = useNavigate();

  React.useEffect(() => {
    const handler = () => navigate('/remote-front-desk', { state: { openForm: true } });
    window.addEventListener('open-contact-form', handler);
    return () => window.removeEventListener('open-contact-form', handler);
  }, [navigate]);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hash = location.hash.replace(/^#/, '');
      const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;
      if (target) target.scrollIntoView({ block: 'start' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/insidesales" element={<InsideSales />} />
          <Route path="/enterprise-ai" element={<It />} />
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/job-seeker-lead-magnet" element={<JobSeekerLeadMagnet />} />
          <Route path="/recruiter-lead-magnet" element={<RecruiterLeadMagnet />} />
          <Route path="/cybersecurity" element={<CybersecurityLeadMagnet />} />
          <Route path="/cybersecurity-hiring-managers" element={<CybersecurityHiringManagers />} />
          <Route path="/remote-front-desk" element={<RemoteFrontDesk />} />
          <Route path="/remote-front-desk/law-firms" element={<RFD_LawFirms />} />
          <Route path="/remote-front-desk/medical-clinics" element={<RFD_MedicalClinics />} />
          <Route path="/remote-front-desk/corporate-offices" element={<RFD_CorporateOffices />} />
          <Route path="/remote-front-desk/government-buildings" element={<RFD_GovernmentBuildings />} />
          <Route path="/remote-front-desk/co-working-spaces" element={<RFD_CoWorkingSpaces />} />
          <Route path="/law-firm" element={<LawFirm />} />
          <Route path="/blog/:blogKind" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
