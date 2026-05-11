- using classes instead of fucntions is an old way of representing functions
- every calss component must extend react.component
- every single class component needs a render() function which returns a jsx.
- render function is equivalent to a function body of a function component.
- in class compoenents we just use the constructor method 

# function components vs class components:
- function components came after v16.8 but class components came in v0.13
- function components are created using normal JS functions. whereas class components are created using ES6 classes, extending React.Component
- this.props.X  is used for reading props in class components.
- this.setState is used to set states in class components. in function components local state is set using useState hook
- lifecycle is managed by useEffect hook  in functional components. in class components we basically care much about the lifecycle of the methods
- in function compoenents we have functions to do event handlers. in class components we have class methods for the same
- function components return JSX from functions. whereas class components return JSX from render method.
- in class components the effects are all distributed to all the methods rather than a single boulerplate codes. in functional components we dont have need this keyword.
- if we dont have some sattes or we dont have to bind the this keyword with some functions then we can haev the class methods without any constructors.

# life cycle methods
- special methods that all react componentsget access to and which we can use to run side effects at different points of component life cycle.
- mount
- re-rendering
- unmount
