import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native";

import { ButtonVariantStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps &{
  children?: ReactNode;
  title: string;
  variant: ButtonVariantStyleProps
}

export function Button({ children, title, variant }: ButtonProps) {
  return(
    <Container variant={variant}>
      {children}
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}