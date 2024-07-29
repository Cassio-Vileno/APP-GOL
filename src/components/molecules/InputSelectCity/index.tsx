import React, { useEffect, useState } from "react";
import { View, TextInputProps } from "react-native";
import { Error, Container } from "./styles";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../../atoms/Paragraph";
import { Icon } from "../../atoms/Icon";
import ModalCitys from "../ModalCitys";
import Row from "../../atoms/Row";

export type FormFieldSelectProps = TextInputProps & {
  placeholder: string;
  value?: string;
  onChangeText?: any;
  touched?: any;
  error?: any;
  width?: string;
};

export default function InputSelectCity({
  error,
  touched,
  onChangeText,
  placeholder,
  value,
  ...rest
}: FormFieldSelectProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [valueReceived, setValueReceived] = useState("");

  const handleSelect = (item: any) => {
    onChangeText(item.value);
    setSelectedValue(item.city);
    setVisible(false);
  };

  useEffect(() => {
    if (value) {
      setValueReceived(value);
    }
  }, []);

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
              ? valueReceived || selectedValue
              : placeholder || "Selecione uma opção"}
          </Paragraph>
        </View>
        <Icon name="chevron-down" color={theme.color.Orange100} size={25} />
      </Container>
      <ModalCitys
        value={selectedValue || ""}
        setLocation={(e: any) => handleSelect(e)}
        close={() => setVisible(false)}
        isVisible={visible}
      />
      <Error>{error?.message}</Error>
    </>
  );
}
