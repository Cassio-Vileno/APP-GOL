import React, { useEffect, useState } from "react";
import { View, TextInputProps } from "react-native";
import { Error, Container } from "./styles";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../../atoms/Paragraph";
import { Icon } from "../../atoms/Icon";
import ModalCitys from "../ModalCitys";
import Row from "../../atoms/Row";
import ModalInput from "../ModalInput";
import CalendarComponent from "../../atoms/Calendar";
import { DateMaskBR } from "../../../utils/mask";
import ButtonPrimary from "../../atoms/ButtonPrimary";

export type FormFieldSelectProps = TextInputProps & {
  placeholder: string;
  value?: string;
  minDate?: string;
  onChangeText?: any;
  touched?: any;
  error?: any;
  width?: string;
};

export default function InputCalendar({
  error,
  touched,
  minDate,
  onChangeText,
  placeholder,
  value,
  ...rest
}: FormFieldSelectProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [valueReceived, setValueReceived] = useState("");

  const close = () => {
    setVisible(false);
  };

  return (
    <>
      <Row ml={5}>
        <Paragraph
          size={11}
          fontFamily="Poppins_400Regular"
          color={theme.color.NeutralGra}
        >
          {placeholder}
        </Paragraph>
      </Row>
      <Container onPress={() => setVisible(true)} {...rest}>
        <View>
          <Paragraph
            size={theme.input.size}
            fontFamily="Poppins_400Regular"
            color={
              value || selectedValue
                ? theme.input.placeholderColor
                : theme.input.neutralGray
            }
          >
            {selectedValue || value
              ? valueReceived || DateMaskBR(selectedValue || "")
              : placeholder || "Selecione uma opção"}
          </Paragraph>
        </View>
        <Icon name="chevron-down" color={theme.color.Orange100} size={25} />
      </Container>
      <ModalInput close={() => close()} isVisible={visible}>
        <Paragraph size={18}>Escolha a data</Paragraph>
        <CalendarComponent
          date={selectedValue || ""}
          minDate={minDate}
          handleSetDate={(e) => {
            setSelectedValue(e);
            onChangeText(e);
          }}
          onPress={() => close()}
        />
        <Row fd="row" jc="space-between">
          <ButtonPrimary
            width="48%"
            backgroundColor={theme.button.backgroundColor.disabled}
            onPress={() => close()}
          >
            Voltar
          </ButtonPrimary>
          <ButtonPrimary width="48%" onPress={() => close()}>
            Continuar
          </ButtonPrimary>
        </Row>
      </ModalInput>
      <Error>{error?.message}</Error>
    </>
  );
}
