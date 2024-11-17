import { Container, InfoText, MyAdsCounter, MyAdsData, MyAdsDataContent, MyAdsInfo, MyAdsInfoCard, ProductsSession, SearchProductsContent } from "./styles";
import { ScrollView, TouchableOpacity } from "react-native";

import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ProductCard } from "@/components/ProductCard";

import { useTheme } from "styled-components/native";
import { ArrowRight, Tag } from "phosphor-react-native";

export function Home() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme()

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
            
        <SearchInput />
      </SearchProductsContent>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductsSession>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsSession>
      </ScrollView>
    </Container>
  )
}