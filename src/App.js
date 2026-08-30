import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import profile from "./assets/preview.jpg";

export default function App() {
  const roles = useMemo(() => ["AI/ML Developer", "Generative AI Developer", "Full-Stack Developer", "RAG & LLM Explorer"], []);
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  useEffect(() => {
    if (j < roles[i].length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + roles[i][j]);
        setJ(j + 1);
      }, 70);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setText("");
      setJ(0);
      setI((i + 1) % roles.length);
    }, 1500);
    return () => clearTimeout(timer);
  }, [j, i, roles]);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 90) el.classList.add("active");
      });
    };

    window.addEventListener("scroll", reveal, { passive: true });
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="app">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <header className="navbar-wrap">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#home">Tanmay Kumar</a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero shell">
          <div className="hero-left">
            <h4>Hello, I am</h4>
            <h1>Tanmay Kumar</h1>
            <h2 className="typing">{text}<span className="caret">|</span></h2>

            <p className="hero-desc">
              AI/ML and software developer building intelligent applications with machine learning, Generative AI, RAG, computer vision, and modern full-stack technologies.
            </p>

            <div className="focus-pills" aria-label="Developer focus areas">
              <span>AI / ML</span><span>Generative AI</span><span>RAG</span><span>Full Stack</span>
            </div>

            <p className="location">Based in India 🇮🇳</p>

            <div className="buttons">
              <a className="button primary" href="https://github.com/tanmaykumar7106-collab" target="_blank" rel="noreferrer">GitHub</a>
              <a className="button secondary" href="https://www.linkedin.com/in/tanmay-kumar-6a19ba2b5/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button secondary" href="https://drive.google.com/file/d/10iCwoVTHpy09nQhhEKgJAGlkrGeRt-gQ/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="portrait-frame">
              <div className="portrait-accent" />
              <img src={profile} alt="profile" className="profile-img" />
            </div>
          </div>
        </section>

        <section id="about" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">01</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-panel">
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
          </div>
        </section>

        <section id="skills" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">02</p>
            <h2>Technical <span>Skills</span></h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>💻 Languages</h3>
              <div className="skill-tags"><span>Python</span><span>JavaScript (ES6+)</span><span>HTML5</span><span>CSS3</span></div>
            </div>

            <div className="skill-card">
              <h3>⚛️ Frontend</h3>
              <div className="skill-tags"><span>React.js</span><span>Vite</span><span>Tailwind CSS</span><span>React Router</span><span>Axios</span><span>Recharts</span></div>
            </div>

            <div className="skill-card">
              <h3>🖥️ Backend</h3>
              <div className="skill-tags"><span>Node.js</span><span>Express.js</span><span>REST APIs</span><span>JWT Authentication</span></div>
            </div>

            <div className="skill-card">
              <h3>🗄️ Database</h3>
              <div className="skill-tags"><span>MongoDB</span><span>MongoDB Atlas</span><span>Mongoose</span><span>ChromaDB</span></div>
            </div>

            <div className="skill-card">
              <h3>🤖 AI & Machine Learning</h3>
              <div className="skill-tags"><span>Generative AI</span><span>RAG</span><span>LangChain</span><span>Ollama</span><span>Prompt Engineering</span><span>Sentence Transformers</span><span>NLP</span></div>
            </div>

            <div className="skill-card">
              <h3>🛠️ Tools</h3>
              <div className="skill-tags"><span>Git</span><span>GitHub</span><span>Vercel</span><span>Postman</span><span>VS Code</span><span>Streamlit</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">03</p>
            <h2>My <span>Projects</span></h2>
          </div>

          <div className="project-intro">
            <p>Selected work across artificial intelligence, machine learning, Generative AI, computer vision, RAG, and full-stack development.</p>
            <div className="project-legend"><span>AI / ML</span><span>Full Stack</span><span>GenAI</span></div>
          </div>

          <div className="projects-grid">
            <article className="project-card project-card-featured">
              <div className="project-topline"><span>01</span><span className="project-badge">AI + Computer Vision</span></div>
              <h3>CityPulse AI</h3>
              <p>
                AI-powered civic complaint and infrastructure monitoring platform that analyzes complaint text and images, detects civic issues, estimates risk, assigns priority, and routes complaints to the correct department.
              </p>
              <p className="tech">React • Node.js • Express • MongoDB Atlas • Gemini API • YOLOv8s • FastAPI • Cloudinary</p>
              <div className="project-actions">
                <a className="project-link" href="https://github.com/tanmaykumar7106-collab/CityPulse-AI" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                <span className="project-status">Deployment pending</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-topline"><span>02</span><span className="project-badge">GenAI + Full Stack</span></div>
              <h3>LaunchStack OpsHub</h3>
              <p>
                AI-powered business operations platform built with the MERN stack.
                Features secure authentication, client/project management, analytics dashboard,
                SOP library, reports, and an AI Copilot powered by a local LLM.
              </p>
              <p className="tech">React • Node.js • Express • MongoDB Atlas • JWT • TailwindCSS • Ollama • Vercel</p>
              <div className="project-actions">
                <a className="project-link" href="https://github.com/tanmaykumar7106-collab/launchstack-opshub" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                <a className="project-link demo-link" href="https://launchstack-opshub-pate.vercel.app" target="_blank" rel="noreferrer">Live Demo <span>↗</span></a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-topline"><span>03</span><span className="project-badge">RAG + LLM</span></div>
              <h3>AskMyNotes-AI</h3>
              <p>
                I built a RAG-based document Q&A system that retrieves relevant
                context from user-provided notes using vector embeddings and generates
                accurate answers using an LLM, reducing hallucination.
                Currently Ongoing....
              </p>
              <p className="tech">Python • LangChain • Streamlit • ChromaDB • Sentence Transformers • Ollama</p>
              <div className="project-actions">
                <a className="project-link" href="https://github.com/tanmaykumar7106-collab/AskMyNotes-AI" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                <span className="project-status">Local AI project</span>
              </div>
            </article>

            <article className="project-card project-card-featured">
              <div className="project-topline"><span>04</span><span className="project-badge">Generative AI</span></div>
              <h3>CodeMentor-AI</h3>
              <p>
                CodeMentor AI is an AI-powered desktop application that helps students and developers improve their programming skills
                through intelligent code analysis, automated software testing, and guided problem solving.
                Powered by IBM Granite and Ollama, the application provides AI-assisted feedback to enhance code quality
                and strengthen problem-solving abilities.
              </p>
              <p className="tech">Python • IBM Granite • Streamlit • Pandas • Matplotlib • Ollama</p>
              <div className="project-actions">
                <a className="project-link" href="https://github.com/tanmaykumar7106-collab/CodeMentor-AI" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                <a className="project-link demo-link" href="https://codementor-ai-hsfhvztcmucdc9fto9mwvh.streamlit.app/" target="_blank" rel="noreferrer">Live Demo <span>↗</span></a>
              </div>
            </article>

            <article className="project-card project-card-wide">
              <div className="project-topline"><span>05</span><span className="project-badge">AI + NLP</span></div>
              <h3>AI Scam Call Detector</h3>
              <p>
                Python-based scam call detection system that analyzes live or recorded speech, converts audio to text, and applies explainable NLP-based risk scoring to identify patterns such as OTP fraud, fake bank verification, KYC scams, urgency, and authority-pressure tactics.
              </p>
              <p className="tech">Python • Speech Recognition • NLP • Google Speech Recognition API • Audio Processing</p>
              <div className="project-actions">
                <a className="project-link" href="https://github.com/tanmaykumar7106-collab/AI-Scam-Call-Detector" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                <a className="project-link demo-link" href="https://ai-scam-call-detector-daerallecxcmengsorhrfz.streamlit.app/" target="_blank" rel="noreferrer">Live Demo <span>↗</span></a>
                <span className="project-status">Local / audio demo</span>
              </div>
            </article>
          </div>
        </section>

        <section id="certificates" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">04</p>
            <h2>My <span>Certificates</span></h2>
          </div>

          <div className="certificate-list">
            <article className="certificate-card">
              <div className="certificate-number">01</div>
              <div>
                <h3>Generative AI using NLP</h3>
                <p>60 Hours • August 2025</p>
                <p>United Global Infoservice Pvt. Ltd.</p>
              </div>
            </article>

            <article className="certificate-card">
              <div className="certificate-number">02</div>
              <div>
                <h3>AI for Students: Build Your Own Generative AI Model</h3>
                <p>45 Hours • June 2025</p>
                <p>NxtWave Workshop.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <p>© 2026 Tanmay Kumar • Built with React ⚛</p>
      </footer>
    </div>
  );
}
