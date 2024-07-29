import React, { useEffect, useState } from "react";
import { View, TextInputProps, Image } from "react-native";
import {
  Error,
  Container,
  ItemTravelers,
  IconTravelers,
  ButtonCounter,
  ItemTravelersContent,
} from "./styles";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../../atoms/Paragraph";
import { Icon } from "../../atoms/Icon";
import ModalCitys from "../ModalCitys";
import Row from "../../atoms/Row";
import ModalInput from "../ModalInput";
import CalendarComponent from "../../atoms/Calendar";
import { DateMaskBR } from "../../../utils/mask";
import ButtonPrimary from "../../atoms/ButtonPrimary";
import { icons } from "../../../utils/icons";

export type FormFieldSelectProps = TextInputProps & {
  placeholder: string;
  value?: string;
  onChangeText?: any;
  touched?: any;
  error?: any;
  width?: string;
};

export default function InputTravelers({
  error,
  touched,
  onChangeText,
  placeholder,
  value,
  ...rest
}: FormFieldSelectProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [countAdult, setCountAdult] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const [countBaby, setContBaby] = useState(0);

  const incrementBaby = () => {
    if (countAdult > countBaby) setContBaby((old) => old + 1);
  };

  const decrementBaby = () => {
    if (countBaby > 0) {
      setContBaby((old) => old - 1);
    }
  };

  const incrementChild = () => {
    if (countAdult + countChild < 9) setCountChild((old) => old + 1);
  };

  const decrementChild = () => {
    if (countChild > 0) {
      setCountChild((old) => old - 1);
    }
  };

  const incrementAdult = () => {
    if (countChild + countAdult < 9) setCountAdult((old) => old + 1);
  };

  const decrementAdult = () => {
    if (countAdult > 0) {
      setCountAdult((old) => old - 1);
    }
    if (countBaby >= countAdult) {
      setContBaby((old) => old - 1);
    }
  };

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
          <Paragraph size={theme.input.size} fontFamily="Poppins_400Regular">
            {countAdult | countChild | countBaby
              ? `${countAdult ? `${countAdult} Adulto(s)` : ""}${
                  countChild ? `,  ${countChild} Crianças(s)` : ""
                }${countBaby ? `,  ${countBaby} Bebê(s)` : ""}`
              : "Viajantes"}
          </Paragraph>
        </View>
        <Icon name="chevron-down" color={theme.color.Orange100} size={25} />
      </Container>
      <ModalInput close={() => close()} isVisible={visible}>
        <Paragraph size={18}>Viajantes</Paragraph>
        <ItemTravelers>
          <ItemTravelersContent>
            <IconTravelers source={icons.adult} />
            <Row>
              <Paragraph color={theme.color.Orange100}>Adulto</Paragraph>
              <Paragraph size={10}>+ de 12 anos</Paragraph>
            </Row>
          </ItemTravelersContent>
          <Row fd="row" gap={15} width={26}>
            <ButtonCounter onPress={decrementAdult}>
              <Paragraph fontFamily="Poppins_700Bold">-</Paragraph>
            </ButtonCounter>
            <Paragraph>{countAdult}</Paragraph>
            <ButtonCounter
              disabled={countAdult + countChild == 9}
              onPress={incrementAdult}
            >
              <Paragraph fontFamily="Poppins_700Bold">+</Paragraph>
            </ButtonCounter>
          </Row>
        </ItemTravelers>
        <ItemTravelers>
          <ItemTravelersContent>
            <IconTravelers source={icons.children} />
            <Row>
              <Paragraph color={theme.color.Orange100}>Criança</Paragraph>
              <Paragraph size={10}>2 a 11 anos</Paragraph>
            </Row>
          </ItemTravelersContent>
          <Row fd="row" gap={15} width={26}>
            <ButtonCounter onPress={decrementChild}>
              <Paragraph fontFamily="Poppins_700Bold">-</Paragraph>
            </ButtonCounter>
            <Paragraph>{countChild}</Paragraph>
            <ButtonCounter
              disabled={countAdult + countChild == 9}
              onPress={incrementChild}
            >
              <Paragraph fontFamily="Poppins_700Bold">+</Paragraph>
            </ButtonCounter>
          </Row>
        </ItemTravelers>
        <ItemTravelers>
          <ItemTravelersContent>
            <IconTravelers source={icons.baby} />
            <Row>
              <Paragraph color={theme.color.Orange100}>Bebê</Paragraph>
              <Paragraph size={10}>0 a 23 meses</Paragraph>
            </Row>
          </ItemTravelersContent>
          <Row fd="row" gap={15} width={26}>
            <ButtonCounter onPress={decrementBaby}>
              <Paragraph fontFamily="Poppins_700Bold">-</Paragraph>
            </ButtonCounter>
            <Paragraph>{countBaby}</Paragraph>
            <ButtonCounter
              disabled={countAdult == countBaby}
              onPress={incrementBaby}
            >
              <Paragraph fontFamily="Poppins_700Bold">+</Paragraph>
            </ButtonCounter>
          </Row>
        </ItemTravelers>

        <Row mt={30} fd="row" gap={10}>
          <ButtonPrimary onPress={() => close()}>Continuar</ButtonPrimary>
        </Row>
      </ModalInput>
      <Error>{error?.message}</Error>
    </>
  );
}
