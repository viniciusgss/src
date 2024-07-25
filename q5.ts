const questao5 = () => { 
    const nota1: number = Number((<HTMLInputElement>document.getElementById('nota1')).value);
    const nota2: number = Number((<HTMLInputElement>document.getElementById('nota2')).value);
    const nota3: number = Number((<HTMLInputElement>document.getElementById('nota3')).value);
    const resposta5 = document.getElementById('resposta5');

    const media: number = (nota1 + nota2 + nota3) / 3;

    if (resposta5) {
        if(media >= 7){
            resposta5.innerText = 'O aluno está aprovado.';
        } else {
            resposta5.innerText = 'O aluno está reprovado.';
        }
    }
}
