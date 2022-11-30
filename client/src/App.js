import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';

import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import StudentDashboard from './components/student/studentDashboard/StudentDashboard';
import StudentLogin from './components/student/studentLogin/StudentLogin';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StudentLogin />}/>
          <Route path='/dashboard' element={<StudentDashboard />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;