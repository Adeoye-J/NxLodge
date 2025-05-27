import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PubilcRoutes';
// import PrivateRoutes from "./routes/PrivateRoutes";
import { useAuth } from './hooks/useAuth'; // custom hook for auth

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
      <Routes>
        {/* Public routes only for not logged-in users */}
        {!isLoggedIn && <Route path="/*" element={<PublicRoutes />} />}

        {/* Private routes for logged-in users */}
        {/* {isLoggedIn && <Route path="/dashboard/*" element={<PrivateRoutes />} />} */}
        
        {/* Redirect logged-in users from public routes to dashboard */}
        {isLoggedIn && <Route path="*" element={<Navigate to="/dashboard/home" />} />}
      </Routes>
  );
}

export default App;