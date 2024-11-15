import { Input } from "@/components/Input";
import { Container, Form, FormTitle, Intro, IntroContainer, Logo, NewAccountContent, NewAccountTitle, SignInContent, SubTitle, Title } from "./styles";

import logoImg from "@/assets/logo.png";
import { Button } from "@/components/Button";

export function SignIn() {
  return(
    <Container >
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
        />
      </NewAccountContent>
    </Container>
  )
}