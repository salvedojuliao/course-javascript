// MÉTODOS comuns de Strings
const email = 'laracroft@rogermleo.com.br';

// lastIndexOfA()
const lastIndexOfA = email.lastIndexOf('a'); // Mostra a posição da última vez que aparece o caratere 'a'
console.log(lastIndexOfA);

// slice()
const emailSlice = email.slice(4, 9);
console.log(emailSlice) ;

// replace()
// const emailReplace = email.replace('l', 'y');
// console.log(emailReplace);

emailReplace = email.replace('laracrof', 'juliocesar');
console.log(emailReplace);

