import React, {useContext} from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate 
} from "react-router-dom";

import { AuthProvider, AuthContext } from './context/auth';

import LoginPage from './pages/LoginPage/index';
import RegisterPage from "./pages/RegistesPage/index";
import Home from './pages/Home/index';
import Perfil from './pages/Perfil/index';
import Dieta from './pages/Dieta/index';


const AppRoutes = () => {
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext)
  
    if(loading){
      return <div className="loading">Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          
          <Route exact path="/" element={
            <Private>
              <Home/>
            </Private>
          } />

          <Route exact path="/perfil" element={
            <Private>
              <Perfil/>
            </Private>
          } />

          <Route exact path="/dieta" element={
            <Private>
              <Dieta/>
            </Private>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes