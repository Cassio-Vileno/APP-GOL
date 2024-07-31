export default function onlyNumbers(text: string): string {
  if (text) {
    return text.replace(/[^0-9]/g, '');
  }
  return ""
}
