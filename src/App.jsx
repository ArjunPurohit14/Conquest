import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import Dashboard from "./pages/Home Page/Dashboard";
import InterviewPage from "./pages/Interview Page/InterviewPage";
import ReportPage from "./pages/Report Page/ReportPage";
import Navbar from "./components/Navigation/Navbar";
import JobCategory from "./pages/Category Page/JobCategory";

function App() {
  const isAuthUser = true;
  return (
    <>
      <Navbar isAuthUser={isAuthUser} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/interview" element={<InterviewPage />} />
        <Route exact path="/category" element={<JobCategory />} />
        <Route exact path="/report" element={<ReportPage />} />
      </Routes>
    </>
  );
}

export default App;
