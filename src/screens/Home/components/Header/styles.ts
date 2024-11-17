import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const UserInfo = styled.View`
  width: 55%;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
`;