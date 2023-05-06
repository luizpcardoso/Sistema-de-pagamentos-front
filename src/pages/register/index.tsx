import { Container } from "./style";
import { Input } from "../../components/inputs";
import { Button } from "../../components/button";
import { useUser } from "../../providers/user-provider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";

export const Register = () => {
  interface Data {
    email: string;
    password: string;
    username: string;
  }

  const { registerUser } = useUser();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Data>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: Data) => {
    console.log(data);

    await registerUser(data);
  };

  return (
    <Container>
      <section>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-content">
            <Input
              width="100%"
              height="70px"
              backgroundColor="#ffffff"
              placeholder="example@email.com"
              label="Email:"
              type="email"
              register={register}
              name="email"
            />
            <Input
              width="100%"
              height="70px"
              backgroundColor="#ffffff"
              placeholder="seuUsername"
              label="Username:"
              type="text"
              register={register}
              name="username"
            />
            <Input
              width="100%"
              height="70px"
              backgroundColor="#ffffff"
              placeholder="Sua senha forte..."
              label="Senha:"
              type="password"
              register={register}
              name="password"
            />
          </div>
          <div className="button-content">
            <Button
              width="100%"
              height="50px"
              backgroundColor="#2CC1A2"
              type="submit"
              content="Cadastrar"
              fontColor="#ffffff"
            ></Button>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Voltar à página de login...
            </span>
          </div>
        </form>
      </section>
    </Container>
  );
};
