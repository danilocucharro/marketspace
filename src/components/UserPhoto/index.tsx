import { ImageProps } from "react-native";
import { Container, UserPhotoVariantStyleProps } from "./styles";

type UserPhotoProps = ImageProps & {
  variant: UserPhotoVariantStyleProps
}

import defaultAvatarImg from "@/assets/default_avatar.png"

export function UserPhoto({variant}: UserPhotoProps) {
  return(
    <Container variant={variant} source={defaultAvatarImg} />
  )
}