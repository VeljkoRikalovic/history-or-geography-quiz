import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Geography from "./pages/Geography";
import History from "./pages/History";
import ErrorPage from "./pages/ErrorPage";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />} />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="geography" element={<Geography />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<ErrorPage message="page not found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
