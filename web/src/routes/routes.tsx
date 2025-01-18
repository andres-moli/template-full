import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import UserPage from '../pages/user';
import LoginPage from '../pages/login';
import ProtectedRoute from './ProtectedRoute'; // Importamos el componente ProtectedRoute
import ActivityPage from '../pages/Activity';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="login" element={<LoginPage />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute element={<Dashboard />} />
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute element={<UserPage />} />
          }
        />
        <Route
          path="/activity"
          element={
            <ProtectedRoute element={<ActivityPage />} />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
