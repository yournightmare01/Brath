import axios from 'axios';

type Creds = {
  email: string;
  password: string;
};
const AuthService = {
  loginUser: async ({ email, password }: Creds) => {
    const response = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: email,
      password,
    });
    return response.data;
  },
};

export default AuthService;
