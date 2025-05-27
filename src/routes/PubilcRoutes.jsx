import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Properties from '../pages/Properties';
import Login from '../pages/Login';
import NavBar from '../components/HomeComponents/NavBar';
import Footer from '../components/GeneralComponents/Footer';
import PropertyDetails from '../components/PropertyComponents/PropertyDetails';

const PublicRoutes = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:lodgeName" element={<PropertyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </>
  );
};

export default PublicRoutes;
