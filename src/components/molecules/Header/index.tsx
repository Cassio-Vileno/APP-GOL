import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import { theme } from "../../../theme/default.theme";
import images from "../../../utils/images";
import { Icon } from "../../atoms/Icon";
import { Paragraph } from "../../atoms/Paragraph";
import { Container, LogoImg } from "./styles";

export default function Header(): JSX.Element {
  const { signed } = useAuth();
  const navigation = useNavigation<any>();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("HOME")}>
        <LogoImg resizeMode="contain" source={images.logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SUACONTA")}>
        {!signed ? (
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
