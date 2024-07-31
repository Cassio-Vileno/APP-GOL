import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "../../components/atoms/ButtonPrimary";
import InputText from "../../components/molecules/InputText";
import Row from "../../components/atoms/Row";
import { Container, ContainerButton, Content, ContentHeader } from "./styles";
import HeaderShow from "../../components/molecules/HeaderShow";
import { Keyboard } from "react-native";
import InputZipcode from "../../components/molecules/InputZipcode";
import { CepMask } from "../../utils/mask";
import onlyNumbers from "../../utils/onlyNumbers";
import CepService from "../../services/cep.service";

export default function SignUpAddress(): JSX.Element {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm();
  async function onSubmit(values: any) {
    console.log(values);
  }

  const handlerSearchZipcode = async (zipcode: any) => {
    if (zipcode.length !== 8) {
      return;
    }

    try {
      Keyboard.dismiss();
      const zipcodeOnlyNumbers = zipcode.replace(/\D/g, "");
      setLoading(true);
      const data = await CepService.findOneCep(zipcodeOnlyNumbers);
      setValue("cep", CepMask(data.cep));
      setValue("street", data.street);
      setValue("state", data.state);
      setValue("city", data.city);
      setValue("neighborhood", data.neighborhood);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <Container>
      <ContentHeader>
        <HeaderShow title="Alterar endereço" />
      </ContentHeader>
      <Content>
        <Row mt={20}>
          <Controller
            rules={{
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 9, message: "CEP incorreto" },
            }}
            control={control}
            name="cep"
            render={({ field: { onChange, value } }) => (
              <InputZipcode
                keyboardType="numeric"
                loading={loading}
                placeholder="CEP"
                onChangeText={onChange}
                onBlur={() => handlerSearchZipcode(onlyNumbers(value))}
                value={CepMask(value || "")}
                error={errors.cep}
                maxLength={9}
                autoCapitalize="words"
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{
              required: { value: true, message: "Campo obrigatório" },
            }}
            control={control}
            name="street"
            render={({ field: { onChange, value } }) => (
              <InputText
                title="Rua"
                placeholder="Rua"
                onChangeText={onChange}
                value={value}
                error={errors.street}
                autoCapitalize="words"
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{
              required: { value: true, message: "Campo obrigatório" },
            }}
            control={control}
            name="number"
            render={({ field: { onChange, value } }) => (
              <InputText
                title="Número"
                placeholder="Numero"
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                error={errors.number}
                autoCapitalize="words"
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{
              required: { value: true, message: "Campo obrigatório" },
            }}
            control={control}
            name="neighborhood"
            render={({ field: { onChange, value } }) => (
              <InputText
                title="Bairro"
                placeholder="Bairro"
                onChangeText={onChange}
                value={value}
                error={errors.neighborhood}
                autoCapitalize="words"
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{
              required: { value: true, message: "Campo obrigatório" },
            }}
            control={control}
            name="city"
            render={({ field: { onChange, value } }) => (
              <InputText
                title="Cidade"
                placeholder="Cidade"
                onChangeText={onChange}
                value={value}
                error={errors.city}
                autoCapitalize="words"
              />
            )}
          />
        </Row>
        <Row mt={0}>
          <Controller
            rules={{
              required: { value: true, message: "Campo obrigatório" },
            }}
            control={control}
            name="state"
            render={({ field: { onChange, value } }) => (
              <InputText
                title="Estado"
                placeholder="Estado"
                onChangeText={onChange}
                value={value}
                error={errors.state}
                autoCapitalize="words"
              />
            )}
          />
        </Row>
      </Content>
      {!isKeyboardVisible && (
        <ContainerButton>
          <ButtonPrimary
            width="45%"
            height="49"
            backgroundColor="#9d9fa0"
            onPress={() => navigation.goBack()}
          >
            Voltar
          </ButtonPrimary>
          <ButtonPrimary
            width="45%"
            height="49"
            onPress={handleSubmit(onSubmit)}
            loading={loading}
          >
            Salvar
          </ButtonPrimary>
        </ContainerButton>
      )}
    </Container>
  );
}
