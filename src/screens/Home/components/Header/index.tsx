import { Text } from "react-native";

import { UserPhoto } from "@/components/UserPhoto";
import { Button } from "@/components/Button";

import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Container, UserInfo, WelcomeText } from "./styles";

export function Header() {
  const { COLORS } = useTheme()

  return(
    <Container>
      <UserInfo>
        <UserPhoto variant="BLUE" style={{width: 45, height: 45}} alt="user photo" />

        <WelcomeText>
          Boas Vindas, {'\n'}
          <Text 
            style={{
              fontFamily: "Karla_700Bold",
              fontSize: 16,
            }}>
            Maria!
          </Text>
        </WelcomeText>
      </UserInfo>

      <Button title="Criar anúncio" variant="BLACK" style={{flex: 1}}>
        <Plus color={COLORS.GRAY_600} size={20} />
      </Button>
    </Container>
  )
}