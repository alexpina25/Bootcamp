/************************************
 * Iteración #1: Arrows *
 ***********************************/
/*  Crea una arrow function que tenga dos parametros a y b y 
 que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
 por consola la suma de los dos parametros. */
const arrowFunction = (a = 10, b = 5) => {
  console.log(a + b);
};

//  1.1 Ejecuta esta función sin pasar ningún parametro
arrowFunction();
//  1.2 Ejecuta esta función pasando un solo parametro
arrowFunction(4);
//  1.3 Ejecuta esta función pasando dos parametros
arrowFunction(2, 2);

/************************************
 * Iteración #2: Destructuring *
 ***********************************/
/*  2.1 En base al siguiente javascript, crea variables en base a las propiedades 
 del objeto usando object destructuring e imprimelas por consola. Cuidado, 
 no hace falta hacer destructuring del array, solo del objeto. */

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;
console.log(`${title}, ${gender}, ${year}`);

/*  2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
 llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
 imprimelo por consola. */

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(`${fruit1}-${fruit2}-${fruit3}`);

/*  2.3 En base al siguiente javascript, usa destructuring para crear 2 
 variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();
console.log(`${name}-${race}`);

/*  2.4 En base al siguiente javascript, usa destructuring para crear las 
 variables name y itv con sus respectivos valores. Posteriormente crea 
 3 variables usando igualmente el destructuring para cada uno de los años 
 y comprueba que todo esta bien imprimiendolo. */

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
const { name: carName, itv: itvs } = car;
const [itv1, itv2, itv3] = itvs;

console.log(`${carName} // ${itv1}-${itv2}-${itv3}`);

/************************************
 * Iteración #3: Spread Operator *
 ***********************************/
//  3.1 Dado el siguiente array, crea una copia usando spread operators.
let pointsList = [32, 54, 21, 64, 75, 43]; //**Cambio por let para rehusar la variable */

const copiedArray = [...pointsList];
console.log(copiedArray);

//  3.2 Dado el siguiente objeto, crea una copia usando spread operators.
let toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" }; //**Cambio por let para rehusar la variable */

const copiedToy = { ...toy };
console.log(copiedToy);

//  3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
//  spread operatos.
pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const concatedArrays = [...pointsList, ...pointsLis2];
console.log(concatedArrays);

//  3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
//  con spread operators.
toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const concatedToys = { ...toy, ...toyUpdate };
console.log(concatedToys);

//  3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//  pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copiedColors = [colors[0], colors[1], ...colors.slice(3)];
console.log(copiedColors);

/************************************
 * Iteración #4: Map *
 ***********************************/
/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
 utilizando .map(). */
let users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const arrayUsers = users.map((user) => user.name);
console.log(arrayUsers);

/*  4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
 de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
 empiece por 'A'. */
users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const listUsers = users.map((user) =>
  user.name.startsWith("A") ? "Anacleto" : user.name
);
console.log(listUsers);

/*  4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
 de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
 cuando el valor de la propiedad isVisited = true. */
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const listCities = cities.map((city) =>
  city.isVisited ? `${city.name} - (Visitado)` : city.name
);
console.log(listCities);

/************************************
 * Iteración #5: Filter *
 ***********************************/
/*  5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
 con los valores que sean mayor que 18 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const arrayAges = ages.filter((age) => age > 18);
console.log(arrayAges);

/*  5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
 con los valores que sean par. */
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]; //**Usa el array anterior */

const agesPairs = ages.filter((age) => age % 2 === 0);
console.log(agesPairs);

/*  5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
 con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const arrayLol = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("League of Legends")
);
console.log(arrayLol);

/*  5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
 con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
 usar la funcion .includes() para la comprobación. 
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
]; */

const stramersWU = streamers.filter((streamer) => streamer.name.includes("u"));
console.log(stramersWU);

/*  5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
 el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
 .includes() para la comprobación.
 Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
 .age sea mayor que 35. */

const arrayStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
      return streamer;
    }
  }
});
console.log(arrayStreamers);

/************************************
 * Iteración #6: Find *
 ***********************************/
/*  6.1 Dado el siguiente array, usa .find() para econtrar el número 100. */
const numbers = [32, 21, 63, 95, 100, 67, 43];

const find100 = numbers.find((number) => number == 100);
console.log(find100);

/*  6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010. */
const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movie2010 = movies.find((movie) => movie.date == 2010);
console.log(movie2010);

/*  6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
 spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
 lo queremos meter en la propiedad .mutation del objeto fusionado. */
const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const cucu = aliens.find((alien) => alien.name === "Cucushumushu");
console.log(cucu);

const porom = mutations.find((mutation) => mutation.name === "Porompompero");
console.log(porom);

const alienMutation = { ...cucu, mutation: porom };
console.log(alienMutation);

/************************************
 * Iteración #7: Reduce *
 ***********************************/
/*  7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
 los alumnos usando la función .reduce(). */

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const examNotes = exams.reduce((acc, { score }) => acc + score, 0);
console.log(examNotes);

/*  7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
 alumnos que esten aprobados usando la función .reduce(). */
let total = 0;
const approvedTotal = exams.reduce((acc, { score }) => {
  if (score > 5) {
    total = acc + score;
  }
  return total;
}, 0);
console.log(approvedTotal);

/*  7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

const averageNotes = exams.reduce((acc, { score }) => {
  return acc + score;
}, 0);
const average = averageNotes / exams.length;
console.log(average);

/************************************
 * Iteración #8: Bonus *
 ***********************************/
/* 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
 .filter() y usa .reduce() para conseguir la media de sus .score. 
 La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
 array .gender. */

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const filteredGames = videogames.filter((game) => game.genders.includes("RPG"));
console.log(filteredGames);

const totalScores = filteredGames.reduce((acc, { score }) => {
  return acc + score;
}, 0);
const averageScore = totalScores / filteredGames.length;
console.log(averageScore);
