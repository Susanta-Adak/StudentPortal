import React from 'react';
import { useLocation } from 'react-router-dom';

const StudentDashboard = () => {
  const location = useLocation();
  return (
    <div>{location.state.id}</div>
  )
}

export default StudentDashboard;