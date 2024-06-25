import React from 'react';
import { Link } from 'react-router-dom';
import '../resources/default-layout.css';

function DefaultLayout(props) {
  const user=JSON.parse(localStorage.getItem('expense-app'))
  return (
    <div className="layout">
        <div className="header d-flex justify-content-between align-items-center">
            <div>
                <h1 className="logo">
                    EXPENSE TRACKING APPLICATION
                </h1>
            </div>
            <div>
                <h1 className="username">{user.name}</h1>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>  
    </div>
  )
}

export default DefaultLayout;
