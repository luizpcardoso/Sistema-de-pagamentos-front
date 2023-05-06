import { Container } from "./style";
import { Header } from "../../components/header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalPay } from "../../components/modal";
import { TrasactionDasBoard } from "../../components/trasactios/transactionDashboard";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [handleOpenModal, setHandleOpenModal] = useState(false);
  const token = localStorage.getItem("@apppay:token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      toast.error("Faça login para acessar esta página", {
        toastId: "loginError",
      });
    }
  }, [navigate, token]);

  return (
    <>
      <Header />
      <Container>
        <ModalPay
          handdleOpen={handleOpenModal}
          setHandleOpenModal={setHandleOpenModal}
        />
        <section>
          <TrasactionDasBoard setModal={setHandleOpenModal} />
        </section>
        <section></section>
      </Container>
    </>
  );
};
