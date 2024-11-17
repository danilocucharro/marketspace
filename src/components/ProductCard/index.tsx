import { Text, TouchableOpacityProps } from "react-native";
import { Container, ProductInfoContainer, ProductInfoContent, ProductInfoStatus, ProductName, ProductPhoto, ProductPrice, ProductCardVariantStyleProps } from "./styles";

import { UserPhoto } from "../UserPhoto";

import ShoesImg from "@/assets/shoes.png"

type ProductCardProps = TouchableOpacityProps &{
  photo: string;
  name: string;
  price: string;
  infoStatus: ProductCardVariantStyleProps;
  userPhoto?: string;
}

export function ProductCard() {
  return(
    <Container>
      <ProductInfoContainer>
        <UserPhoto variant="WHITE" style={{borderWidth: 1, width: 24, height: 24}}/>

        <ProductInfoContent variant="NEW">
          <ProductInfoStatus>NOVO</ProductInfoStatus>
        </ProductInfoContent>
      </ProductInfoContainer>

      <ProductPhoto source={ShoesImg} />

      <ProductName>Tênis vermelho</ProductName>

      <ProductPrice>
        <Text style={{fontSize: 12}}>
          R${' '}
        </Text> 
        59,90
      </ProductPrice>
    </Container>
  )
}