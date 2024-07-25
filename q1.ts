const questao1 = () => { 
    const numero: number = Number((<HTMLInputElement>document.getElementById('numero')).value);
    const resposta1 = document.getElementById('resposta1');

    if (resposta1) {
        if(numero < 0){
            resposta1.innerText = `O número ${numero} é negativo!`;
        } else if(numero > 0){
            resposta1.innerText = `O número ${numero} é positivo!`;
        } else {
            resposta1.innerText = `O número é igual a 0!`;
        }
    }
}