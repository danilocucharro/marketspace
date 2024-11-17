import { Container, Form, FormTitle, Intro, IntroContainer, Logo, NewAccountContent, NewAccountTitle, SignInContent, SubTitle, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import logoImg from "@/assets/logo.png";
import { AuthNavigatorRoutesProps } from "@/routes/auth.routes";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleCreateNewAccount() {
    navigation.navigate("signUp")
  }

  return(
    <Container>
      <SignInContent>
        <IntroContainer>
          <Logo source={logoImg} alt="logo marketspace" />

          <Intro>
            <Title>Marketspace</Title>
            <SubTitle>Seu espaço de compra e venda</SubTitle>
          </Intro>
        </IntroContainer>

        <Form>
          <FormTitle>Acesse sua conta</FormTitle>
          <Input 
            placeholder="E-mail"
          />
          <Input 
            placeholder="Senha"
            secureTextEntry
          />
        </Form>

        <Button
          title="Entrar"
          variant="BLUE"
        />
      </SignInContent>

      <NewAccountContent>
        <NewAccountTitle>Ainda não tem acesso?</NewAccountTitle>

        <Button 
          title="Criar uma conta"
          variant="GRAY"
          onPress={handleCreateNewAccount}
        />
      </NewAccountContent>
    </Container>
  )
}