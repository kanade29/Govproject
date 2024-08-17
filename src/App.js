import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from './components/Header/Navbar';
import { Footer } from './components/Header/Footer';  // Capitalize 'Footer' as it is a component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navbar />} />
          <Route index element={<Footer />} /> {/* Use the corrected component name */}
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
