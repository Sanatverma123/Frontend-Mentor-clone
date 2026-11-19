
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home/Home";
import LearningPaths from "./Pages/LearningPaths/LearningPaths";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter basename="/Frontend-Mentor-clone">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
