export function DateMaskBR(text: string): string {
  const [year, month, day] = text.split('-');
  return `${day}/${month}/${year}`;
}

export function CepMask(text: string): string {
  return text
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}
