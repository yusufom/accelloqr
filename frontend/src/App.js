import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Home from "./pages/dashboard/Home";
import CreateQr from "./pages/dashboard/CreateQr";
import ViewEmployee from "./pages/dashboard/ViewEmployee";
import { ErrorBoundary } from "react-error-boundary";
import EditQr from "./pages/dashboard/EditQr";
import { history } from './helpers/history';
// import { useSelector } from 'react-redux';


function RequireAuth({ children }) {
  let isAuthenticated = localStorage.getItem('userToken');
  return isAuthenticated ? children : <Navigate to={`/`} />;
}

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/create-qr/" element={<RequireAuth><CreateQr /></RequireAuth>} />
        <Route path="/edit/:ref/" element={<RequireAuth><EditQr /></RequireAuth>} />
        <Route path="/staff/:ref/" element={<ViewEmployee />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
