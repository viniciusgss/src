const questao9 = () => { 
    const peso: number = Number((<HTMLInputElement>document.getElementById('peso')).value);
    const altura: number = Number((<HTMLInputElement>document.getElementById('altura')).value);

    const imc: number = peso / (altura * altura);

    if (imc < 18.5) {
        console.log('Você está abaixo do peso.');
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log('Você está com peso normal.');
    } else if (imc >= 25 && imc < 29.9) {
        console.log('Você está com sobrepeso.');
    } else if (imc >= 30 && imc < 39.9) {
        console.log('Você está obeso.');
    } else {
        console.log('Você está muito obeso.');
    }
}
