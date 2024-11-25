import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px 24px 0px 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  gap: 32px;
`;

export const MyAdsInfo = styled.View`
  width: 100%;
  gap: 12px;
`;

export const InfoText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
`;

export const MyAdsInfoCard = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 12px 20px 12px 16px;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  background-color: #C7DAE8;
`;

export const MyAdsDataContent = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const MyAdsData = styled.View``;

export const MyAdsCounter = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const SearchProductsContent = styled.View`
  width: 100%;
  gap: 12px;
`;

export const ProductsSession = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: 100%;
  padding: 48px 24px 32px 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const ModalHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Form = styled.View`
  width: 100%;
  gap: 24px;
  margin-bottom: 64px;
`;

export const FormLabel = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const CheckBoxText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const SendFormContent = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`;