import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="container-fluid App">
      <Route path={["/dogs/:name", "/"]}>
        <Navbar />
        <Home />
      </Route>
    </div>
  );
}

export default App;
