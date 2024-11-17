import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ProductCardVariantStyleProps = 'OLD' | 'NEW'

type ProductCardStyleProps = {
  variant: ProductCardVariantStyleProps
}

export const Container = styled(TouchableOpacity)`
  max-width: 185px;
  gap: 4px;
  margin-bottom: 20px;
`;

export const ProductPhoto = styled(Image)`
  height: 100px;
  border-radius: 6px;
`;

export const ProductInfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  padding: 4px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProductInfoContent = styled.View<ProductCardStyleProps>`
  padding: 2px  8px;
  background-color: ${({theme, variant}) => 
  variant === 'NEW' ? theme.COLORS.BLUE : theme.COLORS.GRAY_200};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

export const ProductInfoStatus = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: 10px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const ProductName = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const ProductPrice = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
`;