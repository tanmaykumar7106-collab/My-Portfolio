import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import profile from "./assets/preview.jpg";

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

            <a href="https://1drv.ms/w/c/a7a97f6282f24a95/IQChTHj3dBmnSrMw1UiQMh1rAX9QQc_FU5jCMX_GvOrtqvA?e=asOtcE" target="_blank" rel="noreferrer">
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
          Hi, I’m <b>Tanmay Kumar</b>, a 3rd-year Computer Science and Engineering student
          specializing in Artificial Intelligence and Machine Learning (AI/ML).
        </p>

        <p>
          Artificial Intelligence and Machine Learning undergraduate with strong skills in Python, Natural Language Processing, and
          Data Analysis. Hands-on experience in building AI-driven projects, including Generative AI and NLP applications. Quick
          learner with strong analytical and problemsolving abilities, seeking an opportunity to contribute technical expertise while
          gaining practical industry experience.
        </p>

        <p>
          Currently exploring Generative AI and Large Language Models (LLMs)
          to build impactful real-world solutions.
        </p>
      </section>

      {/* SKILLS */}
<section id="skills" className="section reveal">
  <h2>
    Technical <span>Skills</span>
  </h2>

  <div className="skills-grid">

    <div className="skill-card">
      <h3>💻 Languages</h3>
      <div className="skill-tags">
        <span>Python</span>
        <span>JavaScript (ES6+)</span>
        <span>HTML5</span>
        <span>CSS3</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>⚛️ Frontend</h3>
      <div className="skill-tags">
        <span>React.js</span>
        <span>Vite</span>
        <span>Tailwind CSS</span>
        <span>React Router</span>
        <span>Axios</span>
        <span>Recharts</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🖥️ Backend</h3>
      <div className="skill-tags">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>REST APIs</span>
        <span>JWT Authentication</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🗄️ Database</h3>
      <div className="skill-tags">
        <span>MongoDB</span>
        <span>MongoDB Atlas</span>
        <span>Mongoose</span>
        <span>ChromaDB</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🤖 AI & Machine Learning</h3>
      <div className="skill-tags">
        <span>Generative AI</span>
        <span>RAG</span>
        <span>LangChain</span>
        <span>Ollama</span>
        <span>Prompt Engineering</span>
        <span>Sentence Transformers</span>
        <span>NLP</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🛠️ Tools</h3>
      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Vercel</span>
        <span>Postman</span>
        <span>VS Code</span>
        <span>Streamlit</span>
      </div>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h2>My <span>Projects</span></h2>

        <div className="card big">
          <h3>LaunchStack OpsHub</h3>
          <p>
            AI-powered business operations platform built with the MERN stack.
        Features secure authentication, client/project management, analytics dashboard,
        SOP library, reports, and an AI Copilot powered by a local LLM.
          </p>
          <p className="tech">
            React • Node.js • Express • MongoDB Atlas • JWT • TailwindCSS • Ollama • Vercel
          </p>
          <a href="https://launchstack-opshub-pate.vercel.app/" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
        </a>
          <a href="https://github.com/tanmaykumar7106-collab/launchstack-opshub" target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>
        </div>
              
              <div className="card big">
          <h3>AskMyNotes-AI</h3>
          <p>
            I built a RAG-based document Q&A system that retrieves relevant 
            context from user-provided notes using vector embeddings and generates 
            accurate answers using an LLM, reducing hallucination.
            Currently Ongoing....
          </p>
          <p className="tech">
            Python • LangChain • Streamlit • FAISS • HuggingFace Embeddings • Ollama ( llama3 )
          </p>
            <a href="https://github.com/tanmaykumar7106-collab/AskMyNotes-AI" target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>
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
        <div className="card">
          <h3>AI for Students: Build Your Own Generative AI Model</h3>
          <p>45 Hours • June 2025</p>
          <p>NxtWave Workshop.</p>
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
