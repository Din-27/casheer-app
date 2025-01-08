import "./App.css";
import pageInitialize from "../src/page";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import NotFound from "./page/NotFound";

function RouterContent() {
  const { pathname } = useLocation();

  const initializedPages = pageInitialize() || []; // Ensure it doesn't return `undefined`

  const matchedRoute = initializedPages.find((x) => x.path === pathname);
  
  return (
    <Routes>
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
