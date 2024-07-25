const questao3 = () => { 
    const num1: number = Number((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = Number((<HTMLInputElement>document.getElementById('num2')).value);
    const resposta3 = document.getElementById('resposta3');

    if (resposta3) {
        if(num1 > num2){
            console.log( `O maior número é ${num1}.`);
        } else if(num2 > num1){
            console.log(  `O maior número é ${num2}.`);
        } else {
            console.log('Os números são iguais.');
        }
    }
}
