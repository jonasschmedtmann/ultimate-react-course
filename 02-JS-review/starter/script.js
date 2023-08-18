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

// // 1. Destructuring
// const book = getBook(2);
// const {
//   title,
//   author: theAuthor,
//   pages,
//   publicationDate,
//   genres,
//   hasMovieAdaptation,
// } = book;
// title;
// theAuthor;
// genres;
// hasMovieAdaptation;
// const [primary, secondary, , fourth, ...allOthers] = genres;
// primary;
// secondary;
// fourth;
// allOthers;

// const newGenres = [...genres, "Epic Fantasy", "Absurdist"];
// newGenres;

// newBook = { ...book, moviePublicationDate: "02-05-2001", pages: 1210 };
// console.log(newBook);

const books = getBooks();
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;
const arr = [1, 2, 3, 4, 60, 20, 2, 100];
const firstCheck = arr.indexOf(2);
const lastCheck = arr.lastIndexOf(2);

const reversedArr = arr.reverse();
reversedArr;

const sortedArr = arr.sort((a, b) => a - b);
sortedArr;
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Working with Immuntable arrays
const newBook = {
  id: 6,
  title: "Cook Out",
  author: "Hamburgers",
  genres: ["comedy", "action", "opera"],
  pages: 1111,
};
// 1. Add book item to array
const withAddedBook = [...books, newBook];
withAddedBook;
// 2. Delete book item to array
const withDeletedBook = books.filter((book) => book.id !== 2);
withDeletedBook;
// 3. Update book item in array
const booksAfterUpdate = books.map((book) =>
  book.id == 1 ? { ...book, pages: 1000 } : book
);
booksAfterUpdate;
