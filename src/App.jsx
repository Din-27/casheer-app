import "./App.css";
import pageInitialize from "../src/page";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router";
import NotFound from "./page/NotFound";
import Login from "./page/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function RouterContent() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useSelector((state) => state.auth);

  const initializedPages = pageInitialize() || []; // Ensure it doesn't return `undefined`

  const matchedRoute = initializedPages.find((x) => x.path === pathname);

  useEffect(() => {
    if (!token) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [token])

  return (
    <Routes>
      <Route
        path='/login'
        element={<Login />}
      />
      {initializedPages.map((x, y) => (
        <Route
          key={y}
          path={x.path}
          index={x.index}
          element={<x.component />}
        />
      ))}
      {!matchedRoute && <Route path="*" element={<NotFound />} />}
    </Routes>
  );
}

function App() {

  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
}

export default App;
