import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

export default function App() {

  // ✅ FIXED (useMemo for Vercel error)
  const roles = useMemo(() => [
    "AI/ML Developer",
    "LLM Explorer",
  ], []);

  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  // ✅ Typing Animation (FIXED)
  useEffect(() => {
    if (j < roles[i].length) {
      const t = setTimeout(() => {
        setText(prev => prev + roles[i][j]);
        setJ(j + 1);
      }, 70);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setJ(0);
        setI((i + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [j, i, roles]); // ✅ FIXED dependency

  // Scroll Animation
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <div className="app">

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-left">
          <h4>Hello, I am</h4>
          <h1>Tanmay Kumar</h1>
          <h2 className="typing">{text}|</h2>

          <p className="hero-desc">
            Aspiring Software Engineer focused on AI/ML, LLMs and scalable applications.
          </p>

          <p className="location">Based in India 🇮🇳</p>

          <div className="buttons">
            <a href="https://github.com/tanmaykumar7106-collab" target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>

            <a href="https://www.linkedin.com/in/tanmay-kumar-6a19ba2b5/" target="_blank" rel="noreferrer">
              <button>LinkedIn</button>
            </a>

            <a href="https://1drv.ms/w/c/a7a97f6282f24a95/IQAQ4lYEuAjfS7gjhJo0wtWMAQcVRiRPcK-sgbZZ4jcytGU?e=0TaMrB" target="_blank" rel="noreferrer">
              <button>Resume</button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profile} alt="profile" className="profile-img" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section glass reveal">
        <h2>About <span>Me</span></h2>

        <p>
          Hi, I’m <b>Tanmay Kumar</b>, a 2nd-year Computer Science and Engineering student
          specializing in Artificial Intelligence and Machine Learning (AI/ML).
        </p>

        <p>
          I enjoy building innovative applications that combine technology and creativity.
          My interests include AI, NLP, and full-stack development.
        </p>

        <p>
          Currently exploring Generative AI and Large Language Models (LLMs)
          to build impactful real-world solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section reveal">
        <h2>My <span>Skills</span></h2>

        <div className="skill">
          <p>Python</p>
          <div className="bar"><div style={{ width: "90%" }}></div></div>
        </div>

        <div className="skill">
          <p>JavaScript</p>
          <div className="bar"><div style={{ width: "80%" }}></div></div>
        </div>

        <div className="skill">
          <p>React</p>
          <div className="bar"><div style={{ width: "75%" }}></div></div>
        </div>

        <div className="skill">
          <p>AI / ML</p>
          <div className="bar"><div style={{ width: "70%" }}></div></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h2>My <span>Projects</span></h2>

        <div className="card big">
          <h3>Scam Call Detector</h3>
          <p>
            AI-based system that detects fraudulent calls by analyzing audio
            and identifying scam patterns like OTP requests and urgency.
          </p>
          <p className="tech">
            Python • NLP • SpeechRecognition • PyAudio
          </p>

          <a href="https://github.com/tanmaykumar7106-collab/Tanmay-Kumar" target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>
        </div>

        <div className="card big">
          <h3>AI Interview Q&A Generator</h3>
          <p>
            AI-powered system that generates interview questions and answers
            based on resume data using LLMs.
          </p>
          <p className="tech">
            Python • LangChain • Ollama • Mistral LLM
          </p>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section reveal">
        <h2>My <span>Certificates</span></h2>

        <div className="card">
          <h3>Generative AI using NLP</h3>
          <p>60 Hours • August 2025</p>
          <p>United Global Infoservice Pvt. Ltd.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Tanmay Kumar • Built with React ⚛</p>
      </footer>

      {/* NAVBAR */}
      <div className="navbar">
        <a href="#home">🏠</a>
        <a href="#about">👤</a>
        <a href="#skills">⚙</a>
        <a href="#projects">💻</a>
        <a href="#certificates">📜</a>
      </div>

    </div>
  );
}
