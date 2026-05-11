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
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={el.title}
          title={el.title}
          text={el.text}
          num={i + 1}
        />
      ))}
    </div>
  );
}
function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
