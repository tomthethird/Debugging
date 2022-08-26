exports.Pokesave = (pmon, power) => {

    const pk = (a, b, ansList=[]) => {
        for (const pokemon of a){
            if(pokemon.power >= b) {
                ansList.push(pokemon.name);
            }
        } return ansList;
    }
    return pk(pmon, power);

}