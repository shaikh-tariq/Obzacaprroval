import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import WorkPage from './pages/WorkPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/careers.html" element={<Navigate to="/careers" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/services.html" element={<Navigate to="/services" replace />} />
        <Route path="/work.html" element={<Navigate to="/work" replace />} />
        <Route path="/404.html" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
