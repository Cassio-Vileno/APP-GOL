
export type LocaleType = {
  id: number;
  city: string;
  iata: string;
  state: string;
  image_file: string;
};


export class LocaleService {
  static async findAll() {
    const data = [
      {
        id: 1,
        city: "Barreiras",
        iata: "BRA",
        image_file: "https://www.visiteobrasil.com.br/galerias/493_gal_18520945/21-044422-barreiras-imagem-aerea-de-barreiras-foto-reproducao-costa-branca-news-comgr.jpg",
        state: "BA"
      },
      {
        id: 2,
        city: "Cuiabá",
        iata: "CGB",
        image_file: "https://media.istockphoto.com/id/1405093577/pt/foto/cuiab%C3%A1-mato-grosso.jpg?s=612x612&w=0&k=20&c=C0M7SnHfKKGJ5a53Ks91DrQKr65W8wltfCJquZIS6ec=",
        state: "MT"
      },
      {
        id: 3,
        city: "Goiânia",
        iata: "GYN",
        image_file: "https://s2-g1.glbimg.com/Si88ywkLe5gsX6Pmhl4UuIeotLM=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/d/B/JPPH7BRO6nAxujX0m1RA/orion-business-goiania.jpg",
        state: "MT"
      },
    ]
    return data
  }
}
