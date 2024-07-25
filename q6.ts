const questao6 = () => { 
    const nome1: string = (<HTMLInputElement>document.getElementById('nome1')).value;
    const nome2: string = (<HTMLInputElement>document.getElementById('nome2')).value;
    const resposta6 = document.getElementById('resposta6');

    if (resposta6) {
        if(nome1.length > nome2.length){
            resposta6.innerText = `${nome1} possui mais caracteres.`;
        } else if(nome2.length > nome1.length){
            resposta6.innerText = `${nome2} possui mais caracteres.`;
        } else {
            resposta6.innerText = 'Os nomes possuem o mesmo número de caracteres.';
        }
    }
}
