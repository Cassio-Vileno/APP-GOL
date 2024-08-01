import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content } from "./styles";

import Checkbox from "../../components/atoms/Checkbox";
import Row from "../../components/atoms/Row";
import ButtonPrimary from "../../components/molecules/ButtonPrimary";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputSelect from "../../components/molecules/InputSelect";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputText from "../../components/molecules/InputText";
import InputTravelers from "../../components/molecules/InputTravelers";
import useDebounce from "../../hooks/useDebounce";
import { LocaleService, LocaleType } from "../../services/locale.service";
import { useDialog } from "../../hooks/useDialog";

export default function AnExcerpt(): JSX.Element {
  const [promotionalCode, setPromotionalCode] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [locale, setLocale] = useState<LocaleType[]>([]);
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

  const onSubmit = (data: any) => {
    console.log(data);
    openDialog({
      title: "Sucesso",
      subtitle: "Busca feita com sucesso",
      buttonText: "Ok",
      buttonPress: () => {
        closeDialog();
      },
    });
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
          <Row>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo viajantes é obrigatório",
                },
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
          <Row width={48}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo origem é obrigatório",
                },
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
                  error={errors.origin}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo destino é obrigatório",
                },
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
                  error={errors.destiny}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo partida é obrigatório",
                },
              }}
              name="match"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Partida"
                  value={value}
                  onChangeText={onChange}
                  error={errors.match}
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
          <ButtonPrimary onPress={handleSubmit(onSubmit)}>
            Buscar passagens
          </ButtonPrimary>
        </ContainerForm>
      </Content>
    </Container>
  );
}
