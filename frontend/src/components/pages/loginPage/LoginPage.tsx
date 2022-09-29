import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import LocalStorageService from '../../../services/localStorageService';
import AuthService from '../../../services/authService';

const LoginPage = () => {
  const initialLoginValues = {
    email: '',
    password: '',
  };

  const [loginValues, setLoginValues] = useState(initialLoginValues);

  const navigate = useNavigate();

  let loginNotValid = true;

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  // const validateUser = async (e: any) => {
  //   try {
  //     e.preventDefault();

  //     const response = await axios.post(
  //       'http://localhost:1337/api/auth/local',
  //       {
  //         identifier: loginValues.email,
  //         password: loginValues.password,
  //       }
  //     );

  //     const data = response.data;

  //     LocalStorageService.addUser(data.)

  //     return data;
  //   } catch (error) {
  //     return console.error(error);
  //   } finally {
  //     setLoginValues(initialLoginValues);
  //   }
  // };

  const validateUser = async (e: any) => {
    try {
      e.preventDefault();

      const user = await AuthService.loginUser(loginValues);
      const token = user.jwt;

      if (token) {
        LocalStorageService.addUser(token);
        navigate('/home', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loginValues.email.length >= 10 && loginValues.password.length >= 5) {
    loginNotValid = false;
  }

  return (
    <div className='form'>
      <section className='background'>
        <section className='login'>
          <div className='login__wrapper'>
            <div className='login__container'>
              <form
                onSubmit={validateUser}
                id='submit-container'
                className='login__container__form-container'
              >
                <Input
                  type='email'
                  className='input-login'
                  placeholder='yourmail@example.com'
                  onChange={handleInputChange}
                  name='email'
                  value={loginValues.email}
                />
                <Input
                  type='password'
                  className='input-login'
                  placeholder='your password'
                  onChange={handleInputChange}
                  name='password'
                  value={loginValues.password}
                />
                <Button
                  type='submit'
                  className='login-button'
                  label='Log in'
                  disabled={loginNotValid}
                />
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default LoginPage;
