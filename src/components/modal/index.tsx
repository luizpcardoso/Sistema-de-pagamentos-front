import { Container } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";

import { useTransactions } from "../../providers/transaction-provider";

import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../inputs";

import Select from "react-select";
import { useEffect, useState } from "react";
import { useUser } from "../../providers/user-provider";
import { Button } from "../button";

import { paySchema } from "../../schemas";

interface Data {
  username: string;
  value: string;
}

export const ModalPay = ({ handdleOpen, setHandleOpenModal }: any) => {
  const [inputValue, setInputValue] = useState("");
  const { usersAll } = useUser();
  const [options, setOptions] = useState([]);

  const { transactionSend } = useTransactions();
  const { getBalance, balance } = useUser();

  useEffect(() => {
    const newOptions = usersAll.map((user: any) => ({
      value: user.username,
      label: user.username,
    }));
    setOptions(newOptions);
  }, [usersAll]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "60px",
    }),
  };

  const filterOptions = (inputValue: any) => {
    const filteredOptions = options.filter((option: any) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredOptions.slice(0, 3);
  };

  const handleInputChange = (inputValue: any) => {
    setInputValue(inputValue);
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(paySchema),
  });

  const onSubmit = async (data: any) => {
    setHandleOpenModal(false);
    const dataSend = {
      username: data.username.value,
      value: data.value,
    };

    await transactionSend(dataSend);
    await getBalance();
    reset();
  };

  const handleSelectChange = (selectedOption: any) => {
    setValue("username", selectedOption ? selectedOption : "");
  };

  return (
    <Container
      style={handdleOpen == true ? { display: "flex" } : { display: "none" }}
    >
      <section>
        <AiFillCloseCircle
          className="buttonClose"
          onClick={() => {
            setHandleOpenModal(false);
            reset();
          }}
        />
        <h2>Pague um amigo!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-content">
            <Controller
              name="username"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  onInputChange={handleInputChange}
                  options={filterOptions(inputValue)}
                  placeholder="Digite algo..."
                  className="imputSelect"
                  onChange={handleSelectChange}
                />
              )}
            />

            <span>{errors.username ? errors.username.message : ""}</span>
            <Input
              width="100%"
              height="70px"
              backgroundColor="#ffffff"
              fontColor="#ffffff"
              placeholder="Quanto quer enviar?"
              label="Valor:"
              type="number"
              register={register}
              name="value"
            />
          </div>
          <span>{errors.value ? errors.value.message : ""}</span>
          <div className="button-content">
            <Button
              width="100%"
              height="50px"
              backgroundColor="#2CC1A2"
              type="submit"
              content="Pagar"
              fontColor="#ffffff"
            ></Button>
          </div>
        </form>
      </section>
    </Container>
  );
};
