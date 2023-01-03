import "./styles/LandingPage.css" 

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import Home from './page/Home';
import DetailProduct from "./page/DetailProduct";
import Watching from "./page/Watching";
import LoginPage from "./page/auth/Login";
import Signup from "./page/auth/Signup";

function App() {
  return (
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/:productId" element={<DetailProduct/>}/>
          <Route path='/:productId/:watchingId' element={<Watching/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
  );
}

export default App;
