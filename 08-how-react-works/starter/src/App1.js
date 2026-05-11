import { useState } from "react";
import TextExpander from "./TextExpander";
import "./index.css";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabs({ isActiveIndex, setIsActiveIndex }) {
  return (
    <div className="tabs">
      {Array.from({ length: content.length }, (_, i) => i + 1).map((num) => (
        <Tab
          key={num}
          className="tab"
          onClick={() => setIsActiveIndex(num)}
          isActive={num === isActiveIndex}
        >
          Tab{num}
        </Tab>
      ))}
    </div>
  );
}

function Tab({ className, isActive, onClick, children }) {
  const classes = [className, isActive && "active"].filter(Boolean).join(" ");
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

function TabContent({ isActiveIndex, content }) {
  const [heart, setHeart] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const expandButtonText = "Show details";
  const collapseButtonText = "Hide details";
  const ButtonStyle = {
    color: "#1f09cd",
    border: "none",
    font: "inherit",
    background: "none",
    marginLeft: "4px",
  };
  function handleClick() {
    setIsExpanded((isExpanded) => !isExpanded);
  }
  function handleAddItems() {
    setHeart((heart) => heart + 1);
  }
  return (
    <div className="tab-content">
      <h4>{isActiveIndex ? content[isActiveIndex - 1]?.summary : ""}</h4>
      <div>
        {isActiveIndex && (
          <div>
            <TextExpander
              collapsedNumWords={0}
              expanded={isExpanded}
              className="tab-actions"
            >
              {content[isActiveIndex - 1]?.details}
            </TextExpander>
            <div className="tab-con" tent>
              <button onClick={handleClick} style={ButtonStyle}>
                {isExpanded ? collapseButtonText : expandButtonText}
              </button>
              <div className="hearts-counter">
                <span>{heart} ❤️</span>
                <button onClick={handleAddItems}>+</button>
                <button onClick={handleAddItems}>+++</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="tab-undo">
      <button>undo</button>
      <button>undo in</button>
    </div>
  );
}

function Tabbed({ content }) {
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  return (
    <div>
      <Tabs isActiveIndex={isActiveIndex} setIsActiveIndex={setIsActiveIndex} />
      <TabContent content={content} isActiveIndex={isActiveIndex} />
      <Footer></Footer>
    </div>
  );
}
