// Link to exercises: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods

/*___________________________________________________________________ */

// EXERCISE 1
// 1 - Primeiro pense em como você poderia testar se a mensagem em cada caso é uma mensagem de Natal. Qual string está presente em todas essas mensagens e que método você poderia usar para testar se ela está presente?
// 2 - Em seguida, você precisará escrever um teste condicional do formulario operando2 operador operando1. A coisa à esquerda é igual à coisa à direita? Ou neste caso, o método chama à esquerda retorna o resultado à direita?
// 3 - Dica: Nesse caso, é provavelmente mais útil testar se a chamada do método não é igual a um determinado resultado.

// My Solution
// var greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (var i = 0; i < greetings.length; i++) {
//   var input = greetings[i];
//   // Seu teste condicional precisa ir dentro dos parênteses
//   // na linha abaixo, substituindo o que está lá
//   if (greetings[i].indexOf('Christmas') !== -1) {
//     var result = input;
//     console.log(result)
//   }
// }

// Obs, MDN has the same solution as me XD

/*___________________________________________________________________ */

// EXERCISE 2
// 1 - Converta toda a cadeia contida na variável de entrada para minúscula e armazene-a em uma nova variável.
// 2 - Pegue a primeira letra da string nesta nova variável e armazene-a em outra variável.
// 3 - Usando esta última variável como substring, substitua a primeira letra da string em minúsculas pela primeira letra da string em minúsculas alterada para maiúscula. Armazene o resultado desse procedimento de substituição em outra nova variável.
// 4 - Altere o valor da variável result para igual ao resultado final, não a input.

// var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
// console.log(cities)

// My solution:
// for(var i = 0; i < cities.length; i++) {
//   var input = cities[i]; 
//   var lower = input.toLowerCase();
//   firstLetter = lower.slice(0, 1)
//   var result = lower.replace(firstLetter, firstLetter.toUpperCase());
//   console.log(result)
// }

// MDN Solution:
// for(var i = 0; i < cities.length; i++) {
//   var input = cities[i]; // input = LonDon
//   var lower = input.toLowerCase(); // lower = lonon
//   var firstLetter = lower.slice(0,1); // firstLetter = l
//   var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
//   // capialized = Lonodon
//   var result = capitalized;
//   console.log(result)
// }

/*___________________________________________________________________ */

// EXERCISE 3
// 1 - Nós recomendamos que faça assim:
// 2 - Extraia o código da estação de três letras e armazene-o em uma nova variável.
// 3 - Encontre o número de índice do caractere do ponto e vírgula.
// 4 - Extraia o nome da estação legível usando o número do índice de caracteres de ponto-e-vírgula como ponto de referência e armazene-o em uma nova variável.
// 5 - Concatene as duas novas variáveis e uma string literal para fazer a string final.
// 6 - Altere o valor da variável result para igual à string final, não a input

// My Solution:
// var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (var i = 0; i < stations.length; i++) {
//   var input = stations[i];
//   // write your code just below here
//   var code = input.slice(0, 3);
//   var semiC = input.indexOf(';') + 1;
//   var stationName = input.slice(semiC);
//   var message = code + ": " + stationName;
//   console.log(message);
// }


// MDN Solution:
// var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for(var i = 0; i < stations.length; i++) {
//   var input = stations[i];
//   var code = input.slice(0,3);
//   var semiC = input.indexOf(';');
//   var name = input.slice(semiC + 1);
//   var result = code + ': ' + name;
//   console.log(result)
// }