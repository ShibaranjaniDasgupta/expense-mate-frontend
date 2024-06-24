/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExpense from './pages/AddExpense';
import ExpenseList from './pages/ExpenseList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/expense-list" element={<ExpenseList />} /> 
      </Routes>
    </div>
  );
};

export default App;*/


import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AddExpense from './pages/AddExpense';
import ExpenseList from './pages/ExpenseList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contact from './pages/Contact';
import About from './pages/About';
import ProfilePage from './pages/ProfilePage';
import Email from './pages/Email';
import './pages/HomePage.css';
import Notifications from './pages/Notifications';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/About' element={<About/>}></Route>
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/expense-list" element={<ExpenseList />} />
          <Route path='/profile' element={<ProfilePage/>}></Route>
          <Route path='/notifications' element={<Notifications/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      </div>
    </div>
  );
};

export default App;
