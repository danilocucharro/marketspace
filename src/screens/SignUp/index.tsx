import { useNavigation } from "@react-navigation/native";

import { AlreadyHaveAccountContent, AlreadyHaveAccountTitle, Container, EditPhotoButton, Form, IntroContainer, IntroSubTitle, IntroTitle, Logo } from "./styles";

import { UserPhoto } from "@/components/UserPhoto";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { AuthNavigatorRoutesProps } from "@/routes/auth.routes";

import { PencilSimpleLine } from "phosphor-react-native";

import logoImg from "@/assets/logo.png"

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleBackToSignIn(){
    navigation.navigate("signIn")
  }

  return(
    <Container>
      <IntroContainer>
        <Logo source={logoImg} alt="marketspace logo" />

        <IntroTitle>Boas vindas!</IntroTitle>
        <IntroSubTitle>
          Crie sua conta e use o espaço para comprar {'\n'}
          itens variados e vender seus produtos
        </IntroSubTitle>
      </IntroContainer>

      <Form>
        <UserPhoto variant="BLUE" />
        <EditPhotoButton>
          <PencilSimpleLine size={16} color="white" />
        </EditPhotoButton>

        <Input 
          placeholder="Nome"
        />

        <Input 
          placeholder="E-mail"
        />

        <Input 
          placeholder="Telefone"
          keyboardType="number-pad"
        />

        <Input 
          placeholder="Senha"
          secureTextEntry
        />

        <Input 
          placeholder="Confirmar senha"
          secureTextEntry
        />

        <Button 
          title="Criar"
          variant="BLACK"
          style={{marginTop: 8}}
        />
      </Form>

      <AlreadyHaveAccountContent>
        <AlreadyHaveAccountTitle>Já tem uma conta?</AlreadyHaveAccountTitle>

        <Button 
          title="Ir para o login"
          variant="GRAY"
          onPress={handleBackToSignIn}
        />
      </AlreadyHaveAccountContent>
    </Container>
  )
}