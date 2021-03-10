/*
  Buscando e contando dados em arrays

  Baseado no array de livros por categoria abaixo, faça os seguintes desafios
    
    * Contar o número de categorias e o numero de livros em cada categoria
    * Contar o numero de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros dele
*/

const booksByCategory = [
    {
        category: "Ficção",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Coaching",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stepen R. Covey",
            }
        ],
    },
];

let booksCategory = () => {
    for (let category of booksByCategory) {
        console.log(`Total de livros na categoria ${category.category}: `)
        console.log(category.books.length)
    }
}

let countAuthors = () => {
    let authors = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(`Temos ${authors.length} autores`)
}

let howManyBooks = (author) => {
    let authorBooks = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                authorBooks.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${authorBooks.join(", ")}`)
}

booksCategory()
countAuthors()
howManyBooks("Augusto Cury")