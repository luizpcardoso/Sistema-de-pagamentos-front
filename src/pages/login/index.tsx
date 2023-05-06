import { Container } from "./style";
import { Input } from "../../components/inputs";
import { Button } from "../../components/button";
import { loginSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user-provider";
import { useNavigate } from "react-router-dom";

interface Data {
  email: string;
  password: string;
}

export const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: Data) => {
    await login(data);

    console.log(data);
  };
  return (
    <Container>
      <section>
        <h1>Login</h1>
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
              placeholder="senha..."
              label="Senha:"
              type="password"
              register={register}
              name="password"
            />
          </div>
          {errors.password || errors.email ? (
            <p>Preencha todos os campos corretamente</p>
          ) : (
            ""
          )}
          <div className="button-content">
            <Button
              width="100%"
              height="50px"
              backgroundColor="#2CC1A2"
              type="submit"
              content="Entrar"
              fontColor="#ffffff"
            ></Button>
            <span
              onClick={() => {
                navigate("/register");
              }}
            >
              Não pussuo conta...
            </span>
          </div>
        </form>
      </section>
    </Container>
  );
};
