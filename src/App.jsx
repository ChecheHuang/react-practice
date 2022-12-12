import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomHook from './pages/CustomHook/CustomHook';
import LearnReact from './pages/LearnReact/LearnReact';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/customHook"
            element={<CustomHook/>}
          />
           <Route
            exact
            path="/learnReact"
            element={<LearnReact/>}
          />
        </Routes>
        
      </Router>
    </>
  );
}

export default App