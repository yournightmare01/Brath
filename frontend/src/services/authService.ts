import axios from 'axios';
import { LoginUserResponse } from '../common/types';

type LoginUserRequest = {
  username: string;
  password: string;
};

const AuthService = {
  loginUser: async ({
    username,
    password,
  }: LoginUserRequest): Promise<LoginUserResponse> => {
    const response = await axios.post('/', {
      username,
      password,
    });
    return response.data;
  },
};

export default AuthService;
