const verificarIdadeValida = () => { 
    const nome: string = prompt('Digite o seu nome: ');
    const idadeInput: string = prompt('Digite a sua idade: ');

    try {
        const idade: number = parseInt(idadeInput);
        if (isNaN(idade)) {
            throw new Error('Idade não é um número inteiro válido.');
        }
        console.log(`Nome: ${nome}, Idade: ${idade}`);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

verificarIdadeValida();
