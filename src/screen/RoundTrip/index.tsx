import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content } from "./styles";

import ButtonPrimary from "../../components/molecules/ButtonPrimary";
import Checkbox from "../../components/atoms/Checkbox";
import Row from "../../components/atoms/Row";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputSelect from "../../components/molecules/InputSelect";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputText from "../../components/molecules/InputText";
import InputTravelers from "../../components/molecules/InputTravelers";
import useDebounce from "../../hooks/useDebounce";
import { LocaleService, LocaleType } from "../../services/locale.service";

export default function RoundTrip(): JSX.Element {
  const [promotionalCode, setPromotionalCode] = useState(false);
  const [stopover, setStopover] = useState(false);
  const [departureDate, setDepartureDate] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [locale, setLocale] = useState<LocaleType[]>([]);
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
        <ContainerForm>
          <Row width={48}>
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
                  error={errors.origin}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="destiny"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Destino"
                  value={value}
                  onChangeText={(value: any) => {
                    onChange(value);
                  }}
                  error={errors.destiny}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="match"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Partida"
                  value={value}
                  onChangeText={(e: any) => {
                    onChange(e);
                    setDepartureDate(e);
                  }}
                  error={errors.match}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="return"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  minDate={departureDate}
                  placeholder="Retorno"
                  value={value}
                  onChangeText={onChange}
                  error={errors.return}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="travelers"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputTravelers
                  placeholder="Viajantes"
                  value={value}
                  onChangeText={onChange}
                  error={errors.travelers}
                />
              )}
            />
          </Row>
          <Row width={100} gap={10}>
            <Row>
              <Checkbox
                onChange={(e) => setPromotionalCode(e)}
                placeholder="Código Promocional"
              />
              {promotionalCode ? (
                <Row mt={15}>
                  <Controller
                    name="promotionalCode"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputText
                        placeholder="Código"
                        value={value}
                        onChangeText={onChange}
                        error={errors.promotionalCode}
                      />
                    )}
                  />
                </Row>
              ) : null}
            </Row>

            <Row>
              <Checkbox
                onChange={(e) => setStopover(e)}
                placeholder="Stopover: Adicionar Stopover"
              />
              {stopover ? (
                <Row mt={15}>
                  <Controller
                    name="stopover"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputSelect
                        items={[
                          { label: "Ida", value: "i" },
                          { label: "Volta", value: "v" },
                        ]}
                        onChangeText={onChange}
                        placeholder="Trecho"
                        error={errors.stopover}
                      />
                    )}
                  />
                  <Controller
                    name="stoppingPoint"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputSelect
                        items={[
                          { label: "São Paulo - Congonhas (CGH)", value: "i" },
                          { label: "São Paulo - Campinas (GRU)", value: "i" },
                          { label: "São Paulo - Campinas (VCP)", value: "i" },
                        ]}
                        onChangeText={onChange}
                        placeholder="Ponto de parada"
                      />
                    )}
                  />
                  <Controller
                    name="NightsStoppingPoint"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputSelect
                        items={[
                          { label: "1 Noite", value: "1" },
                          { label: "2 Noites", value: "2" },
                          { label: "3 Noites", value: "3" },
                        ]}
                        onChangeText={onChange}
                        placeholder="Noites no ponto de parada"
                      />
                    )}
                  />
                </Row>
              ) : null}
            </Row>
          </Row>
          <ButtonPrimary onPress={handleSubmit(onSubmit)}>
            Buscar passagens
          </ButtonPrimary>
        </ContainerForm>
      </Content>
    </Container>
  );
}
