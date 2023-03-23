import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import HomeComponent from "./tuiter/home"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ExploreComponent from "./tuiter/explore";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          {/* <Route path="/a7" element={<Assignment7 />} /> */}
          <Route path="/tuiter" element={<Tuiter />} />
          <Route path="/tuiter/home" element={<HomeComponent />} />
          <Route path="/tuiter/explor" element={<ExploreComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
