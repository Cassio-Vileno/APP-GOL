import React, { useState } from "react";
import { TextInputProps, View } from "react-native";
import { theme } from "../../../theme/default.theme";
import { icons } from "../../../utils/icons";
import { Icon } from "../../atoms/Icon";
import { Paragraph } from "../../atoms/Paragraph";
import Row from "../../atoms/Row";
import ButtonPrimary from "../../molecules/ButtonPrimary";
import ModalInput from "../ModalInput";
import {
  ButtonCounter,
  Container,
  Error,
  IconTravelers,
  ItemTravelers,
  ItemTravelersContent,
} from "./styles";

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

  const onSubmit = () => {
    onChangeText({
      Adult: countAdult,
      Child: countChild,
      Baby: countBaby,
    });
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
                  countChild & countAdult ? `,` : ""
                }${countChild ? ` ${countChild} Criança(s)` : ""}${
                  countBaby ? `,  ${countBaby} Bebê(s)` : ""
                }`
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
            <ButtonCounter disabled={countAdult == 0} onPress={decrementAdult}>
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
            <ButtonCounter disabled={countChild == 0} onPress={decrementChild}>
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
            <ButtonCounter disabled={countBaby == 0} onPress={decrementBaby}>
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
          <ButtonPrimary onPress={() => onSubmit()}>Continuar</ButtonPrimary>
        </Row>
      </ModalInput>
      <Error>{error?.message}</Error>
    </>
  );
}
