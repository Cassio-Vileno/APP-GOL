import React from "react";
import { Modal, ModalProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import ButtonPrimary from "../../molecules/ButtonPrimary";
import {
  ButtonContainer,
  Container,
  Content,
  Overlay,
  Subtitle,
  Title,
} from "./styles";

type DialogProps = ModalProps & {
  visible?: boolean;
  title?: string;
  subtitle?: string | string[];
  buttonText?: string;
  buttonPress?: () => void;
  close: () => void;
  buttonColor?: string;
  buttonBack?: boolean;
};

export default function Dialog({
  visible,
  title,
  subtitle,
  buttonText,
  buttonPress,
  buttonBack,
  buttonColor,
  close,
  ...rest
}: DialogProps): JSX.Element {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      statusBarTranslucent
      {...rest}
    >
      <Overlay activeOpacity={1} onPress={() => close()}>
        <Container>
          <Content>
            <Title>{title}</Title>
            {!Array.isArray(subtitle) ? (
              <Subtitle>{subtitle}</Subtitle>
            ) : (
              subtitle.map((item: string) => (
                <Subtitle key={item}>{item}</Subtitle>
              ))
            )}
            <ButtonContainer>
              {buttonBack && (
                <ButtonPrimary
                  width="40%"
                  backgroundColor={theme.button.backgroundColor.disabled}
                  onPress={() => close()}
                >
                  Voltar
                </ButtonPrimary>
              )}
              {buttonPress && (
                <ButtonPrimary
                  width={buttonBack ? "45%" : "100%"}
                  backgroundColor={buttonColor}
                  onPress={buttonPress}
                >
                  {buttonText}
                </ButtonPrimary>
              )}
            </ButtonContainer>
          </Content>
        </Container>
      </Overlay>
    </Modal>
  );
}
