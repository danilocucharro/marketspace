import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonVariantStyleProps = 'BLUE' | 'BLACK' | 'GRAY'

type ButtonStyleProps = {
  variant: ButtonVariantStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  width: 100%;
  height: 42px;
  padding: 12px;
  gap: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme, variant}) => {
    if(variant === 'BLACK') return theme.COLORS.GRAY_100
    if(variant === 'BLUE') return theme.COLORS.BLUE_LIGHT
    if(variant === 'GRAY') return theme.COLORS.GRAY_500
  }};
  border-radius: 6px;
`;

export const Title = styled.Text<ButtonStyleProps>`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme, variant}) => 
    variant === 'GRAY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700
  };
`;