import { TouchableOpacity, View, Text, ScrollView } from "react-native";

import { ProductContactArea, ProductDescriptionContent, ProductDetailsContainer, ProductInfoContent, ProductInfoPaymentContent, ProductPaymentMethods, ProductPhoto, ProductPriceText, ProductSubTitleText, ProductTagInfo, ProductTitleText, TagText, TextInfo, UserInfoContent } from "./styles";

import { useTheme } from "styled-components/native";
import { ArrowLeft, Bank, Barcode, CreditCard, Money, QrCode, WhatsappLogo } from "phosphor-react-native";

import ProductImg from "@/assets/ProductBike.png"
import { UserPhoto } from "@/components/UserPhoto";
import { Button } from "@/components/Button";

export function ProductDetails() {
  const { COLORS } = useTheme()

  return(
    <ProductDetailsContainer>
      <TouchableOpacity style={{width: 24, height: 24, margin: 24}}>
        <ArrowLeft size={24} color={COLORS.GRAY_100} />
      </TouchableOpacity>

      <ScrollView>
        <ProductPhoto source={ProductImg} />

        <ProductInfoContent>
          <UserInfoContent>
            <UserPhoto variant="BLUE" style={{width: 24, height: 24, borderWidth: 2}} />

            <TextInfo>Makenna Baptista</TextInfo>
          </UserInfoContent>

          <ProductDescriptionContent>
            <ProductTagInfo>
              <TagText>NOVO</TagText>
            </ProductTagInfo>

            <View style={{
              flexDirection: "row", 
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <ProductTitleText>Bicicleta</ProductTitleText>

              <ProductPriceText>
                <Text style={{fontSize: 14}}>
                  R${' '}
                </Text>
                120,00
              </ProductPriceText>
            </View>

            <TextInfo>
              Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
            </TextInfo>
          </ProductDescriptionContent>

          <ProductInfoPaymentContent>
            <ProductSubTitleText>
              Aceita troca?{' '}
              <TextInfo>
                Sim
              </TextInfo>
            </ProductSubTitleText>

            <ProductPaymentMethods>
              <ProductSubTitleText>
                Meios de pagamento:
              </ProductSubTitleText>

              <View style={{gap: 4}}>
                <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                  <Barcode size={18} color={COLORS.GRAY_100} />
                  <TextInfo>Boleto</TextInfo>
                </View>

                <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                  <QrCode size={18} color={COLORS.GRAY_100} />
                  <TextInfo>Pix</TextInfo>
                </View>

                <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                  <Money size={18} color={COLORS.GRAY_100} />
                  <TextInfo>Dinheiro</TextInfo>
                </View>

                <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                  <CreditCard size={18} color={COLORS.GRAY_100} />
                  <TextInfo>Cartão de Crédito</TextInfo>
                </View>

                <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                  <Bank size={18} color={COLORS.GRAY_100} />
                  <TextInfo>Depósito Bancário</TextInfo>
                </View>
              </View>
            </ProductPaymentMethods>
          </ProductInfoPaymentContent>
        </ProductInfoContent>

        <ProductContactArea>
          <ProductPriceText style={{color: `${COLORS.BLUE}`, fontSize: 24}}>
            <Text style={{fontSize: 14}}>
              R${' '}
            </Text>
            120,00
          </ProductPriceText>

          <Button title="Entrar em contato" variant="BLUE" style={{maxWidth: 169}}>
            <WhatsappLogo size={16} color={COLORS.GRAY_600} weight="fill" />
          </Button>
        </ProductContactArea>
      </ScrollView>
    </ProductDetailsContainer>
  )
}