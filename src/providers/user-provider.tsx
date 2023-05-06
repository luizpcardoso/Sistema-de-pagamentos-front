import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

interface DataLogin {
  email: string;
  password: string;
}
interface DataRegister {
  email: string;
  password: string;
  username: string;
}

interface UserProviderData {
  login: (data: DataLogin) => void;
  registerUser: (data: DataRegister) => void;
  logOut: () => void;
  balance: string;
  usersAll: any;
  getBalance: () => void;
}

interface Decoded {
  username: string;
}
interface UserProps {
  children: ReactNode;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState<string>("");
  const [usersAll, setUsersAll] = useState([]);
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@apppay:token") || ""
  );

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const login = async (data: DataLogin) => {
    await api
      .post("/api/login", data)
      .then((response) => {
        const token = response.data.token;
        if (!token) {
          throw new Error("Insira as credenciais corretamente");
        }
        localStorage.setItem("@apppay:token", token);
        setAuthToken(token);
        toast.success("Login efetuado com sucesso");
        navigate("/dashboard");

        const decoded = jwtDecode(token) as Decoded;
        localStorage.setItem("@apppay:username", decoded.username);
      })
      .catch(() => toast.error("Nome de usuário ou senha inválidos"));
  };

  const registerUser = async (data: DataRegister) => {
    await api
      .post("/api/user", data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Registro efetuado com sucesso");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(`Error:${error.response.data.message}`);
      });
  };

  const getBalance = async () => {
    await api
      .get("/api/balance", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const balance = response.data.balance;
        setBalance(balance);
      })
      .catch(() => console.log("Problema na busca do balanço"));
  };

  const getAllUsers = async () => {
    await api
      .get("/api/users", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const users = response.data;
        setUsersAll(users);
      })
      .catch(() => console.log("Problema na busca do balanço"));
  };

  useEffect(() => {
    getBalance();
    getAllUsers();
  }, [authToken]);

  return (
    <UserContext.Provider
      value={{ login, registerUser, logOut, balance, usersAll, getBalance }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
