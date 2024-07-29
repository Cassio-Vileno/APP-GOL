export function DateMaskBR(text: string): string {
  const [year, month, day] = text.split('-');
  return `${day}/${month}/${year}`;
}
