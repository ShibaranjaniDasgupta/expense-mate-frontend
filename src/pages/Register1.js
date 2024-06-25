// import {Form, message} from 'antd'
// import Input from 'antd/lib/input/Input'
// import React,{useEffect} from 'react'
// import '../resources/authentication.css'
// import {Link,useNavigate} from 'react-router-dom';
// import axios from 'axios';
// import MoneyImage from "../assets/money.jpg"
// function Register1() {

//   const onFinish=async(values)=>{
//     try{
//         await axios.post('api/users/register',values)
//         message.success('reg success')
//     }
//     catch(error){
//         message.error('went wrong')
//     }
//   }
//   return (

//     <div className="register">
      
//       <div className="row justify-content-center align-items-center w-100 v-100">
//         <div className="col-md-5 d-flex justify-content-center">
//          <img src={MoneyImage} alt="money_app" style={{ width: '100px', height: 'auto'  }} />
//         </div>
//         <div className="col-md-5">
//           <Form layout='vertical' onFinish={onFinish}>
//           <h1>EXPENSE TRACKER/REGISTER</h1>
//           <hr />
//             <Form.Item label="Name" name="name">

//               <Input />

//             </Form.Item>
//             <Form.Item label="Email" name="email">

//               <Input />

//             </Form.Item>
//             <Form.Item label="Password" name="password">

//               <Input type="password"/>

//             </Form.Item>
//             <div className="d-flex justify-content-between align-items-center">
//               <Link to='/login'>Already registered, click here to login</Link>
//               <button className='primary' type='submit'>REGISTER</button>
//             </div>
//           </Form>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Register1


import { Form, message } from 'antd';
import Input from 'antd/lib/input/Input';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MoneyImage from "../assets/money.jpg";

function Register1() {
  const onFinish = async (values) => {
    try {
      await axios.post('api/users/register', values);
      message.success('Registration successful');
    } catch (error) {
      message.error('Something went wrong');
    }
  };

  return (
    <div
      style={{
        background:'#0a192f',
        display: 'flex',
        borderRadius:'10px',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px',
        height: '85vh',
        justifyContent: 'center'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
        <img
          src={MoneyImage}
          alt="money_app"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Form layout="vertical" onFinish={onFinish}>
          <h1 style={{ textAlign: 'center' }}>SIGNUP</h1>
          <hr />
          <Form.Item label="Name" name="name" label={<span style={{ color: '#64ffda' }}>Name</span>}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" label={<span style={{ color: '#64ffda' }}>Email</span>}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" label={<span style={{ color: '#64ffda' }}>Password</span>}>
            <Input type="password" />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/login">Already registered? Click here to login</Link>
            <button
              type="submit"
              style={{
                backgroundColor: '#64ffda',
                color: '#020c1b',
                padding: '10px 20px',
                border: 'none',
                borderRadius:'10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight:'bold',
              }}
            >
              SIGNUP
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register1;
