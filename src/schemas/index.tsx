import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
  password: yup.string().required("A senha é obrigatória"),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("E-mail inválido"),
  password: yup.string().required("A senha é obrigatória"),
  username: yup.string().required("O username é obrigatório"),
});

export const paySchema = yup.object().shape({
  username: yup
    .object({})
    .typeError("insira um usuário válido")
    .required("usuário obrigatório"),
  value: yup
    .number()
    .typeError("insira um valor numérico")
    .required("Valor obrigatório"),
});
