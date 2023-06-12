import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import React from "react"
import Home from "./components/Home";
function App() {
  return (
    <Router>
      {/* <Header  /> */}
      <Routes>
        {/* <Route path="/" exact element={<Header  />}  /> */}
        <Route
          path="/"
          exact
          element={
            <React.Fragment>
              <Header />
              <Hero />
            </React.Fragment>
          }
        />
        <Route path="/channels" element={<Home />} />
        <Route path="/channels/:id" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
