import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomHook from './assets/customHook/CustomHook';
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
        </Routes>
      </Router>
    </>
  );
}

export default App