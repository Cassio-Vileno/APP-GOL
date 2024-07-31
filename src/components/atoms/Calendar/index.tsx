import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../../theme/default.theme";
import { Icon } from "../Icon";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar.",
    "Abr.",
    "Mai.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Set.",
    "Out.",
    "Nov.",
    "Dez.",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

type CalendarComponentProps = {
  onPress: () => void;
  date: string;
  minDate?: string;
  handleSetDate(value: string): void;
};

const CalendarComponent = ({
  handleSetDate,
  date,
  minDate,
  onPress,
}: CalendarComponentProps): JSX.Element => {
  const today = new Date().toISOString().split("T")[0];
  const handleDateChange = (date: string) => {
    handleSetDate(date);
    onPress();
  };

  const renderArrow = (direction: string) => {
    return (
      <TouchableOpacity>
        {direction === "left" ? (
          <Icon color={theme.color.Orange100} size={27} name="chevron-left" />
        ) : (
          <Icon color={theme.color.Orange100} size={27} name="chevron-right" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Calendar
      renderArrow={renderArrow}
      minDate={minDate || today}
      style={{
        height: 350,
      }}
      theme={{
        arrowColor: theme.color.Orange100,
        todayTextColor: theme.color.OrangeBlur,
      }}
      markedDates={{
        [date]: {
          selected: true,
          disableTouchEvent: true,

          selectedColor: theme.color.Orange100,
        },
      }}
      onDayPress={(day: any) => {
        handleDateChange(day.dateString);
      }}
    />
  );
};

export default CalendarComponent;
