import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px 48px 56px 48px;
  gap: 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const IntroContainer = styled.View`
  width: 100%;
  gap: 12px;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 40px;
`;

export const IntroTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XLG}px;
  color: ${({theme}) => theme.COLORS.GRAY_100}
`;

export const IntroSubTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};

  text-align: center;
`;

export const Form = styled.View`
  width: 100%;
  gap: 24px;
  align-items: center;
`;

export const EditPhotoButton = styled(TouchableOpacity)`
  padding: 12px;
  margin-top: -64px;
  margin-right: -64px;

  background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
  border-radius: 999px;
`;

export const AlreadyHaveAccountContent = styled.View`
  margin-top: 24px;
  gap: 16px;
`;

export const AlreadyHaveAccountTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};

  text-align: center;
`;