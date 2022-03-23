import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Screens/Home/Home";
import MovieScreen from "./Screens/MovieScreen/MovieScreen";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<MovieScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
