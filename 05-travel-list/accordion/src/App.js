import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
  },
  {
    title: "how long do i have to return my chair?",
    text: "pariatur recusandae dignissimos fuga voluptas unde optio ne",
  },
  {
    title: "do you ship to countries outside the EU?",
    text: "excepturi velit laborum, perspiciatis nemo perferendis",
  },
];
function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={el.title}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 1"
        num={20}
        key="text 1"
      >
        <p>allows react developers to:</p>
        <ul>
          <li>brak up ui into ocmpoennts</li>
          <li>make components reusalble</li>
          <li>place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ curOpen, onOpen, num, title, children }) {
  const isOpen = num === curOpen;

  console.log(curOpen);

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
