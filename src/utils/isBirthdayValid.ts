import { birthDateMaskUSA } from "./mask";

export function isBirthdayValid(birthday: string) {

  const birthDate = new Date(birthDateMaskUSA(birthday));
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return birthDate <= currentDate;
}

