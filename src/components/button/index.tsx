import { ButtonContainer } from "./style";

interface Iprops {
  width: string;
  backgroundColor: string;
  height: string;
  label?: string;
  placeholder?: string;
  type?: any;
  content: string;
  fontColor: string;
}

export const Button = (props: Iprops) => {
  return (
    <ButtonContainer
      width={props.width}
      backgroundColor={props.backgroundColor}
      height={props.height}
      type={props.type}
      fontColor={props.fontColor}
    >
      {props.content}
    </ButtonContainer>
  );
};
