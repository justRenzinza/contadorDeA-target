function contarLetraA(frase) {
    let contadorDeA = 0; 

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === 'a' || frase[i] === 'A') {
            contadorDeA++;
        }
    }


    console.log("a letra 'a' aparece " + contadorDeA + " vezes.");
}

let frase = "se a target quiser, passarei nesse processo seletivo";
contarLetraA(frase);

// tbm tem como deixar o usuario decidir a frase a ser verificada
// let frase = prompt("digite a string a ser verificada: ");