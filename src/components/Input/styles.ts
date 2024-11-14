import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  height: 45px;
  gap: 8px;
  padding: 12px 16px 12px 16px;
  
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-radius: 6px;

  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
`;