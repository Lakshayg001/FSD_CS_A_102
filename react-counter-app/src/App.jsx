import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stopwatch from "./components/Stopwatch";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <Home />
            </h1>
          }
        ></Route>
        <Route path="/counter" element={<h1>Counter App</h1>}></Route>
        <Route
          path="/stopwatch"
          element={
            <h1>
              Stop Watch App
              <Stopwatch />
            </h1>
          }
        ></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  );
};
export default App;
