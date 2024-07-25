const realizarOperacao = () => { 
    const numero1: number = Number(prompt('Digite o primeiro número inteiro: '));
    const numero2: number = Number(prompt('Digite o segundo número inteiro: '));
    const operacao: number = Number(prompt('Escolha a operação: 1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão'));

    switch (operacao) {
        case 1:
            console.log(`Resultado da soma: ${numero1 + numero2}`);
            break;
        case 2:
            console.log(`Resultado da subtração: ${numero1 - numero2}`);
            break;
        case 3:
            console.log(`Resultado da multiplicação: ${numero1 * numero2}`);
            break;
        case 4:
            if (numero2 !== 0) {
                console.log(`Resultado da divisão: ${numero1 / numero2}`);
            } else {
                console.log('Divisão por zero não é permitida.');
            }
            break;
        default:
            console.log('Operação inválida.');
            break;
    }
}

realizarOperacao();
