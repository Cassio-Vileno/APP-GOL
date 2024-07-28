
interface Response {
  token: string;
  email: string;
  how_be_called: string;
  name: string;
  id: string;
}

export type Credentials = {
  email: string;
  password: string;
};

export default class AuthService {
  static async signIn(credentials: Credentials): Promise<any> {
    const userData = {
      id: "1",
      email: "vileno@gmail.com",
      name: "Cassio Vileno",
      how_be_called: "Vileno",
      password: "123456",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUzLCJ1c2VyRW1haWwiOiJjakBnbWFpbC5jb20iLCJpYXQiOjE3MTU3ODE0MjksImV4cCI6MTcxNTg2NzgyOX0.F0tI9e__tMy3aKKazBaOUy5BZGxl9BpLe4wKqCK_dpo"
    };
    const validateLogin = userData.email === credentials.email && userData.password === credentials.password
    if (validateLogin) {
      return userData
    }
    return new Error("")
  }
}
