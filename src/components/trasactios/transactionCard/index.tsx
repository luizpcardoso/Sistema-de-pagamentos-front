import { Container } from "./style";

interface Iprops {
  date: Date;
  value: number;
  type: string;
  username?: string;
}

export const TrasactionCard = (props: Iprops) => {
  return (
    <Container>
      <p className="first">@{props.username}</p>
      <p>{`${props.date.getDate()}/${props.date.getMonth()}/${props.date.getFullYear()}`}</p>
      <p className={props.type == "cashOut" ? "cashOut" : "cashIn"}>
        {props.type == "cashIn"
          ? `R$${Number(props.value).toFixed(2)}`
          : `-R$${Number(props.value).toFixed(2)}`}
      </p>
    </Container>
  );
};
