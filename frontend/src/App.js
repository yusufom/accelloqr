import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Home from "./pages/dashboard/Home";
import CreateQr from "./pages/dashboard/CreateQr";
import ViewEmployee from "./pages/dashboard/ViewEmployee";
import { ErrorBoundary } from "react-error-boundary";
import EditQr from "./pages/dashboard/EditQr";


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/create-qr" element={<CreateQr />} />
          <Route path="/:ref" element={<ViewEmployee />} />
          <Route path="/edit/:ref" element={<EditQr />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>

  );
}

export default App;