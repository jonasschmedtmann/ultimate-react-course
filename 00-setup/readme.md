%%quick visit to larn react:%%
https://react.dev/learn

- creating a new react app
  https://create-react-app.dev/?ref=jonas.io

- build tool vite and its setup
  https://vite.dev/guide/?ref=jonas.io

- adding react urlt o an html document
  https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html

**react**:

- why does forntend frameworks react exist:

before 2010 all the websites are rendered on the frntend and the backend of the app has to assembeld before hand from the application and the browser will only just paint the output to teh web browser. this is called serevr side rendering
![alt text](image.png)
eg: this concept was used in wordpress. tehse applications were just build to have some basic hovering features and a few tabs as and when people started writing more js code this lead to the current single page web applications

these web application does rendering on the client side i.e on the broser side and not on the server side.
here teh browser will fetch teh data from teh apis
![alt text](image-1.png)

- these single page applications though have multiple tabs, links , forms and everything but still technically user will be in the same page and hence teh name
  **single page apps with vanilla js**
- font end is about handling data+displaying data in user interface and ui needs to be in sync with the data. this is very hard problem to solve
- each piece of data is in itself a piece of state. we have to maintain the persistence amoung the data and we need to have some consistency.
- if we are using vanilla js , jquery then it requires a lot of direct dom manipulation and traversing. then the code will have very difficult code to understand
- data state is usually stored in dom shared across entire app in here. hence it creates many bugs thats why we go for frameworks like react, angular and vue

- these frameworks take teh syncing of data from us and it syncs teh data and the ui
- different frameworks have a different approach for doing this. these frameworks have their own structured way of wrinting this

what is reat?

- react is a declarative component based state driven javascript library for building user interfaces created by facebook
- component based rendering- react basically takes all teh components and renders tehm on the web page . componnets are teh basic blocks of component
- complex ui is built using simpler components
- we describe how components look like and how they work using a declarative syntax called jsx
- decalartive means telling what the component should look like based on teh current data/state
- react is abstraction away form dom. here we will never even touch the dom
- jsx: is a syntax that combines the html, css, js as well as referencing otehr components

- if we say we never touch dom how we update the page based on teh cahnge . that is why we have the state driven architecture
- based on teh current sattse of teh app we first render them to the ui and the broser uses teh components written with jsx.
- once if tehre is a change in the current state of the components then react will re-render the ui
  ![alt text](image-2.png)

- react is just a library we need some otehr frameworks like next.js, remix to do the api integration and data fetching. these are also built on top of react

- fiber tree, vitual dom, and few otehr techniques are used by react in place of actual odm manipulation which is often

eslint, prettier are the extensions
color theme: one monokai
