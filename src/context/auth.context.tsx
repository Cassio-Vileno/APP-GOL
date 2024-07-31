import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDialog } from "../hooks/useDialog";
import AuthService, { Credentials } from "../services/auth.service";

type AuthContextData = {
  signed: boolean;
  user: object | null | any;
  signOut(): Promise<void>;
  login(credentials: Credentials): Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigation = useNavigation<any>();

  const { openDialog, closeDialog } = useDialog();
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string>("");

  async function login(credentials: Credentials) {
    try {
      const response = await AuthService.signIn(credentials);
      await AsyncStorage.setItem("@Gol:token", response.token);
      const item = {
        response,
        timestamp: Date.now(),
      };
      await AsyncStorage.setItem("@Gol:user", JSON.stringify(item));
      setUser({
        id: response.id,
        email: response.email,
        name: response.how_be_called,
      });
      setToken(response.token);
      navigation.navigate("HOME");
    } catch (err: any) {
      console.log(err.response?.data);
      openDialog({
        title: "Ops!",
        subtitle:
          err.response?.data?.msg ||
          err.response?.data ||
          "Email ou senha incorreta",
        buttonText: "Tentar novamente",
        buttonPress: () => {
          closeDialog();
        },
      });
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove(["@Gol:token", "@Gol:user"]);
    setUser({} as any);
    setToken("");
  }

  const getSession = useCallback(async () => {
    const userData = await AsyncStorage.getItem("@Gol:user");
    const tokenData = await AsyncStorage.getItem("@Gol:token");

    if (userData) {
      const { response, timestamp } = JSON.parse(userData);
      if (!timestamp) {
        signOut();
        return;
      }
      if (Date.now() - timestamp > 86400000) {
        signOut();
        return;
      }
      setUser(response);
    }
    if (tokenData) {
      setToken(tokenData);
    }
  }, []);

  useEffect(() => {
    getSession();
  }, [getSession]);

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(token),
        user,
        login,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
