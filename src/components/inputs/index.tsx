import { Container } from "./style";

interface Iprops {
  width: string;
  backgroundColor: string;
  height: string;
  label?: string;
  placeholder?: string;
  type: string;
  register: any;
  name: string;
  fontColor?: string;
}

export const Input = (props: Iprops) => {
  return (
    <Container
      width={props.width}
      backgroundColor={props.backgroundColor}
      height={props.height}
      fontColor={props.fontColor}
    >
      <label>
        {props.label}
        <input
          placeholder={props.placeholder}
          type={props.type}
          {...props.register(props.name)}
        ></input>
      </label>
    </Container>
  );
};
