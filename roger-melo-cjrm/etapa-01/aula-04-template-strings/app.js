const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// Usando contatenação (Forma ES5)
// const postMessage = 'O post ' + postTitle + '" do' + 'postAuthor' + ', tem '+ postComments + ' comentários';
// console.log(postMessage)

console.log('Você manja do filme \'As branquelas\'?')

// Usando template strings (Forma ES6) 
// const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários`
// console.log(postMessage)

// Criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
`
console.log(html)