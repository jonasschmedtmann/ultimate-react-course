in react we listen to events on the html as an inline itself rather than a addEventListerner etc.,

- the function passed as a callback will be executed once the event occurs
- this call back function on the event occurance is taken care by the react
  eg:
  <button
  style={{ background: "#7950f2", color: "#fff" }}
  onClick={() => {
  alert("next");
  }} >

- we can use teh arrow function or a separate function to act as the call back function
  eg:
  <button
  style={{ background: "#7950f2", color: "#fff" }}
  onClick={handleNext} >

what is state in react?

- what is state?
- how to use state in practice using

1. useState
2. useReducer
3. ContextAPI

- how to think about state in react

- the data is passed from one parent compoent to a child. component. so to a child component it comes from outside through props
- component has,
  data, logic and appearance
- props and state are he sub parts of component
- state is the data that a component can hold over time. it is necessary for information that it needs to remember throughout the apps lifecycle.
- so state is considered as a memory of a component
- state holds the value for a particular action taken on that component.
- state variable/ piece of state is a single variable in a component (this holds the components' state )
- updating a state triggers react to rerender the component. a new view of the compiennt will be created on updating teh state of teh component
- state is how the react keeps the ui and data to be in sync

steps :

- create a state variable using useState() and it takes the default value for the state as param
- it returns an array as an output which has the state variable and the call back function to be called on changing the statee of the variable.
- the useState variable is called a react hook. note the react hooks cannot be called inside any blocks like if else etc., they can only be called inside a top levelfunction.
- we update the state variable only using the callback function

mechanics of state in reatc:

- in reatc we dont interact with the states directly since it is a declarative language. so dom is not updateted directly by the react
- we update teh components using teh state of these components.
- react updates a component view on change in the state of the component by rerendering the componnets. which means react calls the callback function again
- during the rerender process teh state of teh cariable is preserved unless the component disappers entirely from the ui whihc is called mounting
- it is only when the state changes using the useState hook the set callback function will be called and a new value will be pudated to teh variable.
- when react sees the state variable changes thre react app will rerender the component
- react reacts to state changes by rerendering the UI

  65.updating state based on the current state:

- we shold not update the state based on teh current state instead we should do it with a callback function which will receive teh current value as the argument
- each component manages its own state. multiple insatnces of a component will be handled separately. so changes made at one objects component will not be affected by others.
- state is isolated inside of each component

practical guidelines about state:

- each component has and manages its own state, no matter how many times we render the same component
- the change in the sate of the one of the component will not affect the other.
- the entire UI can be treated a s a f(state) function of state.
- a react aplication is jus maintaining of state at every time
- we describe the data using state , event handlers and JSX.
- create a new state variable everytime a data the component has to keep track of.
- whenever something in a component should be dynamic, create a piece of state related to that thing and update teh state when the thing should change or when u needed it to be changed
- if you want to change the way a component looks, imagine its view as a reflection of state changing over time
- for data that should not trigger componnet re-renders, dont use state, use a regular valriable instead.
- unnecessary rerendering causes performance issues

# children prop:

- it is a prop that each react component receives automatically and the value of the react component is actually what is between the opening and teh closing of teh tag of the component
- children is a predefined keyword in reaact which will be used to identify the children prop
- the children can receive any jsx markup . this jsx markup becomes the props.children for the component between which it is declared.
- - it is essential ffor making reusable and configurable components
