import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import NriServices from './pages/NriServices';
import Career from './pages/Career';
import Grievance from './pages/Grievance';
import Team from './pages/Team';
import Offices from './pages/Offices';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="nri-services" element={<NriServices />} />
          <Route path="career" element={<Career />} />
          <Route path="grievance" element={<Grievance />} />
          <Route path="team" element={<Team />} />
          <Route path="offices" element={<Offices />} />
          <Route path="*" element={<div className="container section"><h2>404 - Page Not Found</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
