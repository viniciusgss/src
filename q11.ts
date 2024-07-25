const questao11 = () => { 
    const salario: number = Number((<HTMLInputElement>document.getElementById('salario')).value);

    let aumento: number;
    if (salario > 1500) {
        aumento = salario * 0.10;
    } else {
        aumento = salario * 0.15;
    }

    let novoSalario: number = salario + aumento;
    console.log(`O aumento é de R$${aumento.toFixed(2)}, e o novo salário é R$${novoSalario.toFixed(2)}.`);
}
