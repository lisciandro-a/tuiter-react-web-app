import Assignment6 from "./a6";
import Nav from "../nav";
import { Routes, Route } from "react-router";
import Assignment7 from "./a7";

function Labs() {
  return (
    <div>
      {/* <h1>Assignment 6</h1> */}
      <Nav />
      <Routes>
        <Route>
          <Route index element={<Assignment6 />} />
          <Route path="a7" element={<Assignment7 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Labs;
