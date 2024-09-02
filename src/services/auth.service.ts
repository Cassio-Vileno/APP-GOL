
interface UserProps {
  name: string;
  email: string;
  password: string;
  how_be_called: string;
  id: string;
  token: string;
}

export type Credentials = {
  email: string;
  password: string;
};
let users = [{
  id: "1",
  email: "teste@gmail.com",
  name: "Cassio Vileno",
  how_be_called: "Vileno",
  password: "123456",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUzLCJ1c2VyRW1haWwiOiJjakBnbWFpbC5jb20iLCJpYXQiOjE3MTU3ODE0MjksImV4cCI6MTcxNTg2NzgyOX0.F0tI9e__tMy3aKKazBaOUy5BZGxl9BpLe4wKqCK_dpo"
}];

export default class AuthService {
  static async signIn(credentials: Credentials): Promise<any> {
    const user = users.find(item => item.email === credentials.email && item.password === credentials.password);
    console.log(user)
    return user
  }

  static async create(data: UserProps): Promise<any> {
    users.push(data)
    return data
  }
}
