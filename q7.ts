const questao7 = () => { 
    const caractere: string = (<HTMLInputElement>document.getElementById('caractere')).value.toLowerCase();

    if ('aeiou'.includes(caractere)) {
        console.log('O caractere é uma vogal.');
    } else {
        console.log('O caractere é uma consoante.');
    }
}
