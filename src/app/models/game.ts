export interface Game {
  id?: number;   // opcional: al crear un recurso todavía no existe
  title: string;
  genre: string;
  platform: string;
  price: number;
  stock: number;
}
