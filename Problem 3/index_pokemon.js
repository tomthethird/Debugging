const pkmodule = require('./Pokesave');

const Pokemons = [
    {   name: "Lechonk", power: 25  },
    {   name: "Quaxly", power: 30  },
    {   name: "Sprigatito", power: 35  },
    {   name: "Fuecoco", power: 40  },
    {   name: "Miraidon", power: 110  },
    {   name: "Koraidon", power: 110  },
];
const powerCeiling = 40;

let PokesaveList = pkmodule.Pokesave(Pokemons, powerCeiling);

console.log(PokesaveList);