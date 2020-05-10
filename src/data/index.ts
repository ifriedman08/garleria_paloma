const RafaelBaquerizo = "Rafael Baquerizo";
const MariaJesusBurgosAlonso = "Maria Jesus Burgos Alonso";
const AndresCatala = "Andres Catala";
const RafaelRodolfo = "Rafael Rodolfo";
const GregorioBueno = "Gregorio Bueno";
const ReginaRubioDeUlloa = "Regina Rubio de Ulloa";
const Josefina = "Josefina Fernandez Dopico";
const AnitaSternfield = "Anita Sternfield";
const Olga = "Olga Lopato";

const Antique = "Antique";
const Nude = "Nude";
const Contemporary = "Contemporary";
const Abstract = "Abstract";
const Rendition = "Rendition";
const Animal = "Animal";

export const priceRangeMap: {
  [index: number]: { low: number; high?: number };
} = {
  1: {
    low: 75,
    high: 150
  },
  2: {
    low: 150,
    high: 250
  },
  3: {
    low: 250,
    high: 350
  },
  4: {
    low: 350,
    high: 500
  },
  5: {
    low: 500,
    high: 1000
  },
  6: {
    low: 1000
  }
};

export interface IPieceData {
  title: string;
  width: number;
  height: number;
  artist: string;
  notes?: string;
  filename: string;
  category: string;
  priceRangeKey: number;
}

