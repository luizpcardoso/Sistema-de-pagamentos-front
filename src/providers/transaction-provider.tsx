import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface TransactionsProviderData {
  transactions: [];
  refreshTransaction: () => void;
  transactionSend: (data: DataTransaction) => void;
}
interface TransactionProps {
  children: ReactNode;
}
interface ITransaction {
  type: string;
}
interface DataTransaction {
  username: string;
  value: string;
}
interface Itransactions {
  createdAt: Date;
}

export const TransactionContext = createContext<TransactionsProviderData>(
  {} as TransactionsProviderData
);

export const TransactionsProvider = ({ children }: TransactionProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@challenge:token") || ""
  );

  const [transactions, setTransactions] = useState<[]>([]);
  const [usersAll, setUsersAll] = useState([]);

  const transactionSend = async (data: DataTransaction) => {
    const token = localStorage.getItem("@apppay:token");
    await api
      .post("/api/pay", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          throw new Error();
        }
        toast.success("Quantia enviada com sucesso!");
        refreshTransaction();
      })
      .catch((error) => toast.error("Erro no pagamento"));
  };

  const refreshTransaction = () => {
    const token = localStorage.getItem("@apppay:token");
    api
      .get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const cashIn = response.data.cashIn.map((e: { type: string }) => {
          return { ...e, type: "cashIn" };
        });

        const cashOut = response.data.cashOut.map((e: { type: string }) => {
          return { ...e, type: "cashOut" };
        });

        const allTransactions: any = [...cashIn, ...cashOut].sort(
          (a: any, b: any) => {
            let c = new Date(b.createdAt) as Date;
            let d = new Date(a.createdAt) as Date;

            return c.getTime() - d.getTime();
          }
        );

        setTransactions([...allTransactions] as []);
      })
      .catch((error) => console.log("Problema na busca"));
  };

  useEffect(() => {
    refreshTransaction();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, refreshTransaction, transactionSend }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
