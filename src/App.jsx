
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Challenges from "./Pages/Challenges";
import Practice from "./Pages/Practice";
import Portfolio from "./Pages/portfolio";

function App() {
  return (
    <BrowserRouter basename="/Frontend-Mentor-clone">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