export const pieces: IPieceData[] = [
  {
    title: "Ajo",
    width: 8,
    height: 15.25,
    artist: RafaelBaquerizo,
    notes: "Frame Included",
    filename: "ajo.jpg",
    category: Contemporary,
    priceRangeKey: 1
  },
  {
    title: "Arcos",
    width: 39.5,
    height: 32,
    artist: MariaJesusBurgosAlonso,
    filename: "arcos.jpg",
    category: Abstract,
    priceRangeKey: 4
  },
  {
    title: "Bosque",
    width: 23,
    height: 19,
    category: Antique,
    artist: AndresCatala,
    filename: "bosque.jpg",
    priceRangeKey: 1
  },
  {
    title: "Burdeos",
    width: 22,
    height: 16,
    artist: "Maria Jesus Burgos",
    filename: "burdeos.jpg",
    category: Abstract,
    priceRangeKey: 2
  },
  {
    title: "Burro",
    width: 8.25,
    height: 8.25,
    artist: "Rafael Baquerizo",
    filename: "burro-1.jpg",
    category: Animal,
    priceRangeKey: 1
  },
  {
    title: "Elmer",
    width: 39.5,
    height: 39.25,
    artist: "Rafael Baquerizo",
    filename: "burro.jpg",
    category: Animal,
    priceRangeKey: 2
  },
  {
    title: "Cinco Arboles",
    width: 51,
    height: 36.5,
    artist: Josefina,
    filename: "cinco-arboles.jpg",
    category: Abstract,
    priceRangeKey: 3
  },
  {
    title: "Coches de Caballo",
    width: 27.5,
    height: 19.5,
    artist: RafaelRodolfo,
    filename: "coches.jpg",
    category: Contemporary,
    priceRangeKey: 1
  },
  {
    title: "Copas Gris",
    width: 27.5,
    height: 39,
    artist: MariaJesusBurgosAlonso,
    filename: "copa-gris.jpg",
    category: Abstract,
    priceRangeKey: 4
  },
  {
    title: "Copa Morada",
    width: 28.75,
    height: 39.25,
    artist: "Regina Rubio de Ulloa",
    filename: "copa-morada.jpg",
    category: Abstract,
    priceRangeKey: 2
  },
  {
    title: "Copas Verde",
    width: 39,
    height: 27.5,
    artist: MariaJesusBurgosAlonso,
    filename: "copas-verde.jpg",
    category: Abstract,
    priceRangeKey: 4
  },
  {
    title: "Corazon",
    width: 39,
    height: 27.5,
    artist: MariaJesusBurgosAlonso,
    filename: "corazon.jpg",
    category: Abstract,
    priceRangeKey: 4
  },
  {
    title: "Corriente",
    width: 22,
    height: 18.5,
    category: Antique,
    artist: AndresCatala,
    filename: "corriente.jpg",
    priceRangeKey: 1
  },
  {
    title: "Mulata Desnuda",
    width: 19.5,
    height: 27.5,
    artist: RafaelRodolfo,
    filename: "desnuda.jpg",
    category: Contemporary,
    priceRangeKey: 1
  },
  {
    title: "Desnudo",
    width: 20,
    height: 20,
    artist: RafaelRodolfo,
    filename: "desnudo.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "Flores Rojas",
    width: 29.75,
    height: 58,
    artist: MariaJesusBurgosAlonso,
    filename: "flores-rojas.jpg",
    category: Abstract,
    priceRangeKey: 6
  },
  {
    title: "Flores Rosas",
    width: 51,
    height: 36.75,
    artist: Josefina,
    filename: "flores-rosas.jpg",
    category: Abstract,
    priceRangeKey: 2
  },
  {
    title: "Gallina",
    width: 16.25,
    height: 21.25,
    artist: RafaelBaquerizo,
    filename: "gallina.jpg",
    category: Animal,
    notes: "Frame Included",
    priceRangeKey: 5
  },
  {
    title: "Gallo",
    width: 16.25,
    height: 19.25,
    artist: RafaelBaquerizo,
    filename: "gallo.jpg",
    category: Animal,
    priceRangeKey: 5,
    notes: "Frame Included"
  },
  {
    title: "Gandia, Valencia",
    width: 9.5,
    height: 13,
    category: Antique,
    artist: AndresCatala,
    filename: "gandia.jpg",
    priceRangeKey: 1
  },
  {
    title: "Granadas",
    width: 18.5,
    height: 15.25,
    category: Antique,
    artist: AndresCatala,
    filename: "granada.jpg",
    priceRangeKey: 1
  },
  {
    title: "Havana Vieja",
    width: 21,
    height: 31,
    artist: RafaelRodolfo,
    filename: "havana.jpg",
    category: Antique,
    priceRangeKey: 5
  },
  {
    title: "Almeria",
    width: 28.75,
    height: 19.5,
    artist: GregorioBueno,
    filename: "hombre.jpg",
    category: Nude,
    priceRangeKey: 2
  },
  {
    title: "Mulata y Hombro",
    width: 19.5,
    height: 27.5,
    artist: RafaelRodolfo,
    filename: "hombro.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "Labrador",
    width: 18,
    height: 13.75,
    artist: RafaelBaquerizo,
    filename: "labrador.jpg",
    category: Animal,
    priceRangeKey: 1
  },
  {
    title: "Lunares Rojos",
    width: 35.25,
    height: 45.75,
    artist: MariaJesusBurgosAlonso,
    filename: "lunares-rojos.jpg",
    category: Abstract,
    priceRangeKey: 6
  },
  {
    title: "Llovia en Madrid",
    width: 18.5,
    height: 22,
    artist: AnitaSternfield,
    filename: "madrid.jpg",
    category: Contemporary,
    priceRangeKey: 1
  },
  {
    title: "Menina con Princesa",
    width: 28,
    height: 51,
    artist: Josefina,
    filename: "menina-con-princesa.jpg",
    category: Rendition,
    priceRangeKey: 6
  },
  {
    title: "Menina Grande",
    width: 50,
    height: 62,
    artist: MariaJesusBurgosAlonso,
    filename: "menina-grande.jpg",
    category: Rendition,
    priceRangeKey: 6
  },
  {
    title: "Menina Naranja",
    width: 34,
    height: 43.75,
    artist: Josefina,
    filename: "menina-naranja.jpg",
    category: Rendition,
    priceRangeKey: 6
  },
  {
    title: "Montaña Gris",
    width: 16.5,
    height: 13.5,
    category: Antique,
    artist: AndresCatala,
    filename: "montana.jpg",
    notes: "Frame Included",
    priceRangeKey: 1
  },
  {
    title: "Monte Morado",
    width: 15,
    height: 18,
    artist: RafaelRodolfo,
    filename: "monte-morado.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "Monte Rojo",
    width: 21.75,
    height: 18,
    category: Antique,
    artist: AndresCatala,
    filename: "monte-rojo.jpg",
    notes: "Frame Included",
    priceRangeKey: 1
  },
  {
    title: "Negro (Partes 1 y 2)",
    width: 76.5,
    height: 51,
    artist: ReginaRubioDeUlloa,
    filename: "negro.jpg",
    category: Abstract,
    priceRangeKey: 6
  },
  {
    title: "Oca",
    width: 17.25,
    height: 14.25,
    artist: RafaelBaquerizo,
    filename: "oca.jpg",
    notes: "Frame Included",
    category: Animal,
    priceRangeKey: 2
  },
  {
    title: "Olga",
    width: 30,
    height: 24,
    artist: Olga,
    filename: "olga.jpg",
    category: Contemporary,
    priceRangeKey: 1
  },
  {
    title: "Otoño",
    width: 13,
    height: 11,
    category: Antique,
    artist: AndresCatala,
    filename: "otono.jpg",
    notes: "Frame Included",
    priceRangeKey: 1
  },
  {
    title: "Oveja",
    width: 13.75,
    height: 13.75,
    artist: RafaelBaquerizo,
    filename: "oveja.jpg",
    notes: "Frame Included",
    category: Animal,
    priceRangeKey: 5
  },
  {
    title: "Pase de Pecho",
    width: 45.5,
    height: 28.5,
    artist: GregorioBueno,
    filename: "pase-de-pecho.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "Picador",
    width: 51,
    height: 35,
    artist: GregorioBueno,
    filename: "picador.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "Piedras Azules",
    width: 15.5,
    height: 12.75,
    category: Antique,
    artist: AndresCatala,
    filename: "piedras.jpg",
    notes: "Frame Included",
    priceRangeKey: 1
  },
  {
    title: "Primera Mujer",
    width: 21.75,
    height: 31.75,
    artist: GregorioBueno,
    filename: "primera-mujer.jpg",
    notes: "Frame Included",
    category: Nude,
    priceRangeKey: 2
  },
  {
    title: "Rio",
    width: 17.5,
    height: 19,
    category: Antique,
    artist: AndresCatala,
    filename: "rio.jpg",
    notes: "Frame Included",
    priceRangeKey: 1
  },
  {
    title: "Rosas",
    width: 45.75,
    height: 32,
    artist: MariaJesusBurgosAlonso,
    filename: "rosas.jpg",
    category: Abstract,
    priceRangeKey: 4
  },
  {
    title: "Seis Arboles",
    width: 32,
    height: 40,
    artist: Josefina,
    filename: "seis-arboles.jpg",
    category: Abstract,
    priceRangeKey: 3
  },
  {
    title: "Vaca",
    width: 11,
    height: 14,
    artist: RafaelBaquerizo,
    filename: "vaca.jpg",
    category: Animal,
    priceRangeKey: 1
  },
  {
    title: "Zebra 1",
    width: 13,
    height: 13,
    artist: RafaelBaquerizo,
    filename: "zebra-1.jpg",
    category: Animal,
    priceRangeKey: 2
  },
  {
    title: "Zebra 2",
    width: 11,
    height: 11,
    artist: RafaelBaquerizo,
    filename: "zebra-2.jpg",
    category: Animal,
    priceRangeKey: 2
  },
  {
    title: "Malecon de Cien Fuegos",
    width: 16,
    height: 16,
    artist: RafaelRodolfo,
    filename: "malecon.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "El Boulevard",
    width: 19.5,
    height: 27.5,
    artist: RafaelRodolfo,
    filename: "boulevard.jpg",
    category: Contemporary,
    priceRangeKey: 1
  },
  {
    title: "Bosque Encantado",
    width: 33,
    height: 26,
    artist: RafaelRodolfo,
    filename: "bosque-encantado.jpg",
    category: Contemporary,
    priceRangeKey: 2
  },
  {
    title: "Tula",
    width: 18,
    height: 13.75,
    artist: RafaelBaquerizo,
    filename: "tula.jpg",
    category: Animal,
    priceRangeKey: 1
  },
  {
    title: "Triangulos Rosas",
    width: 38,
    height: 51,
    artist: Josefina,
    filename: "triangulos.jpg",
    category: Abstract,
    priceRangeKey: 4
  }
];
