import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home/Home";
import LearningPaths from "./Pages/LearningPaths/LearningPaths";
import Contact from "./Pages/Contact/Contact";
import Challenges from "./Pages/Challenges/Challenges";
import Solutions from "./Pages/Solutions/Solutions";
import Tags from "./Pages/Solutions/Tags/Tags";
import Wall from "./Pages/Solutions/WallOfFame/Wall";
import Articles from "./Pages/Articles/Articles";
import Guides from "./Pages/Guides/Guides";

function App() {
  return (
    <BrowserRouter basename="/Frontend-Mentor-clone">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/guides" element={<Guides />}/>

          {/* Solutions Pages */}

          <Route path="/solutions" element={<Solutions />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/wall" element={<Wall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;