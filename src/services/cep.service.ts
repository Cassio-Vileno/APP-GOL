import axios from "axios";

interface Response {
  cep: string;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
}

export default class CepService {
  static async findOneCep(cep: string): Promise<Response> {
    const { data }: any = await axios.get(
      `https://brasilapi.com.br/api/cep/v1/${cep}`
    );
    return data
  }
}
