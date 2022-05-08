import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Test from "./pages/test";
import Project from "./pages/homeAula";
import "./index.css";
import "./index.js";

function App() {
  return (
    <div className="containar">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="project" index element={<Project />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
