const verificarFaixaEtaria = () => { 
    const idade: number = Number(prompt('Digite a sua idade: '));

    if (idade >= 0 && idade <= 1) {
        console.log('Você é um bebê.');
    } else if (idade >= 1 && idade <= 12) {
        console.log('Você é uma criança.');
    } else if (idade >= 13 && idade <= 18) {
        console.log('Você é um adolescente.');
    } else if (idade > 18) {
        console.log('Você é um adulto.');
    } else {
        console.log('Idade inválida.');
    }
}

verificarFaixaEtaria();
