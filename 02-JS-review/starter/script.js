const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// //Destructuring

// const book = getBook(1);
// book;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// // console.log(title, author, genres);

// const [primary, secondary, ...others] = genres;

// // console.log(primary, secondary, others);
// const newGenres = [...genres, "B-Horror"];
// // console.log(newGenres);

// const updatedBook = {
//   ...book,
//   MoviePublicationDate: "2001-12-19",
//   pages: 1210,
// };
// updatedBook;

// const summary = `${title} by ${author} has ${pages + 500} pages, published in ${
//   publicationDate.split("-")[0]
// }`;
// summary;

// // Ternary operator

// const pagesRange = pages > 1000 ? "Over 1000" : "Less than 1000";
// pagesRange;

// // Arrow function
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// // AND Operator - short circuit when the first value is false
// console.log(true && "Love");
// //OR Operator - short circuit when the first value is true
// console.log("love" || "yes");

// // Optional Chainning

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

// const books = getBooks();
// // .map array method
// const titleList = books.map((book) => book.title);
// // console.log(titleList);
// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// // console.log(essentialData);

// // .filter array method
// // chaining two .filters
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 400)
//   .filter((book) => book.hasMovieAdaptation);
// // console.log(longBooksWithMovie);
// // chaining .map to .filter
// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => ({ title: book.title, pages: book.pages + 1 }));
// // console.log(adventureBooks);

// // .reduce array method
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// // .sort array method
// const arr = [3, 7, 1, 9, 6];
// const sorted = arr.slice().sort((a, b) => b - a);
// // sorted;
// // arr;
// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// // sortedByPages;

// // Adding, removing and updating elements of an array without mutating it

// // 1. Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J.K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// // booksAfterAdd;

// // 2. Delete book object from an array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// // booksAfterDelete;

// // 3. Update book object in the array
// const booksAfterUpdate = books.map((book) =>
//   book.id === 1 ? { ...book, author: "Demitry" } : book
// );

// booksAfterUpdate;

// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }

// getTodos();
