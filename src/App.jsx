import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/HomeS/Home";
import LearningPaths from "./Pages/LearningPaths/LearningPaths";
import Contact from "./Pages/Contact/Contact";
import Challenges from "./Pages/Challenges/Challenges";
import Solutions from "./Pages/Solutions/Solutions";
import Tags from "./Pages/Solutions/Tags/Tags";
import Wall from "./Pages/Solutions/WallOfFame/Wall";
import Articles from "./Pages/Articles/Articles";
import Guides from "./Pages/Guides/Guides";
import Homehir from "./Pages/ForCompanies/HireDevloper/Hero/Homehir.jsx";
import HomeWhy from "./Pages/ForCompanies/HireDevloper/Why/HomeWhy";

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Global Theme Toggle */}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />

            <Route
              path="/learning-paths"
              element={
                <AnimatedPage>
                  <LearningPaths />
                </AnimatedPage>
              }
            />

            <Route
              path="/challenges"
              element={
                <AnimatedPage>
                  <Challenges />
                </AnimatedPage>
              }
            />

            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />

            <Route
              path="/articles"
              element={
                <AnimatedPage>
                  <Articles />
                </AnimatedPage>
              }
            />

            <Route
              path="/guides"
              element={
                <AnimatedPage>
                  <Guides />
                </AnimatedPage>
              }
            />

            {/* Solutions Pages */}

            <Route
              path="/solutions"
              element={
                <AnimatedPage>
                  <Solutions />
                </AnimatedPage>
              }
            />

            <Route
              path="/tags"
              element={
                <AnimatedPage>
                  <Tags />
                </AnimatedPage>
              }
            />

            <Route
              path="/wall"
              element={
                <AnimatedPage>
                  <Wall />
                </AnimatedPage>
              }
            />
          </Route>
          <Route
            path="/hire-developers"
            element={
              <AnimatedPage>
                <Homehir />
              </AnimatedPage>
            }
          />

          <Route
            path="/why-us"
            element={
              <AnimatedPage>
                <HomeWhy />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
function App() {
  return (
    <BrowserRouter basename="/Frontend-Mentor-clone">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
          },
        }}
      />

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
