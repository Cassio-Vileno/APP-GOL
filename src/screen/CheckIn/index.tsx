import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { ButtonCheckIn, Container, ContainerForm, Content } from "./styles";

import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import ButtonPrimary from "../../components/molecules/ButtonPrimary";
import HeaderShow from "../../components/molecules/HeaderShow";
import InputSelect from "../../components/molecules/InputSelect";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputText from "../../components/molecules/InputText";
import useDebounce from "../../hooks/useDebounce";
import { LocaleService, LocaleType } from "../../services/locale.service";
import { theme } from "../../theme/default.theme";
import { useDialog } from "../../hooks/useDialog";

export default function CheckIn(): JSX.Element {
  const [searchCity, setSearchCity] = useState("");
  const [locale, setLocale] = useState<LocaleType[]>([]);
  const [inputName, setInputName] = useState("1");
  const debouncedSearchTerm = useDebounce(searchCity, 700);

  const { openDialog, closeDialog } = useDialog();

  const filteredData = locale.filter((item) =>
    item.city.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const onGetLocale = async () => {
    try {
      const res = await LocaleService.findAll();
      setLocale(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetLocale();
  }, []);

  const {
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    openDialog({
      title: "Sucesso",
      subtitle: `CheckIn ${data.IdentificationCode} feito com sucesso`,
      buttonText: "Ok",
      buttonPress: () => {
        closeDialog();
      },
    });
  };

  return (
    <Container>
      <Content>
        <Row ml={15} mr={15}>
          <HeaderShow title="Check-in" />
        </Row>
        <ContainerForm>
          <Row mt={20}>
            <Controller
              name="searchType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelect
                  value="1"
                  items={[
                    { label: "Número do bilhete", value: "1" },
                    { label: "Código da reserva", value: "2" },
                  ]}
                  onChangeText={(value: any) => {
                    onChange(value);
                    setInputName(value);
                  }}
                  placeholder="Buscar por"
                  error={errors.searchType}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              name={"IdentificationCode"}
              rules={{
                required: {
                  value: true,
                  message: `Campo ${
                    inputName == "1" ? "número" : "código"
                  } é obrigatório`,
                },
              }}
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder={inputName == "1" ? "Número" : "Código"}
                  value={value}
                  onChangeText={onChange}
                  error={errors.IdentificationCode}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo Origem é obrigatório",
                },
              }}
              name="origin"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Origem"
                  value={value}
                  onChangeText={(value: any) => {
                    onChange(value);
                  }}
                  error={errors.origin}
                />
              )}
            />
          </Row>
          <ButtonCheckIn onPress={() => {}}>
            <Paragraph
              size={13}
              color={theme.color.NeutralGra}
              fontFamily="Poppins_400Regular"
            >
              Você tambêm pode{" "}
              <Paragraph size={13} fontFamily="Poppins_600SemiBold">
                Cancelar o check-in
              </Paragraph>
            </Paragraph>
          </ButtonCheckIn>
          <ButtonPrimary onPress={handleSubmit(onSubmit)}>
            Buscar passagens
          </ButtonPrimary>
        </ContainerForm>
      </Content>
    </Container>
  );
}
