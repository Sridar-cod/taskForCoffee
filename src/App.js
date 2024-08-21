import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/From';

function App() {
  const [data, setData] = useState({ attendees: [] });
  const [editIndex, setEditIndex] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home data={data} setEditIndex={setEditIndex} />}
        />
        <Route
          path="/form"
          element={<Form setData={setData} data={data} editIndex={editIndex} setEditIndex={setEditIndex} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
