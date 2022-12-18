const age = 31

// 'igual a' e 'diferente de'
// console.log(age == 31);
// console.log(age == '31');
// console.log(age != 31);
// console.log(age != '31');
// Tipos diferentes pode ser considerados do iguais quando utilizamos apenas dois sinais de comparação

// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
console.log(age === 31); // retorna true
console.log(age === '31'); // retorna false
console.log(age !== 31); // retorna false
console.log(age !== '31'); // retorna true
// Ou seja, não há conversão de tipos com operadores de comparações estritas