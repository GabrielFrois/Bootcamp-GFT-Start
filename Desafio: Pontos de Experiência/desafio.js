//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let num1 = parseInt(gets());
let num2 = parseInt(gets());

const xpGanho = num1 * num2 * 100;

print("Voce ganhou " + xpGanho + " XP!");
