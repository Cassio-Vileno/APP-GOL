import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import { ButtonGhost } from "../../components/molecules/ButtonGhost";
import ButtonPrimary from "../../components/molecules/ButtonPrimary";
import InputEmail from "../../components/molecules/InputEmail";
import InputPassword from "../../components/molecules/InputPassword";

import { useAuth } from "../../hooks/useAuth";
import { theme } from "../../theme/default.theme";
import images from "../../utils/images";
import {
  ButtonLoginWidth,
  ConatinerButtonRegister,
  Container,
  Content,
  Image,
} from "./styles";

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
            onPress={() => navigation.navigate("SignUp")}
          >
            <Paragraph color="#9D9FA0" fontFamily="Poppins_500Medium" size={15}>
              Não tem uma conta?{" "}
            </Paragraph>
            Cadastre-se
          </ButtonGhost>
        </Row>
      </Content>
    </Container>
  );
}
