import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ButtonGhost } from "../../components/atoms/ButtonGhost";
import ButtonPrimary from "../../components/atoms/ButtonPrimary";
import InputEmail from "../../components/atoms/InputEmail";
import InputPassword from "../../components/atoms/InputPassword";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";

import images from "../../utils/images";
import {
  ButtonLoginWidth,
  ConatinerButtonRegister,
  Container,
  Content,
  Image,
} from "./styles";
import { theme } from "../../theme/default.theme";
import HeaderShow from "../../components/molecules/HeaderShow";
import { Icon } from "../../components/atoms/Icon";
import { useAuth } from "../../hooks/useAuth";

export default function Login(): JSX.Element {
  const navigation = useNavigation<any>();
  const { login, signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (credentials: any) => {
    try {
      setLoading(true);
      login(credentials);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <Image resizeMode="contain" source={images.logo} />
        <Row mt={0}>
          <Controller
            rules={{ required: { value: true, message: "Campo obrigatório" } }}
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <InputEmail
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                error={errors.email}
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{ required: { value: true, message: "Campo obrigatório" } }}
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputPassword
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                error={errors.password}
              />
            )}
          />
        </Row>
        <ConatinerButtonRegister>
          <ButtonLoginWidth>
            <Row mb={24} mt={10}>
              <ButtonPrimary
                loading={loading}
                textColor="#fff"
                onPress={handleSubmit(onSubmit)}
              >
                Entrar
              </ButtonPrimary>
            </Row>
          </ButtonLoginWidth>
        </ConatinerButtonRegister>
        <ButtonGhost
          color={theme.button.color.default}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Esqueceu a senha?
        </ButtonGhost>
        <Row my={20}>
          <ButtonGhost
            color={theme.button.color.default}
            onPress={() => navigation.navigate("SignUpOne")}
          >
            <Paragraph color="#9D9FA0" fontFamily="Poppins_500Medium" size={15}>
              Não tem uma conta?{" "}
            </Paragraph>
            Cadastre-se
          </ButtonGhost>
        </Row>
      </Content>
      <Row>
        <ButtonGhost
          width="180px"
          color={theme.button.color.default}
          onPress={() => {}}
        >
          Gerenciar idioma <Icon size={18} name="chevron-right" />
        </ButtonGhost>
      </Row>
    </Container>
  );
}
