import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My project</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
