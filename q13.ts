const questao13 = () => { 
    const diaSemana: string = (<HTMLInputElement>document.getElementById('diaSemana')).value.toLowerCase();

    if (['sábado', 'domingo'].includes(diaSemana)) {
        console.log('É fim de semana.');
    } else if (['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'].includes(diaSemana)) {
        console.log('É um dia útil.');
    } else {
        console.log('Dia da semana inválido.');
    }
}
