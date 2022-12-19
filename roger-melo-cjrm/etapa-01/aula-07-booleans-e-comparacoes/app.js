// Booleans e comparações
// console.log(true, false, 'true', 'false');

// Métodos podem retornbar booleans
const email = 'brucewayne@rogermelo.com.br';
const includes = email.includes('wayne');
const names = ['dio', 'roger', 'robert'];
const arrayIncludes = names.includes('roger');

// console.log(arrayIncludes)

// Operadores de comparação
const age = 31;
const name = 'roger';

// console.log(age == 31) // retorna true
// console.log(age == 35) // retorna false
// console.log(age != 31) // retorna false
// console.log(age > 31) // retorna false
// console.log(age < 32) // retorna true
// console.log(age <= 31) // retorna true
// console.log(age >= 31) // retorna true

console.log(name == 'roger'); // retorna true
console.log(name == 'Roger'); // Retorna false (case sensitive )
console.log(name > 'belinha'); // Retorna true
// Roger é maior que belinha porque a primeira letra da 'roger' é a letra 'r', ou seja, vem depois da primeira letra da palavra 'belinha', que é a letra 'b'. Portanto, as últimas letras do alfabeto são maiores que as primeiras letras do alfabeto.

console.log(name > 'Roger'); // retorna true
// Uma letra minúscula é maior que uma letra maiúscula (essa é a ordem que o js interpreta esses caracteres)
console.log(name > 'Belinha'); // retorna true
// Não apenas a letra 'r' minúscula é maior que a letra 'R' maíscula, como é maiorq ue qualquer letra maíscula. Ou seja, a letra minúscula - qualquer uma - é maior do que qualquer outra letra maiúscula