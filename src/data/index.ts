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
const Animal = "Animals";

export interface IPieceData {
  title: string;
  width: number;
  height: number;
  artist: string;
  notes?: string;
  filename: string;
  category: string;
  price: number;
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
    price: 120
  },
  {
    title: "Arcos",
    width: 39.5,
    height: 32,
    artist: MariaJesusBurgosAlonso,
    filename: "arcos.jpg",
    category: Abstract,
    price: 500
  },
  {
    title: "Bosque",
    width: 23,
    height: 19,
    category: Antique,
    artist: AndresCatala,
    filename: "bosque.jpg",
    price: 120
  },
  {
    title: "Burdeos",
    width: 22,
    height: 16,
    artist: "Maria Jesus Burgos",
    filename: "burdeos.jpg",
    category: Abstract,
    price: 250
  },
  {
    title: "Burro",
    width: 8.25,
    height: 8.25,
    artist: "Rafael Baquerizo",
    filename: "burro-1.jpg",
    category: Animal,
    price: 120
  },
  {
    title: "Elmer",
    width: 39.5,
    height: 39.25,
    artist: "Rafael Baquerizo",
    filename: "burro.jpg",
    category: Animal,
    price: 400
  },
  {
    title: "Cinco Árboles",
    width: 51,
    height: 36.5,
    artist: Josefina,
    filename: "cinco-arboles.jpg",
    category: Abstract,
    price: 350
  },
  {
    title: "Coches de Caballo",
    width: 27.5,
    height: 19.5,
    artist: RafaelRodolfo,
    filename: "coches.jpg",
    category: Contemporary,
    price: 120
  },
  {
    title: "Copas Grises",
    width: 27.5,
    height: 39,
    artist: MariaJesusBurgosAlonso,
    filename: "copa-gris.jpg",
    category: Abstract,
    price: 500
  },
  {
    title: "Copa Morada",
    width: 28.75,
    height: 39.25,
    artist: "Regina Rubio de Ulloa",
    filename: "copa-morada.jpg",
    category: Abstract,
    price: 250
  },
  {
    title: "Copas Verdes",
    width: 39,
    height: 27.5,
    artist: MariaJesusBurgosAlonso,
    filename: "copas-verde.jpg",
    category: Abstract,
    price: 500
  },
  {
    title: "Corazón",
    width: 39,
    height: 27.5,
    artist: MariaJesusBurgosAlonso,
    filename: "corazon.jpg",
    category: Abstract,
    price: 500
  },
  {
    title: "Corriente",
    width: 22,
    height: 18.5,
    category: Antique,
    artist: AndresCatala,
    filename: "corriente.jpg",
    price: 120
  },
  {
    title: "Mulata Desnuda",
    width: 19.5,
    height: 27.5,
    artist: RafaelRodolfo,
    filename: "desnuda.jpg",
    category: Contemporary,
    price: 120
  },
  {
    title: "Desnudo",
    width: 20,
    height: 20,
    artist: RafaelRodolfo,
    filename: "desnudo.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "Flores Rojas",
    width: 29.75,
    height: 58,
    artist: MariaJesusBurgosAlonso,
    filename: "flores-rojas.jpg",
    category: Abstract,
    price: 1500
  },
  {
    title: "Flores Blancas",
    width: 51,
    height: 36.75,
    artist: Josefina,
    filename: "flores-blancas.jpg",
    category: Abstract,
    price: 300
  },
  {
    title: "Bailarinas",
    width: 51,
    height: 36.75,
    artist: Josefina,
    filename: "bailarinas.jpg",
    category: Abstract,
    price: 300
  },
  {
    title: "Añil",
    width: 35.25,
    height: 45.75,
    artist: MariaJesusBurgosAlonso,
    filename: "anil.jpg",
    category: Abstract,
    price: 1500
  },
  {
    title: "Flores Rosas",
    width: 51,
    height: 36.75,
    artist: Josefina,
    filename: "flores-rosas.jpg",
    category: Abstract,
    price: 300
  },
  {
    title: "Gallina",
    width: 16.25,
    height: 21.25,
    artist: RafaelBaquerizo,
    filename: "gallina.jpg",
    category: Animal,
    notes: "Frame Included",
    price: 750
  },
  {
    title: "Gallo",
    width: 16.25,
    height: 19.25,
    artist: RafaelBaquerizo,
    filename: "gallo.jpg",
    category: Animal,
    price: 750,
    notes: "Frame Included"
  },
  {
    title: "Gandía, Valencia",
    width: 9.5,
    height: 13,
    category: Antique,
    artist: AndresCatala,
    filename: "gandia.jpg",
    price: 120
  },
  {
    title: "Granadas",
    width: 18.5,
    height: 15.25,
    category: Antique,
    artist: AndresCatala,
    filename: "granada.jpg",
    price: 120
  },
  {
    title: "Havana Vieja",
    width: 21,
    height: 31,
    artist: RafaelRodolfo,
    filename: "havana.jpg",
    category: Contemporary,
    price: 750
  },
  {
    title: "Almería",
    width: 28.75,
    height: 19.5,
    artist: GregorioBueno,
    filename: "hombre.jpg",
    category: Nude,
    price: 250
  },
  {
    title: "Mulata y Hombro",
    width: 19.5,
    height: 27.5,
    artist: RafaelRodolfo,
    filename: "hombro.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "Labrador",
    width: 18,
    height: 13.75,
    artist: RafaelBaquerizo,
    filename: "labrador.jpg",
    category: Animal,
    price: 120
  },
  {
    title: "Lunares Rojos",
    width: 35.25,
    height: 45.75,
    artist: MariaJesusBurgosAlonso,
    filename: "lunares-rojos.jpg",
    category: Abstract,
    price: 1500
  },
  {
    title: "Llovía en Madrid",
    width: 18.5,
    height: 22,
    artist: AnitaSternfield,
    filename: "madrid.jpg",
    category: Contemporary,
    price: 350
  },
  {
    title: "Menina con Princesa",
    width: 28,
    height: 51,
    artist: Josefina,
    filename: "menina-con-princesa.jpg",
    category: Rendition,
    price: 750
  },
  {
    title: "Menina Grande",
    width: 50,
    height: 62,
    artist: MariaJesusBurgosAlonso,
    filename: "menina-grande.jpg",
    category: Rendition,
    price: 3500
  },
  {
    title: "Menina Naranja",
    width: 34,
    height: 43.75,
    artist: Josefina,
    filename: "menina-naranja.jpg",
    category: Rendition,
    price: 750
  },
  {
    title: "Montaña Gris",
    width: 16.5,
    height: 13.5,
    category: Antique,
    artist: AndresCatala,
    filename: "montana.jpg",
    notes: "Frame Included",
    price: 120
  },
  {
    title: "Monte Morado",
    width: 15,
    height: 18,
    artist: RafaelRodolfo,
    filename: "monte-morado.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "Monte Rojo",
    width: 21.75,
    height: 18,
    category: Antique,
    artist: AndresCatala,
    filename: "monte-rojo.jpg",
    notes: "Frame Included",
    price: 120
  },
  {
    title: "Negro (Partes 1 y 2)",
    width: 76.5,
    height: 51,
    artist: ReginaRubioDeUlloa,
    filename: "negro.jpg",
    category: Abstract,
    price: 1000
  },
  {
    title: "Oca",
    width: 17.25,
    height: 14.25,
    artist: RafaelBaquerizo,
    filename: "oca.jpg",
    notes: "Frame Included",
    category: Animal,
    price: 250
  },
  {
    title: "Olga",
    width: 30,
    height: 24,
    artist: Olga,
    filename: "olga.jpg",
    category: Contemporary,
    price: 120
  },
  {
    title: "Otoño",
    width: 13,
    height: 11,
    category: Antique,
    artist: AndresCatala,
    filename: "otono.jpg",
    notes: "Frame Included",
    price: 120
  },
  {
    title: "Oveja",
    width: 13.75,
    height: 13.75,
    artist: RafaelBaquerizo,
    filename: "oveja.jpg",
    notes: "Frame Included",
    category: Animal,
    price: 750
  },
  {
    title: "Pase de Pecho",
    width: 45.5,
    height: 28.5,
    artist: GregorioBueno,
    filename: "pase-de-pecho.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "Picador",
    width: 51,
    height: 35,
    artist: GregorioBueno,
    filename: "picador.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "Piedras Azules",
    width: 15.5,
    height: 12.75,
    category: Antique,
    artist: AndresCatala,
    filename: "piedras.jpg",
    notes: "Frame Included",
    price: 120
  },
  {
    title: "Primera Mujer",
    width: 21.75,
    height: 31.75,
    artist: GregorioBueno,
    filename: "primera-mujer.jpg",
    notes: "Frame Included",
    category: Nude,
    price: 250
  },
  {
    title: "Rio",
    width: 17.5,
    height: 19,
    category: Antique,
    artist: AndresCatala,
    filename: "rio.jpg",
    notes: "Frame Included",
    price: 120
  },
  {
    title: "Rosas",
    width: 45.75,
    height: 32,
    artist: MariaJesusBurgosAlonso,
    filename: "rosas.jpg",
    category: Abstract,
    price: 500
  },
  {
    title: "Seis Árboles",
    width: 32,
    height: 40,
    artist: Josefina,
    filename: "seis-arboles.jpg",
    category: Abstract,
    price: 350
  },
  {
    title: "Vaca",
    width: 11,
    height: 14,
    artist: RafaelBaquerizo,
    filename: "vaca.jpg",
    category: Animal,
    price: 650
  },
  {
    title: "Zebra 1",
    width: 13,
    height: 13,
    artist: RafaelBaquerizo,
    filename: "zebra-1.jpg",
    category: Animal,
    price: 250
  },
  {
    title: "Zebra 2",
    width: 11,
    height: 11,
    artist: RafaelBaquerizo,
    filename: "zebra-2.jpg",
    category: Animal,
    price: 250
  },
  {
    title: "Malecón de Cien Fuegos",
    width: 16,
    height: 16,
    artist: RafaelRodolfo,
    filename: "malecon.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "El Boulevard",
    width: 19.5,
    height: 27.5,
    artist: RafaelRodolfo,
    filename: "boulevard.jpg",
    category: Contemporary,
    price: 120
  },
  {
    title: "Bosque Encantado",
    width: 33,
    height: 26,
    artist: RafaelRodolfo,
    filename: "bosque-encantado.jpg",
    category: Contemporary,
    price: 250
  },
  {
    title: "Tula",
    width: 18,
    height: 13.75,
    artist: RafaelBaquerizo,
    filename: "tula.jpg",
    category: Animal,
    price: 120
  },
  {
    title: "Ropa Tendida",
    artist: ReginaRubioDeUlloa,
    width: 28.75,
    height: 39.25,
    category: Abstract,
    price: 250,
    filename: "ropa.jpg"
  },
  {
    title: "Naranja y Rojo",
    artist: ReginaRubioDeUlloa,
    width: 39.25,
    height: 28.75,
    category: Abstract,
    filename: "naranja.jpg",
    price: 250
  },
  {
    title: "Puente (Partes 1 y 2)",
    width: 76.5,
    height: 51,
    artist: ReginaRubioDeUlloa,
    filename: "puente.jpg",
    category: Abstract,
    price: 1000
  },
  {
    title: "Triangulos Rosas",
    width: 38,
    height: 51,
    artist: Josefina,
    filename: "triangulos.jpg",
    category: Abstract,
    price: 500
  }
];
