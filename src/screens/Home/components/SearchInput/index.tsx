import { Container, Divider, SearchButtonContent } from "./styles";

import { Input } from "@/components/Input";

import { MagnifyingGlass, Sliders } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

type SearchInputProps = {
  onPressFilter: () => void;
  onPressSearch: () => void;
}

export function SearchInput({ onPressFilter, onPressSearch }: SearchInputProps) {
  const { COLORS } = useTheme()

  return(
    <Container>
      <Input 
        style={{
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          flex: 1
        }}
        placeholder="Buscar anúncio"
      />
      <SearchButtonContent>
        <TouchableOpacity onPress={onPressSearch}>
          <MagnifyingGlass color={COLORS.GRAY_200} size={20} />
        </TouchableOpacity>

        <Divider />
        
        <TouchableOpacity onPress={onPressFilter}>
          <Sliders color={COLORS.GRAY_200} size={20} />
        </TouchableOpacity>
      </SearchButtonContent>
    </Container>
  )
}