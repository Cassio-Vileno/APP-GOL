import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content } from "./styles";

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

export default function AnExcerpt(): JSX.Element {
  const [promotionalCode, setPromotionalCode] = useState(false);
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

  const [stopover, setStopover] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

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
                  onSearch={setSearchCity}
                  citys={filteredData}
                  placeholder="Origem"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
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
                  onSearch={setSearchCity}
                  citys={filteredData}
                  placeholder="Destino"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>
          <Row>
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
                  onChangeText={onChange}
                  error={errors.gender}
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
                  error={errors.gender}
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
                    rules={{
                      required: { value: true, message: "Campo obrigatório" },
                    }}
                    name="promotional-code"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputText
                        placeholder="Código"
                        value={value}
                        onChangeText={onChange}
                        error={errors.gender}
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
                    name="promotional-code"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputSelect
                        items={[{ label: "Ida", value: "i" }]}
                        onChangeText={onChange}
                        placeholder="Trecho"
                      />
                    )}
                  />
                  <Controller
                    name="promotional-code"
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
                    name="promotional-code"
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
          <ButtonPrimary onPress={() => {}}>Buscar passagens</ButtonPrimary>
        </ContainerForm>
      </Content>
    </Container>
  );
}
