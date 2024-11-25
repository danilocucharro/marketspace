import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ProductDetailsContainer = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const ProductPhoto = styled.Image`
  width: 100%;
  height: 280px;
`;

export const ProductInfoContent = styled.View`
  width: 100%;
  padding: 20px 24px 24px 24px;
  gap: 24px;
`;

export const UserInfoContent = styled.View`
  flex-direction: row;

  align-items: center;
  gap: 8px;
`;

export const TextInfo = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const ProductDescriptionContent = styled.View`
  gap: 8px;
`;

export const ProductTagInfo = styled.View`
  flex-direction: row;
  max-width: 43px;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 999px;
`;

export const TagText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: 10px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const ProductTitleText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const ProductPriceText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
`;

export const ProductInfoPaymentContent = styled.View`
  gap: 16px;
`;

export const ProductSubTitleText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const ProductPaymentMethods = styled.View`
  gap: 8px;
`;

export const ProductContactArea = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 20px 24px 28px 24px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;