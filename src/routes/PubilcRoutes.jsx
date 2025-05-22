import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Properties from '../pages/Properties';
import Login from '../pages/Login';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
