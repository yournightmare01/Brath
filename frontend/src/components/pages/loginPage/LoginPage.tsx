import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import LocalStorageService from '../../../services/localStorageService';
import AuthService from '../../../services/authService';

const LoginPage = () => {
  const initialLoginValues = {
    username: '',
    password: '',
  };

  const [loginValues, setLoginValues] = useState(initialLoginValues);

  const navigate = useNavigate();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const validateUser = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();

      const { username, password } = loginValues;

      const user = await AuthService.loginUser({ username, password });
      const token = user.accessToken;

      if (token) {
        LocalStorageService.addUser(token);
        navigate('/home', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginNotValid =
    loginValues.username.length <= 4 && loginValues.password.length <= 5;

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
                  type='text'
                  className='input-login'
                  placeholder='yourmail@example.com'
                  onChange={handleInputChange}
                  name='username'
                  value={loginValues.username}
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
