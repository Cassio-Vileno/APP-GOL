
export type LocaleType = {
  id: number;
  city: string;
  state: string;
  image_file: string;
};


export class LocaleService {
  static async findAll() {
    const data = [
      {
        city: "Barreiras",
        id: 1,
        image_file: "https://api.sermaissaudavel.com/public/uploads/locale/images/4/alencastro.jpg",
        state: "BA"
      },
      {
        city: "Cuiabá",
        id: 2,
        image_file: "https://api.sermaissaudavel.com/public/uploads/locale/images/4/alencastro.jpg",
        state: "MT"
      },
      {
        city: "Várzea Grande",
        id: 3,
        image_file: "https://api.sermaissaudavel.com/public/uploads/locale/images/4/alencastro.jpg",
        state: "MT"
      },
    ]
    return data
  }
}
