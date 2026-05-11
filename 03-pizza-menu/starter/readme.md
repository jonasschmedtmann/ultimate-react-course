<react.Strictmode> rederns our compoennt twice inorder to check whetehre we have made some error and react also checks whether we are using some invalid components are not

- components are the building block of react . react renders view for each component and reders them in the ui. react just paints them in the ui
- each component has its own data, logic and appearances
- each component will have to return a markup or it can return nothing and each component name should satrt with a capital letter
- each component cna return only exactly one markup. if we want them more markup then group them into a form or a div tag
- all the things that are requrired for the app should be in the public folder so the compiler cna take it from there

what is jsx?

- jsx is a declarative syntax to descrive what componnets look like and how they work
- components must return a block of jsx
- jsx is a extension of javascript that allows us to embed javascrpit, css and react components into html
- react is a js based code and it will not understand this html. for that purpose only we have "Babel" which converst jsx to javascript
- each jsx eelemt is converted to a React.createElement function call
eg:
<header>
    <h1>. //jsx
    hello react!
    </h1>
</header>

React.createElement('header',
null,
ReactCreateElement(
'h1',
{style: {color:"red"}}, //js
"hello react!"))

- browser will not understand the jsx. they only understand the html. so babel will ocnvert the jsx to js and it will reder the html to the web browser

- jsx is declarative. react uses a declarative method. it describes what the ui should look like using jsx based on the current data. tehse data are called the props. reat is an abstraction away from DOM so we don't manipulate the DOM here.here we think the ui as a reflection of teh current data

- in vanila jsx we have imperative nature. so each time when we have some change in some components then we guve the browser step by step method to replicate the dom until we reach the desired ui.

- all the component functions are simple js functiosn so if we have some js function going on inside component they will be executed normally

why react came up with jsx rather than having html, css and js separately?

- before single page app we have separate js, html and css separately.here we could notice that the html page tags are closely related to js adn their events are continuously monitored by js. so with the rise of interactive single page applications we combined teh html and js and came up withreact components+jsx

- the react component contains the data, logic and the appearance of the ui components. here content and logic are co-located in here

- react still has the "separation of concerns"
  traditionally: we have one file per one concern per file but in react we have one concern per component. each component is concerned wuth one piece of the UI

- styling react components
  ways to style using css in react:
  1. in html we can style using inline styling but in jsx we have to use it within the style attribute inline component
     eg:
     function Header() {
     return (
     <div>
     <h1
     style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }} >
     Fast React Pizza Co.
     </h1>
     </div>
     );
     }
- whatever teh styling we have to use will be object to the style attribute and not that unlike in css the name of those stylings are also changed here

- creating an object of each component is difficult hence we have the separate css file form which we will get the styling using the className attribute. this way we have a separation of concerns for react
- note: if we are using className for styling then note that all the parent components styling will also be applied

Props:

- props are how we pass data between parent component adn the child component
- props can be of any order and it can get any value from the parent to the child. if we want a string value then we get them using {} jsx
- props are used to data transfer from parent to child. so they can be used to communicate between them
- so props are like arguments passed to a js functions. so we can pass an array, string a react component etc through props

component:

- react always reders the component based on teh current state of teh component and we have to maintain the synchronous betewen component and the data
- each react component has its own:

1. data
2. logic
3. appearance

- each data part has its own props and state. state is the internal data that can be modified or updated by the components logic
- prop is teh outside data coming from the parent which is update by the parent component
- props are read-only i.e., immutable. this is one of teh reacts strict rules
- if we need to mutate props, we actually need state. in js if e make a copy of an object and then change it then the cahnge will affect both. so if we change some data outside in the parent componnet then it will affect the child component
- so components have to be pure functions in terms if props and state. this allows react t optimize apps,avoid bugs, make apps predictable

%one way data flow%:

- react uses one way data flow. so only parent can send data to child. so if we want to send the data from child to parent to child then

Rules of JSX:

- jsx works essentially like HTML, but we can enter "js mode" using {} for the text attributes
- we can place js expressions inside {}
  eg: reference variables, create arrays or objects,[].map() or ternanry operator etc.,
- but statements aer not allowed in jsx like if/e;se, for, switch
- a pice of jsx produces a js expression. becoz everything that jsx has will be clearly converted to a createElement of the js
  eg:
  const el=<h1>hello react</h1>
  const el=React.createElement("h1",null,"Hello React")

