import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import DashboardHome from '../pages/dashboard/DashboardHome';
import Messages from '../pages/dashboard/Messages';
import Profile from '../pages/dashboard/Profile';
import Subscription from '../pages/dashboard/Subscription';
import Properties from '../pages/dashboard/Properties';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="home" element={<DashboardHome />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="properties" element={<Properties />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
