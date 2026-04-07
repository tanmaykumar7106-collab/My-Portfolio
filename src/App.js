import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// Button
const btnStyle = {
  padding: "10px 20px",
  borderRadius: "12px",
  background: "linear-gradient(45deg, #00c6ff, #0072ff)",
  color: "white",
  border: "none",
  cursor: "pointer",
  margin: "6px",
  fontWeight: "bold"
};

// Back Button
const BackButton = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")} style={btnStyle}>⬅ Home</button>;
};

// Layout
const CenterBox = ({ children }) => (
  <div className="center">
    <div className="box">{children}</div>
  </div>
);

// Home
function Home() {
  const roles = ["AI/ML Enthusiast", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (j < roles[i].length) {
      const t = setTimeout(() => {
        setText(prev => prev + roles[i][j]);
        setJ(j + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => {
        setText("");
        setJ(0);
        setI((i + 1) % roles.length);
      }, 1500);
    }
  }, [j, i]);

  return (
    <CenterBox>
      <h1>Hello 👋</h1>
      <h2>I'm Tanmay Kumar</h2>
      <h3 className="typing">{text}|</h3>

      <div>
        <button style={btnStyle} onClick={() => navigate("/about")}>About</button>
        <button style={btnStyle} onClick={() => navigate("/projects")}>Projects</button>
        <button style={btnStyle} onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </CenterBox>
  );
}

// About
function About() {
  return (
    <CenterBox>
      <BackButton />
      <h2>About Me</h2>

      <p>
        Hi, I’m Tanmay Kumar, a 2nd-year CSE (AI/ML) student. I enjoy building
        projects that combine technology and creativity.
      </p>

      <h3>Skills</h3>

      <div className="skill">
        <p>React</p>
        <div className="bar"><div style={{width:"80%"}}></div></div>
      </div>

      <div className="skill">
        <p>Python</p>
        <div className="bar"><div style={{width:"85%"}}></div></div>
      </div>
    </CenterBox>
  );
}

// Projects
const projectList = [
  {
    name: "Scam Detector App",
    description: "AI/ML-based scam detection system.",
    link: "https://github.com/tanmaykumar7106-collab/Tanmay-Kumar"
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website.",
    link: "https://github.com/tanmaykumar7106-collab/Tanmay-Kumar"
  }
];

function Projects() {
  return (
    <CenterBox>
      <BackButton />
      <h2>Projects</h2>

      {projectList.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <a href={p.link} target="_blank" rel="noreferrer">
            <button style={btnStyle}>GitHub</button>
          </a>
        </div>
      ))}
    </CenterBox>
  );
}

// Contact
function Contact() {
  return (
    <CenterBox>
      <BackButton />
      <h2>Contact</h2>
      <p>Email: tanmay@example.com</p>
      <p>
        GitHub: 
        <a href="https://github.com/tanmaykumar7106-collab"> Visit</a>
      </p>
    </CenterBox>
  );
}

// App
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}