const questao4 = () => { 
    const numero: number = Number((<HTMLInputElement>document.getElementById('numero4')).value);
    const resposta4 = document.getElementById('resposta4');

    if (resposta4) {
        if(numero % 2 === 0){
            resposta4.innerText = `O número ${numero} é par.`;
        } else {
            resposta4.innerText = `O número ${numero} é ímpar.`;
        }
    }
}
