import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import ButtonPrimary from "../../components/molecules/ButtonPrimary";
import InputBirthDate from "../../components/molecules/InputBirthDate";
import InputCellphone from "../../components/molecules/InputCellphone";
import InputCPF from "../../components/molecules/InputCPF";
import InputEmail from "../../components/molecules/InputEmail";
import InputPassword from "../../components/molecules/InputPassword";
import InputSelect from "../../components/molecules/InputSelect";
import InputText from "../../components/molecules/InputText";
import { useDialog } from "../../hooks/useDialog";
import { theme } from "../../theme/default.theme";
import images from "../../utils/images";
import { isBirthdayValid } from "../../utils/isBirthdayValid";
import onlyNumbers from "../../utils/onlyNumbers";
import { validateCPF } from "../../utils/validadteCPF";
import {
  Container,
  ContaionerButton,
  Content,
  Image,
  LineSeparation,
} from "./styles";

export default function SignUp(): JSX.Element {
  const { openDialog, closeDialog } = useDialog();
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(values: any) {
    if (values.cpf) {
      const CPFisValid = validateCPF(values.cpf);
      if (!CPFisValid) {
        setError("cpf", { message: "CPF invalido" });
        return;
      }
    }
    if (!isBirthdayValid(values.birth_date)) {
      setError("birth_date", { message: "Data invalida" });
      return;
    }
    try {
      const birth_date = values.birth_date.split("/").reverse().join("-");
      if (values.cpf) {
        const cpf = onlyNumbers(values.cpf || "");
      }
    } catch (err: any) {
      openDialog({
        title: "Ops, desculpe",
        subtitle:
          err?.response?.data?.msg || err?.msg || "Ocorreu um erro inesperado",
        buttonText: "Tentar novamente",
        buttonPress: () => {
          closeDialog();
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Row mt={20} mb={22}>
        <Image resizeMode="contain" source={images.logo} />
      </Row>
      <Content>
        <LineSeparation>
          <Paragraph size={12} color={theme.color.gray300}>
            Dados pessoais
          </Paragraph>
        </LineSeparation>
        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="fist_name"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputText
              placeholder="Primeiro Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.fist_name}
              autoCapitalize="words"
            />
          )}
        />
        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="last_name"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputText
              placeholder="Último Sobrenome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.last_name}
              autoCapitalize="words"
            />
          )}
        />
        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="birth_date"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputBirthDate
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.birth_date}
              placeholder="Data de nascimento"
              editable={true}
            />
          )}
        />
        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="gender"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              items={[
                { label: "Masculino", value: "M" },
                { label: "Feminino", value: "F" },
                { label: "Prefiro não dizer", value: "any" },
              ]}
              placeholder="Sexo"
              value={value}
              onChangeText={onChange}
              error={errors.gender}
            />
          )}
        />

        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="ddi"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              items={[
                { label: "Brasil", value: "+55" },
                { label: "Estados Unidos", value: "+1" },
                { label: "China", value: "+86" },
                { label: "Japão", value: "+81" },
              ]}
              placeholder="DDI"
              value={value}
              onChangeText={onChange}
              error={errors.ddi}
            />
          )}
        />
        <Controller
          rules={{
            required: { value: true, message: "Campo obrigatório" },
            minLength: { value: 15, message: "Mínimo 15 caracteres" },
          }}
          control={control}
          name="phone_number"
          render={({ field: { onChange, value } }) => (
            <InputCellphone
              placeholder="Celular"
              value={value}
              onChangeText={onChange}
              error={errors.phone_number}
            />
          )}
        />
        <LineSeparation>
          <Paragraph size={12} color={theme.color.gray300}>
            Dados de documentação
          </Paragraph>
        </LineSeparation>

        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="document_type"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              items={[
                { label: "CPF", value: "cpf" },
                { label: "Registro Geral (RG)", value: "rg" },
                { label: "Passport", value: "passport" },
              ]}
              placeholder="Tipo de documento"
              value={value}
              onChangeText={onChange}
              error={errors.document_type}
            />
          )}
        />
        <Controller
          name="cpf"
          control={control}
          rules={{
            required: { value: true, message: "Campo obrigatório" },
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputCPF
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.cpf}
              placeholder="CPF"
            />
          )}
        />
        <LineSeparation>
          <Paragraph size={12} color={theme.color.gray300}>
            Login
          </Paragraph>
        </LineSeparation>

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
        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <InputPassword
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                error={errors.password}
              />
            </>
          )}
        />
        <Controller
          rules={{ required: { value: true, message: "Campo obrigatório" } }}
          name="confirm_password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputPassword
              placeholder="Confirmar senha"
              onChangeText={onChange}
              value={value}
              error={errors.password}
            />
          )}
        />
      </Content>
      {!isKeyboardVisible && (
        <Row mb={25}>
          <ContaionerButton>
            <ButtonPrimary
              width="48%"
              backgroundColor={theme.color.gray300}
              onPress={() => navigation.navigate("YOURACCOUNT")}
              loading={loading}
            >
              Voltar
            </ButtonPrimary>
            <ButtonPrimary
              width="48%"
              onPress={handleSubmit(onSubmit)}
              loading={loading}
            >
              Cadastrar
            </ButtonPrimary>
          </ContaionerButton>
        </Row>
      )}
    </Container>
  );
}
