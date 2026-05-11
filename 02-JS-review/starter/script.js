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

function getBooks(data) {
  let i = 0;
  for (const {
    title,
    author,
    genres,
    pages,
    publicationDate,
    reviews: { librarything },
  } of data) {
    console.log(i++, title, author, genres, librarything);
  }
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
const book1 = getBooks(data);
const book = getBook(1);
const {
  title,
  author: author_name,
  pages,
  hasMovieAdaptation: isaMovie,
} = book;

// Get first genre using array destructuring
const {
  genres: [primaryGenre, secondaryGenre, ...restGenre],
} = book;
console.log(primaryGenre);

// rest and spread
// rest creates anotehr aray form teh rerst if teh elements
console.log(restGenre);

const updateBook = { ...book, moviePublicationDate: "2025-01-01,pages:1210" };
console.log(updateBook);

//template literals
const summary = `a book ${title} was written by ${author_name} andit was published in ${
  book.publicationDate.split("-")[0]
} and ${
  isaMovie ? "has been adapted as a movie" : "has not been adapted a s amovie"
}`;
console.log(summary);
//ternary operator
const pageRange =
  pages > 1000 ? "over a thousand pages" : "less than 1000 pages ";
console.log(pageRange);

//arrow functions - can be used to write muliple line or single line function
function getYear(str) {
  return str.split("-")[0];
}
const year = (str) => {
  //arrow function returns by default
  console.log(str.split("-")[0]);
  return str.split("-")[0];
};

console.log(getYear(book.publicationDate));
console.log(year(book.publicationDate));

//short circuiting in logical operators
//and operator
console.log(true && "some string");
console.log(false && "some string");
console.log(isaMovie && "this book has a movie");
//falsy value: 0, null undefined, ''
console.log("surya" && "has a string");

// or operator
console.log(false || "some string");
console.log(true || "some string");
console.log(book.translations.spanish || "not translated");
const spanishTranslation = book.translations.spanish || "not translated"; //setting some default value if there is no translation
console.log(spanishTranslation);
//note if the reviews are not given then also it says no data
const count = book.reviews.librarything.reviewsCount ?? "nodata";
const totalReview = (book) => {
  const goodreadsCount = book.reviews?.goodreads.reviewsCount;
  //optional cahining
  const librarythingCount = book.reviews?.librarything.reviewsCount ?? 0;
  console.log(librarythingCount, goodreadsCount);
};
totalReview(book);

//array mehtods
const books = getBooks(data);
console.log(books);
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  //considered as function block
  return {
    title: book.title,
    author: book.author,
  }; //returning a object
});
const essentialData1 = books.map((book) => ({
  title: book.title,
  author: book.author,
})); //returning a object
console.log(essentialData);
console.log(essentialData1);

const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);
const longBookWithMovieAdaptation = books
  .filter((book) => {
    return book.pages > 500;
  })
  .filter((book) => book.hasMovieAdaptation);
console.log(longBookWithMovieAdaptation);

//filter for adventure books
const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
);
console.log(adventureBooks);

//reduce method-> return a final vlaue taking all the elements of the array
// calculating all the pages that we have tp read if we want to rad all the pages of the all the books
const pagesAllBooks = books.reduce((acc, book) => (acc = book.pages), 0);
console.log(pagesAllBooks);

const array = [1, 7, 3, 4, 5];
const sorted = array.sort((a, b) => a - b);
console.log(array);
console.log(sorted);

console.log(array.sort((a, b) => b - a));
console.log(array);
// to avoid altering the original array we can use the following
const sorted_new = array.slice().sort((a, b) => a - b);
console.log(sorted_new);
const sortedByPages = books.slice().sort((a, b) => (a.pages = b.pages));
console.log(sortedByPages);

// working with immutable arrays
const newBook = {
  id: 6,
  title: "harry potter and the chamber of secrets",
  author: "j k rowling",
};
const bookAfterAdd = [...books, newBook];
console.log(bookAfterAdd);
//delete book object form array. so first filter what needs to be deleted
const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
console.log(bookAfterDelete);
const booksAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? {} : book
);
console.log(booksAfterUpdate);

//promises
console.log(fetch("https://jsonplaceholder.typicode.com/todos")));
fetch("https://jsonplaceholder.typicode.com/todos").then((res=>res.json()).then((data)=>console.log(data));
console.log("jonas");


//async/await
async function getTodos(){
  const res=await fetch("https://jsonplaceholder.typicode.com/todos")
  const data= await res.json();
  console.log(data)

}
const totdos=getTodos()
console.log(totdos)
console.log("jonas")
