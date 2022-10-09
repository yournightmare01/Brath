import axios from 'axios';

type Creds = {
  username: string;
  password: string;
};
const AuthService = {
  loginUser: async ({ username, password }: Creds) => {
    const response = await axios.post('http://localhost:3000/', {
      username,
      password,
    });

    console.log(response);
    return response.data;
  },
};

export default AuthService;
