import React from "react";
import { LogoImg, Container, Online } from "./styles";
import { Icon } from "../../atoms/Icon";
import { TouchableOpacity } from "react-native";
import images from "../../../utils/images";
import { Paragraph } from "../../atoms/Paragraph";
import { theme } from "../../../theme/default.theme";

export default function Header(): JSX.Element {
  const isLoged = false;
  return (
    <Container>
      <LogoImg resizeMode="contain" source={images.logo} />
      <TouchableOpacity onPress={() => {}}>
        {!isLoged ? (
          <Paragraph
            fontFamily="Poppins_600SemiBold"
            color={theme.color.NeutralGra}
          >
            Login
          </Paragraph>
        ) : (
          <Icon name="settings" color="#8C8C8C" size={30} />
        )}
      </TouchableOpacity>
    </Container>
  );
}
