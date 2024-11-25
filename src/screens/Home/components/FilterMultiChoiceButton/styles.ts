import { Pressable } from "react-native";
import styled from "styled-components/native";

export type ChoiceButtonVariantStyleProps = 'ACTIVE' | 'DISABLED'

type ChoiceButtonStyleProps = {
  variant: ChoiceButtonVariantStyleProps
}

export const Container = styled(Pressable)<ChoiceButtonStyleProps>`
  flex-direction: row;
  gap: 6px;
  padding: ${({variant}) => 
  variant === 'ACTIVE' ? "6px 6px 6px 16px" : "6px 16px 6px 16px"} ;
  justify-content: center;
  align-items: center;
  
  border-radius: 999px;
  background-color: ${({theme, variant}) => 
  variant === 'DISABLED' ? theme.COLORS.GRAY_500 : theme.COLORS.BLUE_LIGHT};
`

export const Title = styled.Text<ChoiceButtonStyleProps>`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XS}px;
  color: ${({theme, variant}) => 
  variant === 'ACTIVE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};
`;

export const DisableButton = styled.View`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 999px;
`;