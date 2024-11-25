import { X } from "phosphor-react-native";
import { ChoiceButtonVariantStyleProps, Container, DisableButton, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { PressableProps } from "react-native";

type FilterMultiChoiceButtonProps = PressableProps &{
  title: string;
  status: ChoiceButtonVariantStyleProps;
}

export function FilterMultiChoiceButton({title, status}: FilterMultiChoiceButtonProps) {
  const { COLORS } = useTheme()

  return(
    <Container variant={status}>
      <Title variant={status}>{title}</Title>

      {status === 'ACTIVE' &&
        <DisableButton>
          <X color={COLORS.BLUE_LIGHT} weight="bold" size={10}/>
        </DisableButton>
      }
    </Container>
  )
}