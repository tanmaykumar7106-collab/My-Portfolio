import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import profile from "./assets/preview.jpg";

export default function App() {
  const roles = useMemo(
    () => [
      "AI/ML Developer",
      "Generative AI Developer",
      "Full-Stack Developer",
      "RAG & LLM Explorer",
    ],
    []
  );

  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All");

  /* Typing animation */
  useEffect(() => {
    if (j < roles[i].length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + roles[i][j]);
        setJ((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setText("");
      setJ(0);
      setI((prev) => (prev + 1) % roles.length);
    }, 1500);

    return () => clearTimeout(timer);
  }, [j, i, roles]);

  /* Scroll reveal animation */
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 90) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal, { passive: true });
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="app">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      {/* Navbar */}
      <header className="navbar-wrap">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#home">
            Tanmay Kumar
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero shell">
          <div className="hero-left">
            <h4>Hello, I am</h4>

            <h1>Tanmay Kumar</h1>

            <h2 className="typing">
              {text}
              <span className="caret">|</span>
            </h2>

            <div className="availability">
              <span className="availability-dot" />
              Open to internships & collaborations
            </div>

            <p className="hero-desc">
              AI/ML and software developer building intelligent applications
              with machine learning, Generative AI, RAG, computer vision, and
              modern full-stack technologies.
            </p>

            <div
              className="focus-pills"
              aria-label="Developer focus areas"
            >
              <span>AI / ML</span>
              <span>Generative AI</span>
              <span>RAG</span>
              <span>Full Stack</span>
            </div>

            <p className="location">Based in India 🇮🇳</p>

            <div className="buttons">
              <a className="button primary" href="#projects">
                View Projects
              </a>

              <a
                className="button resume-primary"
                href="https://drive.google.com/file/d/1HDEuBmEzPvbZTOh7b3mtTPSZvsLTvhQi/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>

              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="portrait-frame">
              <div className="portrait-accent" />

              <img
                src={profile}
                alt="profile"
                className="profile-img"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">01</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="about-panel">
            <p>
              Hi, I’m <b>Tanmay Kumar</b>, a 3rd-year Computer Science and
              Engineering student specializing in Artificial Intelligence and
              Machine Learning (AI/ML).
            </p>

            <p>
              Artificial Intelligence and Machine Learning undergraduate with
              strong skills in Python, Natural Language Processing, and Data
              Analysis. Hands-on experience in building AI-driven projects,
              including Generative AI and NLP applications. Quick learner with
              strong analytical and problemsolving abilities, seeking an
              opportunity to contribute technical expertise while gaining
              practical industry experience.
            </p>

            <p>
              Currently exploring Generative AI and Large Language Models
              (LLMs) to build impactful real-world solutions.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">02</p>

            <h2>
              What I <span>Work With</span>
            </h2>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <h3>AI / ML</h3>

              <div className="skill-tags">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>TensorFlow</span>
                <span>Keras</span>
                <span>OpenCV</span>
                <span>YOLO</span>
                <span>Pandas</span>
                <span>NumPy</span>
              </div>
            </div>

            <div className="work-card">
              <h3>GenAI</h3>

              <div className="skill-tags">
                <span>Gemini</span>
                <span>Ollama</span>
                <span>LangChain</span>
                <span>RAG</span>
                <span>Embeddings</span>
                <span>Sentence Transformers</span>
                <span>ChromaDB</span>
              </div>
            </div>

            <div className="work-card">
              <h3>Frontend</h3>

              <div className="skill-tags">
                <span>React.js</span>
                <span>Vite</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Tailwind CSS</span>
                <span>Framer Motion</span>
              </div>
            </div>

            <div className="work-card">
              <h3>Backend</h3>

              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Flask</span>
                <span>REST APIs</span>
                <span>JWT</span>
              </div>
            </div>

            <div className="work-card">
              <h3>Database / Cloud</h3>

              <div className="skill-tags">
                <span>MongoDB</span>
                <span>MongoDB Atlas</span>
                <span>Mongoose</span>
                <span>MySQL</span>
                <span>Cloudinary</span>
                <span>Vercel</span>
              </div>
            </div>

            <div className="work-card">
              <h3>Developer Tools</h3>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>VS Code</span>
                <span>Streamlit</span>
                <span>Jupyter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">03</p>

            <h2>
              Current <span>Focus</span>
            </h2>
          </div>

          <div className="focus-grid">
            <div className="focus-card">
              <strong>RAG Systems</strong>

              <p>
                Exploring retrieval pipelines that ground LLM responses in
                relevant project and document context.
              </p>
            </div>

            <div className="focus-card">
              <strong>LLM Applications</strong>

              <p>
                Building practical Generative AI experiences around reasoning,
                code assistance, and intelligent workflows.
              </p>
            </div>

            <div className="focus-card">
              <strong>Computer Vision</strong>

              <p>
                Working with image understanding and detection for real-world
                civic and infrastructure use cases.
              </p>
            </div>

            <div className="focus-card">
              <strong>Intelligent Full Stack</strong>

              <p>
                Combining modern web applications with AI capabilities instead
                of treating AI as a separate demo layer.
              </p>
            </div>

            <div className="focus-card">
              <strong>Production AI</strong>

              <p>
                Learning how to take AI prototypes toward reliable APIs, cloud
                deployment, monitoring, and usable products.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">04</p>

            <h2>
              My <span>Projects</span>
            </h2>
          </div>

          <div className="project-intro">
            <div>
              <p className="eyebrow">FEATURED + SELECTED WORK</p>

              <p>
                Selected work across artificial intelligence, machine
                learning, Generative AI, computer vision, RAG, and full-stack
                development.
              </p>
            </div>

            <div
              className="project-filters"
              aria-label="Filter projects"
            >
              {[
                "All",
                "AI / ML",
                "Generative AI",
                "Computer Vision",
                "Full Stack",
              ].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    projectFilter === filter
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setProjectFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="featured-note">
            <span>Featured projects</span>

            <p>
              Case-study driven work that shows how I approach a problem, build
              the solution, and think about the outcome.
            </p>
          </div>

          <div className="projects-grid">
            {/* CityPulse AI */}
            {(projectFilter === "All" ||
              projectFilter === "AI / ML" ||
              projectFilter === "Computer Vision" ||
              projectFilter === "Full Stack") && (
              <article className="project-card project-card-featured">
                <div className="project-topline">
                  <span>01</span>
                  <span className="project-badge">
                    AI + Computer Vision
                  </span>
                </div>

                <h3>CityPulse AI</h3>

                <p>
                  AI-powered civic complaint and infrastructure monitoring
                  platform that analyzes complaint text and images, detects
                  civic issues, estimates risk, assigns priority, and routes
                  complaints to the correct department.
                </p>

                <div className="case-grid">
                  <div className="case-item">
                    <small>Problem</small>

                    <p>
                      Civic complaints can be hard to classify, prioritize,
                      and route quickly.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Built</small>

                    <p>
                      An AI-assisted complaint workflow using text and image
                      understanding with department routing.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Outcome</small>

                    <p>
                      A more structured path from citizen reporting to
                      actionable infrastructure monitoring.
                    </p>
                  </div>
                </div>

                <p className="tech">
                  React • Node.js • Express • MongoDB Atlas • Gemini API •
                  YOLOv8s • FastAPI • Cloudinary
                </p>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/tanmaykumar7106-collab/CityPulse-AI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                  <a
                    className="project-link demo-link"
                    href="https://city-pulse-ai-nine.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                </div>
              </article>
            )}

            {/* LaunchStack OpsHub */}
            {(projectFilter === "All" ||
              projectFilter === "Generative AI" ||
              projectFilter === "Full Stack") && (
              <article className="project-card">
                <div className="project-topline">
                  <span>02</span>
                  <span className="project-badge">
                    GenAI + Full Stack
                  </span>
                </div>

                <h3>LaunchStack OpsHub</h3>

                <p>
                  AI-powered business operations platform built with the MERN
                  stack. Features secure authentication, client/project
                  management, analytics dashboard, SOP library, reports, and
                  an AI Copilot powered by a local LLM.
                </p>

                <div className="case-grid">
                  <div className="case-item">
                    <small>Problem</small>

                    <p>
                      Business operations become fragmented across clients,
                      projects, SOPs, reports, and tasks.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Built</small>

                    <p>
                      A unified MERN operations workspace with authentication,
                      analytics, and an AI Copilot.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Outcome</small>

                    <p>
                      Centralizes operational work and makes recurring
                      information easier to access and manage.
                    </p>
                  </div>
                </div>

                <p className="tech">
                  React • Node.js • Express • MongoDB Atlas • JWT • TailwindCSS
                  • Ollama • Vercel
                </p>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/tanmaykumar7106-collab/launchstack-opshub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                  <a
                    className="project-link demo-link"
                    href="https://launchstack-opshub-pate.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                </div>
              </article>
            )}

            {/* AskMyNotes */}
            {(projectFilter === "All" ||
              projectFilter === "Generative AI" ||
              projectFilter === "AI / ML") && (
              <article className="project-card">
                <div className="project-topline">
                  <span>03</span>
                  <span className="project-badge">RAG + LLM</span>
                </div>

                <h3>AskMyNotes-AI</h3>

                <p>
                  I built a RAG-based document Q&A system that retrieves
                  relevant context from user-provided notes using vector
                  embeddings and generates accurate answers using an LLM,
                  reducing hallucination. Currently Ongoing....
                </p>

                <div className="case-grid">
                  <div className="case-item">
                    <small>Problem</small>

                    <p>
                      Generic LLM answers can miss the context contained in a
                      user’s own notes.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Built</small>

                    <p>
                      A RAG pipeline that retrieves relevant chunks with
                      embeddings before generating an answer.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Outcome</small>

                    <p>
                      Produces more context-grounded answers while reducing
                      unsupported responses.
                    </p>
                  </div>
                </div>

                <p className="tech">
                  Python • LangChain • Streamlit • ChromaDB • Sentence
                  Transformers • Ollama
                </p>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/tanmaykumar7106-collab/AskMyNotes-AI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                  <span className="project-status disabled-demo">
                    Live Demo — Local only
                  </span>
                </div>
              </article>
            )}

            {/* CodeMentor AI */}
            {(projectFilter === "All" ||
              projectFilter === "Generative AI" ||
              projectFilter === "AI / ML") && (
              <article className="project-card project-card-featured">
                <div className="project-topline">
                  <span>04</span>
                  <span className="project-badge">Generative AI</span>
                </div>

                <h3>CodeMentor-AI</h3>

                <p>
                  CodeMentor AI is an AI-powered desktop application that
                  helps students and developers improve their programming
                  skills through intelligent code analysis, automated software
                  testing, and guided problem solving. Powered by IBM Granite
                  and Ollama, the application provides AI-assisted feedback to
                  enhance code quality and strengthen problem-solving
                  abilities.
                </p>

                <div className="case-grid">
                  <div className="case-item">
                    <small>Problem</small>

                    <p>
                      Students need actionable feedback while learning coding,
                      testing, and problem solving.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Built</small>

                    <p>
                      An AI assistant for code analysis, test-case generation,
                      guided problem solving, and reports.
                    </p>
                  </div>

                  <div className="case-item">
                    <small>Outcome</small>

                    <p>
                      Turns AI feedback into a structured learning workflow
                      instead of a one-off code answer.
                    </p>
                  </div>
                </div>

                <p className="tech">
                  Python • IBM Granite • Streamlit • Pandas • Matplotlib •
                  Ollama
                </p>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/tanmaykumar7106-collab/CodeMentor-AI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                  <a
                    className="project-link demo-link"
                    href="https://codementor-ai-hsfhvztcmucdc9fto9mwvh.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                </div>
              </article>
            )}

            {/* Scam Call Detector */}
            {(projectFilter === "All" ||
              projectFilter === "AI / ML") && (
              <article className="project-card project-card-wide">
                <div className="project-topline">
                  <span>05</span>
                  <span className="project-badge">AI + NLP</span>
                </div>

                <h3>AI Scam Call Detector</h3>

                <p>
                  Python-based scam call detection system that analyzes live or
                  recorded speech, converts audio to text, and applies
                  explainable NLP-based risk scoring to identify patterns such
                  as OTP fraud, fake bank verification, KYC scams, urgency,
                  and authority-pressure tactics.
                </p>

                <p className="tech">
                  Python • Speech Recognition • NLP • Google Speech Recognition
                  API • Audio Processing
                </p>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href="https://github.com/tanmaykumar7106-collab/AI-Scam-Call-Detector"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>

                  <span className="project-status disabled-demo">
                    Live Demo — Local only
                  </span>
                </div>
              </article>
            )}
          </div>
        </section>

        {/* Certificates */}
        <section
          id="certificates"
          className="section shell reveal"
        >
          <div className="section-heading">
            <p className="section-index">05</p>

            <h2>
              My <span>Certificates</span>
            </h2>
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
                <h3>
                  AI for Students: Build Your Own Generative AI Model
                </h3>

                <p>45 Hours • June 2025</p>
                <p>NxtWave Workshop.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Achievements */}
        <section className="section shell reveal">
          <div className="section-heading">
            <p className="section-index">06</p>

            <h2>
              Experience & <span>Achievements</span>
            </h2>
          </div>

          <div className="achievement-grid">
            <article className="achievement-card">
              <div className="meta">Internship • 2026</div>

              <h3>Digital Operations Intern</h3>

              <p>
                Technology & Digital Operations Division at LegalEdge
                Professionals, working across digital operations,
                infrastructure, website support, development, and
                maintenance.
              </p>
            </article>

            <article className="achievement-card">
              <div className="meta">Hackathon Project</div>

              <h3>CityPulse AI</h3>

              <p>
                Developing an AI-powered civic complaint and infrastructure
                monitoring platform combining full-stack engineering,
                Generative AI, maps, and computer vision.
              </p>
            </article>

            <article className="achievement-card">
              <div className="meta">AI Project</div>

              <h3>CodeMentor AI</h3>

              <p>
                Built an AI-assisted coding and software-testing project using
                Streamlit, IBM Granite/Ollama workflows, analytics, and
                downloadable reports.
              </p>
            </article>

            <article className="achievement-card">
              <div className="meta">Certification • Aug 2025</div>

              <h3>Generative AI using NLP</h3>

              <p>
                Completed 60 hours of training through United Global
                Infoservice Pvt. Ltd.
              </p>
            </article>

            <article className="achievement-card">
              <div className="meta">Certification • Jun 2025</div>

              <h3>Build Your Own Generative AI Model</h3>

              <p>
                Completed the AI for Students workshop by NxtWave.
              </p>
            </article>

            <article className="achievement-card">
              <div className="meta">GitHub</div>

              <h3>Building in Public</h3>

              <p>
                Maintaining projects across AI/ML, RAG, Generative AI,
                computer vision, and full-stack development on GitHub.
              </p>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="section shell reveal"
        >
          <div className="section-heading">
            <p className="section-index">07</p>

            <h2>
              Let’s <span>Collaborate</span>
            </h2>
          </div>

          <div className="contact-panel">
            <div>
              <div className="availability">
                <span className="availability-dot" />
                Open to internships & collaborations
              </div>

              <h3>
                Have an AI, ML, or full-stack idea worth building?
              </h3>

              <p>
                I’m open to collaborating on meaningful projects, hackathons,
                AI/ML applications, Generative AI systems, and software
                products.
              </p>
            </div>

            <div className="buttons">
              <a
                className="button primary"
                href="mailto:tanmaykumar7106@gmail.com"
              >
                Email Me
              </a>

              <a
                className="button secondary"
                href="https://www.linkedin.com/in/tanmay-kumar-6a19ba2b5/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="button secondary"
                href="https://github.com/tanmaykumar7106-collab"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer shell">
        <p>© 2026 Tanmay Kumar • Built with React ⚛</p>
      </footer>
    </div>
  );
}
