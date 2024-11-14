import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`

export const SignInContent = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  gap: 54px;
  padding: 65px 48px 65px 48px;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const IntroContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 96px;
  height: 64px;

  margin-bottom: 12px;
`;

export const Intro = styled.View`
  gap: 2px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XLG}px;
  color: ${({theme}) => theme.COLORS.GRAY_100};

  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
`;

export const Form = styled.View`
  width: 100%;
  gap: 16px;
`;

export const FormTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};

  text-align: center;
`;

export const NewAccountContent = styled.View`
  margin: 65px 48px 0px 48px;
  gap: 16px;
`;

export const NewAccountTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};

  text-align: center;
`;