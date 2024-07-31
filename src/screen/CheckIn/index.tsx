import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { ButtonCheckIn, Container, ContainerForm, Content } from "./styles";

import Row from "../../components/atoms/Row";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputTravelers from "../../components/molecules/InputTravelers";
import ButtonPrimary from "../../components/atoms/ButtonPrimary";
import Checkbox from "../../components/atoms/Checkbox";
import InputText from "../../components/molecules/InputText";
import InputSelect from "../../components/molecules/InputSelect";
import { LocaleService, LocaleType } from "../../services/locale.service";
import useDebounce from "../../hooks/useDebounce";
import HeaderShow from "../../components/molecules/HeaderShow";
import { Paragraph } from "../../components/atoms/Paragraph";
import { theme } from "../../theme/default.theme";

export default function CheckIn(): JSX.Element {
  const [promotionalCode, setPromotionalCode] = useState(false);
  const [stopover, setStopover] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [locale, setLocale] = useState<LocaleType[]>([]);
  const [inputName, setInputName] = useState("1");
  const debouncedSearchTerm = useDebounce(searchCity, 700);

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
                  items={[
                    { label: "Número do bilhete", value: "1" },
                    { label: "Código da reserva", value: "2" },
                  ]}
                  onChangeText={(value: any) => {
                    onChange(value);
                    setInputName(value);
                  }}
                  placeholder="Buscar por"
                  error={errors.stopover}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              name={inputName == "1" ? "namber" : "code"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder={inputName == "1" ? "Número" : "Código"}
                  value={value}
                  onChangeText={onChange}
                  error={errors.promotionalCode}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
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
                  error={errors.destiny}
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
