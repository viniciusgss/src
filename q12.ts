const questao12 = () => { 
    const numeroDivisivel: number = Number((<HTMLInputElement>document.getElementById('numeroDivisivel')).value);

    if (numeroDivisivel % 3 === 0 && numeroDivisivel % 5 === 0) {
        console.log('O número é divisível por 3 e por 5.');
    } else {
        console.log('O número não é divisível por 3 e por 5 ao mesmo tempo.');
    }
}
