import React, { useState } from 'react';
import { login } from './../auth'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(formData.email, formData.password);
      console.log('Bearer ' + token);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
      
          <input type="text" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
   
           <input type="password" name="password" placeholder='Пароль' value={formData.password} onChange={handleChange} />
        </label>
        <br /><br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;