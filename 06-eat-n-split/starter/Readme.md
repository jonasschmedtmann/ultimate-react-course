section - 07
what does thinking in react means?

- thinking about react components, state, data flow, effects etc.,
- thinking in state transitions, not element mutations

1. break the desired ui into components and establish tthe compoent tree
2. build a static version in react(without state)
3. thinking about state
   -> whent o use state
   -> types of state: local vs global
   -> where to place each piece of state
4. establish data flow:
   -> one way data flow
   -> child to parent commmunication
   -> accessing global state

- step 3 and 4 is called as state anagement
- reusable components and how to create an ui using onlyreusable components are the common questions that will come to our mind.

79. funcdamentals of state managemet

- we can use the useState function to track the change in the state of certain components throughout their life cycle.
- state management gives each piece of state a hoem and how its value is changing and how data flows to the state.
- state management: deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flow through the app.

types of state:

1. local state:

- this state is only needed in child or sibling components.
- state that is defined in a component and only taht component and child components have access to it (by passing via props)

2. global state:

- this state can be shared amongst multiple componets in the entire application. this can be created by react context api or external global state management library like redux
- in this udemy app shopping cart state is a global state which is accessed by all the courses.

when to create a state:
need to store data-> will data change at some point? ->if yes, can be computed from existing state/props? ->if yes , derive state

need to store data-> will data change at some point? if no, use regular const variable

need to store data-> will data change at some point? ->if yes, can be computed from existing state/props? ->if no, should it re-render component?->if no , use REF

- there is a special kind of state called the ref which persists the data like any otehr state but will not re- render

need to store data-> will data change at some point? ->if yes, can be computed from existing state/props? ->if no, should it re-render component?->if yes , place a new piece of state in component

where to place state?

- if a state is only used by its component then place it within the component itlsef.

- if it is also used by the child component then pass it as a prop to the child component
- if it is accessed by few of sibling components tooo then lift the state up to the first common parent.
- if a state is used by all the component in the component tree then it becomes a global state
