quokka- a extension to see teh output of our short scripts in vscode itself rather than a html browser page

destruturing arrays:
arr=[[1,2,3],[4,5,6]]
[el1,el2]=arr
arr1=[{
name:"surya",
address:"hyderabad",
marks:[1,2,3]
},
{
name:"ubi",
address:"chennai",
marks:[1,2,3]
}]
[el1:{name,marks: [mark]}]=arr1

destructuring objects:
obj1={
name:"surya",
address:"hyderabad",
marks:[1,2,3],
details:{
worksat: "optum"
experience:"2"

}
}
{details: {experice:surya_experince}}=obj1

// creating a new property and overridding an existing property while doing a copy of an object
obj2={...obj1,name:"ubi"}

- name of the object will be updated

- rest operator:
- to take the rest of teh elements from the array or objects
  spread operator:
- if we want to create a new object or array using all the elements of the array/object then we use the spread operator
- it takes individual elements of the obj/ array

array methods:
map:

- it returns a new array after applying the lambda function on it. here the arrow function is used for a lambda fuction
  const essentialData1 = books.map((book) => ({
  title: book.title,
  author: book.author,
  }));

filter:

- filters out based on a condition
- it also has a callbasck function and it has a codition. if the condition is true then the particular element gos into the new array
  const longBooks = books.filter((book) => book.pages > 500);

reduce:

- can implemet other mehtods too like map, filter and sort
  const pagesAllBooks = books.reduce((acc, book) => (acc = book.pages), 0);

sort:

- can be used to sort the array
- it has a call back function which when returns negative then it will do a ascending ordering and if it retunrs a positive value then it will do a descending function
- note that sort does not create a new array it does sorting in place

promises:

- inorder to fetch data from teh api we use the fetch function. using this we can test the fetch api
- if we are fetching something form an api then it will take some time but the compiler will not wait for it.
- inorder to wait for the completion we have to wait until the promise changes its state to successful. to maintain the async nature
- the fetch function returns a promise. we use the then function on the promises to do a callback and provide something
- note that jonas will still be executed before the result comes from tyhe promise
  eg:
  console.log(fetch("https://jsonplaceholder.typicode.com/todos")));
  fetch("https://jsonplaceholder.typicode.com/todos").then((res=>res.json()).then((data)=>console.log(data));
  console.log("jonas");

- js will move to teh next line immediately way before the data from any promise comes by. but in the async function it will wait till the fecth function gets teh data by using the keyword await

//async/await
async function getTodos(){
const res=await fetch("https://jsonplaceholder.typicode.com/todos")
const data= await res.json();
console.log(data)

}
getTodos()
console.log("jonas")

- js. will wait only in the places where we have the await keyword inside the async function
- the async function always returns a promise always
- the use of teh async function is to set the satte variable
