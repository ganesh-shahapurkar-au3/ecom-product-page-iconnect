import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
