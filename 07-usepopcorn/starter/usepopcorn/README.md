# component size matters:

small sized components:

- we end up with 100s of mini componennts
- confusing codebase
- too much abstracted

huge sized components:

- too many responsibilities
- might need too manu props
- hard to use
- complex code, hard to understand

- generally we need to find the right blance between too specific and too broad

# how to split a ui into components

- logical separation of contents/layout
- some are reusable and not overly complex
- responsibilities /complexity
- personal coding style

# framework: when to create a new component?

- when in doubt, start with a relatively big component, then split it into smaller components as it becomes necessary.
- no need to think about reusability and complexity early on
- if a component contains piece of content or layout that dont belong together or is it possible to reuse a part of the component the reuse it
- if the component is doing too many things or the component rely on too many prps or the component have too many pieces of state or effects or is the code too complex / confusing then you need a new component
- creating a new component creates a new abstraction. abstractions have a cost, because more abstractions require more mental energy to switch back have a cost, because more abstractions require more mental energy to switch back adn forth between componens
- name components base on what is does or what it displays
- never declare a new component inside another component
- co-locate related compoennts insdie the same file. dont separate

# component categories:

3 types

- stateless or presentational components
- stateful components
- structural components

# stateless or presentational components:

- these components odes not have a state

- these are components that recieve some props and simply present received data or otehr content
- these are some small and resuable components in general

# stateful components:

- these components have state and can still be reusable.

# structural components:

- these are the components that form the pages, layouts and screens of the app.
- these are formed of the result of composition of many components and can be huge and non reusable.

# prop drilling:

- it means to get the prop to a component sometime it has to cross many of its nearby parents to reach itself. this is called prop drilling
- because of this we end up with lot of components that will be receiving a prop which they are not using apparently.
- to avoid this only we use component composition.

# component composition:

- if we have a comonent inside another component then the outer component cannot be reused if there is any need.
  eg:
  function MoviesList(){
  return <Success/>
  }
  fucntion Success(){

  }

- here the moviesList cannot be reused because teh Success component is deeply related to the jsx of this component. so if were to reuse fir Failure then we have to create a new MovieList object

- to solve this we have the component composition.

# component composition:

- it does not accept a Component definition rather it just accepts a children prop and this children prop could be anyhting . it could indeed be teh success component.
  eg:
  function Modal({children})
  {
  return (
  <div className="modal">{childrent}</div>
  )
  }
  function Success(){
  return <p>Welldone</p>
  }
- this way we could reuse modal component
- componnet composition means combining different components using the children prop (or explicitly defined props)

# explicitly defined prop

- rather than using children component we can use a explicitly defined prop.
- rather than passing a children prop in the child component and receiving a jsx we can just pass in a prop to the parent component named as anything and pass it with the entire jsx.
- since it is more explitcit. it is called explicitly define prop

# props as a component API:

- most of the time since we cannot build each and every component ourself we use public react components provided by various vendors.
- component creator and component consumer in this case will be 2 different people.
- by providing a component the creator provides an abstraction that encapsulates his ui logic . this abstraction forms the public API.
- the consumer will just use the component by providing some props the creator has revealed or expected some values of.

# prop types:

- they provide type of value checks the props can receive in react.
- if we are concerned about the value type being used by react then use typescript instead of js
- PropTypes has some validators like number , string,bool,func,array etc., it also has otehr validators like arrayOf , isRequired etc.,

