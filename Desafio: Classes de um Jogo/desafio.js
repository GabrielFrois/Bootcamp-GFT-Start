let heroi = [
    {
        nome: "Gabriel",
        idade: 23,
        tipo: "Guerreiro"
    },
    {
        nome: "Lúcio",
        idade: 21,
        tipo: "Mago"
    },
    {
        nome: "Carlos",
        idade: 25,
        tipo: "Ninja"
    },
    {
        nome: "Júlio",
        idade: 28,
        tipo: "Monge"
    }
]

function determinarAtaque(tipo) {
    if (tipo === "Mago") {
        return "magia";
    } else if (tipo === "Guerreiro") {
        return "espada";
    } else if (tipo === "Monge") {
        return "artes marciais";
    } else if (tipo === "Ninja") {
        return "shuriken";
    }
}

function atacar(heroi) {
    const ataque = determinarAtaque(heroi.tipo);
    console.log(`O ${heroi.tipo} atacou usando ${ataque}.`);
}

heroi.forEach(atacar);
