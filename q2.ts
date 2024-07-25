const questao2 = () => { 
    const idade: number = Number((<HTMLInputElement>document.getElementById('idade')).value);
    const resposta2 = document.getElementById('resposta2');

    if (resposta2) {
        if(idade >= 18){
            resposta2.innerText = 'Você é maior de idade.';
        } else {
            resposta2.innerText = 'Você é menor de idade.';
        }
    }
}