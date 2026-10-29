
import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  // Change between light and dark mode
  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  // Handle contact form submission
  function handleSubmit(event) {
    event.preventDefault();

    setFeedback(
      `Thank you, ${name}! Your form has been completed.`
    );

    setName("");
    setEmail("");
    setMessage("");
  }

  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description:
        "A personal website created using HTML and CSS.",
      technology: "HTML · CSS"
    },
    {
      id: 2,
      title: "Interactive Quiz",
      description:
        "An interactive quiz using JavaScript.",
      technology: "JavaScript"
    },
    {
      id: 3,
      title: "Responsive Webpage",
      description:
        "A responsive website for mobile and desktop.",
      technology: "HTML · CSS · JavaScript"
    }
  ];

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      {/* Navigation */}
      <header className="header">
        <nav className="navbar" aria-label="Main navigation">
          <a href="#home" className="logo">
            MyPortfolio.
          </a>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY WEBSITE</p>

            <h1>Hello, I'm a Student Developer.</h1>

            <p>
              I am passionate about web development,
              programming and creating responsive websites.
            </p>

            <a href="#projects" className="btn">
              View My Projects
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>

          <p>
            I am a computing student learning how to create
            modern and interactive websites using HTML,
            CSS, JavaScript and React.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>My Projects</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.technology}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact Me</h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              required
            />

            <button type="submit" className="btn">
              Send Message
            </button>

            <p role="status" aria-live="polite">
              {feedback}
            </p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 My Portfolio. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
