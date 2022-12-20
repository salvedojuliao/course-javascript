// for loop
// Todo for loop que eu utilizar haverá essa variável
// o let i = 0 é um contador (ele sempre será a quantidade de repetição)
// i < 5 = é uma condição que retorna true or false
// i++ é um incremento que acontece no final do do bloco
// o i só é criado uma vez
for (let i = 0; i < 5 ; i++){
    console.log(`Dentro do loop: ${i}`);
}

const names = ['Linus', 'Ada', 'Bill'];


for (let i = 0; i < names.length; i++){
    const HTMLTemplate =`<p>${names[i]}</p>`;
    console.log(HTMLTemplate);
}

// Lembre-se que o names.length mostra o tamnho do array, ou seja, começa no 1;