- we can place other piece of JSX inside {} as well. so curly brances can have both js and jsx
- jsx also produces an expression. so it can also be placed anywhere inside a component
- a piece of jsx can only have one root element (ie., one parent element). if we need more , use <React.Fragment>

differences between jsx and HTML:

- className instead if HTMLs class
- htmlFor instead if HTML's for
- everytag needs to be closed
  eg:<img /> or <br />
- all event handlres and otehr properties need to be camelCaes
  rg:onClick or onMouseOver
- exception: aria-_ and data-_ are written dashes like html
- css inline styles are written like: {{<style>}}
  in which first { } is to reference a variable and the second {} represents an object
- css property names aer camelCased
- comments needs to be in {}

Rendering Lists:

- meaning we have an array and we have to create one element for each element in teh array
- note each time if we are rendering a list we have to have. a unique key given to it
  eg:
  function Menu() {
  return (
  <menu className="menu">
  {/_ replaceing individual pizza element eith a rendering list _/}
  <h2>Our Menu</h2>
  <ul className="pizzas">
  {pizzaData.map((pizza) => (
  <Pizza pizzaObj={pizza} key={pizza.name} />
  // its better to get teh array object in one place and load it in the props
  ))}
  </ul>
  </menu>
  );
  }

function Pizza(props) {
console.log(props);
return (

<div className="pizza">
<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
<div>
<h2>{props.pizzaObj.name}</h2>
<p>{props.pizzaObj.ingredients}</p>
</div>
</div>
);
}

- why are we using map for list rendering?
  map creates a new array back and returns the same . so if we are grouping the things under a ol or ul component we need to have a list in there

- conditional rendering - use operators like && || to return only if a condition is met
  note empty array is stilla. truthy value so if we are rendering somehting based on if some value exists in an array then we have to use the length or teh array
- while doing conditional rendering at customer level think of using true or false for short cuiting . if we use 0 or 1 it will be displayed in the ui
  eg:

function Menu() {
const pizzas = pizzaData;
const numPizzas = pizzas.length;

return (

<h2>Our Menu</h2>
{numPizzas > 0 && (
<ul className="pizzas">
{pizzaData.map((pizza) => (
<Pizza pizzaObj={pizza} key={pizza.name} />
// its better to get teh array object in one place and load it in the props
))}
</ul>
)}
</menu>
);
}

conditional rendering using ternaries:
preferred way for using conditional ternaries
eg:
function Menu() {
const pizzas = pizzaData;
const numPizzas = pizzas.length;

return (

<h2>Our Menu</h2>
{numPizzas > 0 ? (
<ul className="pizzas">
{pizzaData.map((pizza) => (
<Pizza pizzaObj={pizza} key={pizza.name} />
// its better to get teh array object in one place and load it in the props
))}
</ul>
):<p> we are still preparing our mennu
</p>}
</menu>
);
}

condtiional redndering with multiple returns

prop destructuring:

- all the component function has a argumanet called prop and even if the part where the componnet isbeing used does not pass any prop then also we will have a {} empty object as a prop
- since prop is an object we can destructure it at teh function definition and use only those [rops taht we need
  eg:

react fragment:
is one that allows us to group some lements without leaving a trace in html tree or dom

- it alows us to have more than one piece of fragment in our return statements

- it is wrapped within
  <> </> or

  <React.Fragment></React.Fragment>

conditionally sending classnames:
function Pizza(props) {
console.log(props);
return (

<div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
<div>
<h2>{props.pizzaObj.name}</h2>
<p>{props.pizzaObj.ingredients}</p>
{props.pizzaObj.soldOut ? (
<span>SOLDOUT</span>
) : (
<span>{props.pizzaObj.price}</span>
)}
<span>{props.pizzaObj.soldOut ? "SOLDOUT" : props.pizzaObj.price}</span>
</div>
</div>
);
}

summary:

- react is consists of ocmponents . each component has datta, js logic and the appearance is given by jsx to them. it teh jsx that each component uses to render the same on to the web page
- the jsx can have html, css adn js{} inside the curly braces
- a complete application
  has many application and tehy can be represented using some component tree

- if a parent component has to pass on some values to its child then we can use the props.
- the props cna only send the data onlynin one direction ie., is from paret to child
- if we want to render multiple objects of the same compoennt type then we use the ordered list or unordered list.
- rendering multiple components at once using the js .map() method
- conditional redering can be rendered conditionally using various operators like &&,?
