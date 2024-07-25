const verificarEstadoCivil = () => { 
    const estadoCivil: string = prompt("Digite o seu estado civil:");

    switch (estadoCivil) {
        case 'solteiro':
            console.log('Você é solteiro.');
            break;
        case 'casado':
            console.log('Você é casado.');
            break;
        case 'divorciado':
            console.log('Você é divorciado.');
            break;
        case 'viúvo':
            console.log('Você é viúvo.');
            break;
        default:
            console.log('Estado civil inválido.');
            break;
    }
}

verificarEstadoCivil();
