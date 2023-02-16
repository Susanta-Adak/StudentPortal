import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Redirect } from 'react-router-dom';

import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import StudentDashboard from './components/student/studentDashboard/StudentDashboard';
import StudentLogin from './components/student/studentLogin/StudentLogin';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StudentLogin />} />
          <Route path='/dashboard' render={() => (
            isLoggedIn() ? (<StudentDashboard />) : (<Redirect to="/" />)
          )} />
        </Routes>
      </Router>
    </>
  )
}

function isLoggedIn(){

}
export default App;