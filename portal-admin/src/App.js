import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Anuncios from "./pages/Anuncios";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from "./pages/ForgotPassword";

function ProtectedRoute({ children }) {
  const { loggedIn } = useSelector((state) => state.user);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
        <Routes>
          {/* <Route path="/inicio" element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} /> */}
          <Route path="/productos" element={<ProtectedRoute><Layout><Products /></Layout></ProtectedRoute>} />
          <Route path="/anuncios" element={<ProtectedRoute><Layout><Anuncios /></Layout></ProtectedRoute>} />
          <Route path="/galeria" element={<ProtectedRoute><Layout><Gallery /></Layout></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />}/>
          <Route path="/reset-password" element={<ForgotPassword />}/>
          <Route path="/" element={<Navigate to="/anuncios" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
