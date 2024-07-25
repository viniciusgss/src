const exibirMensagemAvaliacao = () => { 
    const numero: number = Number(prompt('Digite um número entre 1 e 5: '));

    switch (numero) {
        case 1:
            console.log('Muito insuficiente');
            break;
        case 2:
            console.log('Insuficiente');
            break;
        case 3:
            console.log('Regular');
            break;
        case 4:
            console.log('Bom');
            break;
        case 5:
            console.log('Muito bom');
            break;
        default:
            console.log('Número inválido. Por favor, digite um número entre 1 e 5.');
            break;
    }
}

exibirMensagemAvaliacao();
