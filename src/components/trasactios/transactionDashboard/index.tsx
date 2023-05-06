import { Container } from "./style";
import { TrasactionCard } from "../transactionCard";
import { useTransactions } from "../../../providers/transaction-provider";
import { useUser } from "../../../providers/user-provider";
import { useEffect, useState } from "react";
interface Iprops {
  setModal: any;
}

export const TrasactionDasBoard = (props: Iprops) => {
  const { transactions, transactionSend } = useTransactions();
  const { usersAll } = useUser();

  const [transactionMap, setTransactionMap] = useState<any[]>([]);

  useEffect(() => {
    const newTransactions = transactions.map((trans: any) => {
      const userFind = usersAll.find((user: any) => {
        if (trans.type === "cashIn") {
          return user.account.account_id === trans.debitedAccount.account_id;
        } else {
          return user.account.account_id === trans.creditedAccount.account_id;
        }
      });
      return { ...trans, username: userFind.username };
    });

    setTransactionMap(newTransactions);
  }, [transactionSend]);

  interface ITransiction {
    createdAt: string;
    transaction_id: string;
    value: number;
    type: string;
    username: string;
  }

  return (
    <Container>
      <header className="dashboardList-header">
        <p className="first">Usuário</p>
        <p>Data</p>
        <p className="end">Valor</p>
      </header>
      <ul>
        {transactionMap.map((transaction: ITransiction, index: number) => {
          return (
            <>
              <TrasactionCard
                date={new Date(transaction.createdAt) as Date}
                value={transaction.value as number}
                type={transaction.type as string}
                key={transaction.transaction_id + index}
                username={transaction.username}
              />
            </>
          );
        })}
      </ul>
      <footer>
        <button
          onClick={() => {
            props.setModal(true);
          }}
        >
          Pagar
        </button>
      </footer>
    </Container>
  );
};
