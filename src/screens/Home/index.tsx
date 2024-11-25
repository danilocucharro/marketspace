import { CheckBoxText, Container, Form, FormLabel, InfoText, ModalContainer, ModalContent, ModalHeader, ModalTitle, MyAdsCounter, MyAdsData, MyAdsDataContent, MyAdsInfo, MyAdsInfoCard, ProductsSession, SearchProductsContent, SendFormContent } from "./styles";
import { Dimensions, Modal, ScrollView, Switch, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import CheckBox from "react-native-check-box";

import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ProductCard } from "@/components/ProductCard";

import { useTheme } from "styled-components/native";
import { ArrowRight, Tag, X } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/routes/app.routes";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FilterMultiChoiceButton } from "./components/FilterMultiChoiceButton";
import { Button } from "@/components/Button";

export function Home() {
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false)

  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme()
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>

  const windowHeight = Dimensions.get('window').height

  function handleOpenBottomModal() {
    setIsBottomModalOpen(true)
  }

  function handleCloseBottomModal() {
    setIsBottomModalOpen(false)
  }

  function handleOpenProductDetails() {
    navigation.navigate("productDetails")
  }

  return(
    <Container>
      <Header />

      <MyAdsInfo>
        <InfoText>Seus produtos anunciados para venda </InfoText>

        <MyAdsInfoCard>
          <MyAdsDataContent>
            <Tag size={20} color={COLORS.BLUE} />

            <MyAdsData>
              <MyAdsCounter>4</MyAdsCounter>
              <InfoText style={{fontSize: 12, color: COLORS.GRAY_200}}>
                anúncios ativos
              </InfoText>
            </MyAdsData>
          </MyAdsDataContent>

          <TouchableOpacity style={{flexDirection: "row", justifyContent: "center"}}>
            <InfoText style={{
              fontFamily: FONT_FAMILY.BOLD,
              fontSize: FONT_SIZE.XS,
              color: COLORS.BLUE,
              marginRight: 6
            }}>
              Meus anúncios
            </InfoText>
            <ArrowRight color={COLORS.BLUE} size={16} />
          </TouchableOpacity>
        </MyAdsInfoCard>
      </MyAdsInfo>

      <SearchProductsContent>
        <InfoText>Compre produtos variados</InfoText>
            
        <SearchInput onPressFilter={handleOpenBottomModal} onPressSearch={() => null}/>
      </SearchProductsContent>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductsSession>
          <ProductCard onPress={handleOpenProductDetails}/>
          <ProductCard onPress={handleOpenProductDetails}/>
          <ProductCard onPress={handleOpenProductDetails}/>
          <ProductCard onPress={handleOpenProductDetails}/>
          <ProductCard onPress={handleOpenProductDetails}/>
          <ProductCard onPress={handleOpenProductDetails}/>
        </ProductsSession>
      </ScrollView>
      <Modal
        animationType="fade"
        visible={isBottomModalOpen}
        onRequestClose={handleCloseBottomModal}
        transparent={true}
      >
        <ModalContainer>
          <ModalContent style={{height: windowHeight * 0.6}}>
            <ModalHeader>
              <ModalTitle>Filtrar anúncios</ModalTitle>

              <TouchableOpacity onPress={handleCloseBottomModal}>
                <X size={20} color={COLORS.GRAY_400}/>
              </TouchableOpacity>
            </ModalHeader>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Form>
                <View style={{gap: 12, alignItems: "flex-start"}}>
                  <FormLabel>Condição</FormLabel>

                  <View style={{flexDirection: "row", gap: 6}}>
                    <FilterMultiChoiceButton title="NOVO" status="ACTIVE"/>
                    <FilterMultiChoiceButton title="USADO" status="DISABLED"/>
                  </View>
                </View>

                <View style={{gap: 12}}>
                  <FormLabel>Aceita troca?</FormLabel>

                  <Switch 
                    trackColor={{false: COLORS.GRAY_500, true: COLORS.BLUE_LIGHT}}
                    ios_backgroundColor={COLORS.GRAY_500}
                    thumbColor={COLORS.WHITE}
                    value={false}
                    style={{alignSelf: "flex-start"}}
                  />
                </View>

                <View style={{gap: 12, alignItems: "flex-start"}}>
                  <FormLabel>Meios de pagamento</FormLabel>

                  <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                    <CheckBox />
                    <CheckBoxText>Boleto</CheckBoxText>
                  </View>

                  <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                    <CheckBox />
                    <CheckBoxText>Pix</CheckBoxText>
                  </View>

                  <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                    <CheckBox />
                    <CheckBoxText>Dinheiro</CheckBoxText>
                  </View>

                  <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                    <CheckBox />
                    <CheckBoxText>Cartão de Crédito</CheckBoxText>
                  </View>

                  <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                    <CheckBox />
                    <CheckBoxText>Depósito Bancário</CheckBoxText>
                  </View>
                </View>
              </Form>

              <SendFormContent>
                <Button title="Resetar filtros" variant="GRAY" style={{flex: 1}} />
                <Button title="Aplicar filtros" variant="BLACK" style={{flex: 1}} />
              </SendFormContent>
            </ScrollView>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  )
}