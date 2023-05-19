import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" exact element={<Header  />}  /> */}
        <Route path="/" exact element={<Hero />} />
      </Routes>
    </Router>
  );
}

// 1:30:21 yen build 


export default App;
