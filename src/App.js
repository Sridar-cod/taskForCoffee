import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/From';

function App() {
  // initialize state with data from local storage or with default value
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('attendeesData');
    return savedData ? JSON.parse(savedData) : { attendees: [] };
  });

  const [editIndex, setEditIndex] = useState(null);

  // use useEffect to save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('attendeesData', JSON.stringify(data));
  }, [data]);

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
