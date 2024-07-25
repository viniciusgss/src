const questao10 = () => { 
    const mes: number = Number((<HTMLInputElement>document.getElementById('mes')).value);

    const meses: string[] = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    if (mes >= 1 && mes <= 12) {
        console.log(`O mês correspondente é ${meses[mes - 1]}.`);
    } else {
        console.log('Número de mês inválido.');
    }
}
