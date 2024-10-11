let invoice = {
    name: "Gabriel",
    age: 23,
    products: { // Lista de produtos comprados, armazenados em um objeto.
        0: ["Mouse 2xwm", 29.90], // Primeiro produto: um array com nome e preço.
        1: ["Teclado Mecânico", 129.90], // Segundo produto.
        2: ["Monitor", 899.90] // Terceiro produto.
        //Poderia ter n produtos
    }
}

// Exibe o objeto `invoice` completo no console.
console.log(invoice);

// Exibe o nome do comprador no console.
console.log(invoice.name);

// Chama a função `generateInvoice`, passando o objeto `invoice` como argumento.
generateInvoice(invoice);

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);

    // Itera sobre os produtos na fatura usando um loop `for...in`.
    for(let index in invoice.products){
        // Desestrutura o array do produto, extraindo o nome e o preço.
        let [productName, productPrice] = invoice.products[index];
        // Exibe cada produto com seu nome e preço formatado.
        console.log(`- ${productName}: R$ ${productPrice}`);
    }
}