const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//An array of pokémon objects where the id is evenly divisible by 3
const divider=pokemon.filter(items=>items.id%3===0);
console.log("🚀 ~ file: index.js:30 ~ divider:", divider);

//an array of pokémon objects that are "fire" type

const typeOff=pokemon.filter(items=>items.types.includes('fire'));
console.log("🚀 ~ file: index.js:34 ~ typeOff:", typeOff)

//an array of pokémon objects that have more than one type

const arr=pokemon.filter(items=>items.types.length>1)
console.log("🚀 ~ file: index.js:39 ~ arr:", arr)

//an array with just the names of the pokémon
const namearr=pokemon.map(items=>items.name)
console.log("🚀 ~ file: index.js:43 ~ namearr:", namearr)

//an array with just the names of pokémon with an id greater than 99

const selectiveNames=pokemon.filter(items=>items.id>99).map(items=>items.name);
console.log("🚀 ~ file: index.js:48 ~ selectiveNames:", selectiveNames)

//an array with just the names of the pokémon whose only type is poison

const arrpok=pokemon.filter(items=>items.types.length=1 &&items.types[0]==="poison").map(item=>item.name);
console.log("🚀 ~ file: index.js:53 ~ arrpok:", arrpok)

//an array containing just the first type of all the pokémon whose second type is "flying"
const flyingPokémonFirstTypes = pokemon
  .filter(pokemon => pokemon.types.length === 2 && pokemon.types[1] === "flying")
  .map(pokemon => pokemon.types[0]);

console.log("First types of flying Pokémon:", flyingPokémonFirstTypes);

//a count of the number of pokémon that are "normal" type
const normalTypeCount = pokemon.filter(pokemon => pokemon.types.includes("normal")).length;

console.log("Count of Pokémon with 'normal' type:", normalTypeCount);
