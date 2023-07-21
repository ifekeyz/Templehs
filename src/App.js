import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentPage from './Appointmentpage';
import LandPage from './LandPage';
import userImage from './user-image.jpg'; // Replace './user-image.jpg' with the actual path to your image file

const App = () => {
  const name = "John Doe";
  const email = "john.doe@example.com";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppointmentPage name={name} email={email} imageUrl={userImage} />} />
        <Route path="/LandPage" element={<LandPage />} />
      </Routes>
    </Router>
  );
};

export default App;
