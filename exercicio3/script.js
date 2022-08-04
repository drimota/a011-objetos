const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon = {...pokemon1}

pokemon.nome = "Squirtle"
pokemon.tipo = "Água"


pokemon1.ataques = []

pokemon1.ataques.push(
    "nome: Folha Navalha",
    "dano: 45",
    "tipo: Grama",
    "precisao: 100",
)


pokemon.ataques = []

pokemon.ataques.push(
    "nome: Jato de Água",
    "dano: 40",
    "tipo: Água",
    "Precisão: 100"
)


console.log(pokemon)
console.log(pokemon1)


