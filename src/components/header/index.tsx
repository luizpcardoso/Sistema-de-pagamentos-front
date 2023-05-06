import { Container } from "./style";
import { IoMdAdd } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useUser } from "../../providers/user-provider";
import { useTransactions } from "../../providers/transaction-provider";
import { useEffect } from "react";

export const Header = () => {
  const username = localStorage.getItem("@apppay:username");
  const { logOut, balance } = useUser();

  const { transactionSend } = useTransactions();
  const { getBalance } = useUser();

  return (
    <Container>
      <div className="header-user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP4oKUXDbkuEQhaY-AMiOem8EaHZhBQglQQ&usqp=CAU" />
        <h2>@{username}</h2>
        <RiLogoutCircleLine className="logOutIcon" onClick={logOut} />
      </div>
      <div className="header-balance">
        <div>
          <span className="span-balance">Saldo:</span>
          <span>
            R${Number(balance).toFixed(2)}
            <IoMdAdd
              className="addIcon"
              onClick={() => {
                console.log("oioioi");
              }}
            />
          </span>
        </div>
      </div>
    </Container>
  );
};
