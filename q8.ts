const questao8 = () => { 
    const numero1: number = Number((<HTMLInputElement>document.getElementById('numero8_1')).value);
    const numero2: number = Number((<HTMLInputElement>document.getElementById('numero8_2')).value);
    const numero3: number = Number((<HTMLInputElement>document.getElementById('numero8_3')).value);

    let numeros: number[] = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b);

    console.log('Os números em ordem crescente são: ' + numeros.join(', '));
}
