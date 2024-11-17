import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const SearchButtonContent = styled.View`
  flex-direction: row;
  padding: 12px 16px 12px 0px;
  gap: 12px;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Divider = styled.View`
  height: 18px;
  width: 1px;

  background-color: ${({theme}) => theme.COLORS.GRAY_400};
`;