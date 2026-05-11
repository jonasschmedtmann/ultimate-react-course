// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* this part takes care of all teh rendering in raect */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "html+css", level: "advanced", color: "#2662EA" },
  {
    skill: "js",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "web design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "java",
    level: "intermediate",
    color: "#123DAC",
  },
  {
    skill: "cpp",
    level: "beginner",
    color: "#efabd8ff",
  },
];

function App() {
  // creating an app coponent
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img className="avatar" src="profile/surya.jpg" alt="surya govindaraj" />
  );
}
function Intro() {
  return (
    <div>
      <h1>surya govindaraj</h1>
      <p>
        fullstack web developer and a fitness freak during the day. i like
        playing chess and talking to people and getting inspired
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <Skill
            skill={skill.skill}
            color={skill.color}
            level={skill.level}
            key={skill.ckill}
          />
        ))}
      </ul>
      {/* <Skill skill="React" emoji="👍" color="blue" />
      <Skill skill="Html+css" emoji="👍" color="orangered" />
      <Skill skill="js" emoji="👍" color="yellow" />
      <Skill skill="python" emoji="👍" color="red" /> */}
    </div>
  );
}
function Skill({ skill, level, color }) {
  console.log(skill, color, level);
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "🦾"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
