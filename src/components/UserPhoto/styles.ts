import styled from "styled-components/native";

export type UserPhotoVariantStyleProps = 'BLUE' | 'WHITE'

type UserPhotoStyleProps = {
  variant: UserPhotoVariantStyleProps
}

export const Container = styled.Image<UserPhotoStyleProps>`
  width: 88px;
  height: 88px;

  border-radius: 999px;
  border: solid 3px ${({theme, variant}) => 
  variant === 'BLUE' ? theme.COLORS.BLUE_LIGHT : theme.COLORS.GRAY_700};
`;