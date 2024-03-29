import { ReactNode } from "react";
import { UserProvider } from "./user-provider";
import { TransactionsProvider } from "./transaction-provider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <TransactionsProvider>
      <UserProvider>{children}</UserProvider>
    </TransactionsProvider>
  );
};

export default Providers;
