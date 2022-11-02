import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./features/component/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/all" element={<Container />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
