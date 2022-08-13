import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Selection from "./pages/selection/Selection.jsx";
import Attraction from "./pages/attraction/Attraction.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/selection/:city/:country' element={<Selection />} />
          <Route path='/attraction/:country/:city' element={<Attraction />} />
          <Route path='/restaurant/:country/:city' element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//to run backend scripts/start = nodemon index.js

export default App;
