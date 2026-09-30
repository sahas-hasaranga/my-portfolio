import Head from 'next/head';

export const metadata = {
  title: 'Sahas Hasaranga | Portfolio',
  description: 'Portfolio of Sahas Hasaranga - Software Developer',
};

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-brand">
            <img src="/profile.jpg" alt="Sahas Hasaranga" className="nav-avatar" />
            <div className="nav-brand-text">
              <span className="nav-name">Sahas Hasaranga</span>
              <span className="nav-role">Software Developer</span>
            </div>
          </div>
          
          <div className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#journey" className="nav-item">Journey</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>

          <div className="nav-actions">
            <a href="https://github.com/sahas-hasaranga" target="_blank" className="btn btn-dark">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sahas-hasaranga-82474a397/" target="_blank" className="btn btn-linkedin">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-dot"></span>
              Open to Internships, Collaborations & Professional Opportunities
            </div>
            
            <h1>
              Hi, I'm <span className="text-blue">Sahas<br/>Hasaranga</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Passionate Software Developer | Specializing in Flutter, React & Full-Stack Development
            </h2>
            
            <p className="hero-description">
              I am a driven software developer specializing in building exceptional digital experiences. Always eager to build industrial-level applications, I focus on transforming real-world ideas into reliable, user-centric software solutions using modern technologies like Flutter, React, and Node.js.
            </p>
            
            <div className="flex-row mt-6">
              <a href="#projects" className="btn btn-primary">
                Explore Projects →
              </a>
              <a href="https://github.com/sahas-hasaranga" target="_blank" className="btn btn-dark">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sahas-hasaranga-82474a397/" target="_blank" className="btn btn-linkedin">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/profile.jpg" alt="Sahas Hasaranga" className="hero-image" />
              <div className="hero-image-pill">
                Software Developer
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section text-section">
          <h2>Passionate about solving real-world challenges with software</h2>
          <p><strong>A driven software developer transforming ideas into practical, user-centric solutions.</strong></p>
          <p className="mt-4">
            I am a passionate and motivated Software Developer specializing in Flutter, React, and Full-Stack Development. My primary focus is on building robust and scalable industrial-level applications that deliver seamless user experiences across mobile and web platforms.
          </p>
          <p>
            My engineering work bridges software theory with practical, production-level implementation. Over the course of my journey, I have developed a strong foundation in modern tech stacks:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', marginBottom: '1rem', marginTop: '1rem' }}>
            <li className="mb-2"><strong>Mobile Computing:</strong> Building high-performance, cross-platform mobile applications using Flutter and Dart, ensuring smooth animations and responsive UIs.</li>
            <li className="mb-2"><strong>Frontend Web Development:</strong> Crafting dynamic and accessible web interfaces with React, Next.js, and modern CSS frameworks like Tailwind.</li>
            <li className="mb-2"><strong>Backend & APIs:</strong> Developing scalable backend architectures and RESTful APIs using Node.js, Express, and Python, seamlessly integrated with databases.</li>
            <li className="mb-2"><strong>Database Management:</strong> Working with both SQL and NoSQL databases like Firebase, MongoDB, and PostgreSQL to ensure data integrity and fast retrieval.</li>
          </ul>
          <p>
            My objective is to contribute to innovative engineering teams, continuously grow professionally, and tackle complex software challenges with structured logic and clean code.
          </p>
        </section>

        {/* Technical Arsenal (Skills) */}
        <section id="skills" className="section" style={{ paddingTop: '50px' }}>
          <h2>Technical Arsenal</h2>
          <p style={{ marginBottom: '2rem' }}>A comprehensive categorization of technical proficiencies across mobile computing, web development, and backend engineering.</p>
          
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Core Strengths</h3>
              <ul>
                <li>Mobile App Development</li>
                <li>Full-Stack Web Dev</li>
                <li>Object-Oriented Programming</li>
                <li>Version Control (Git)</li>
                <li>Problem Solving</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Programming Languages</h3>
              <ul>
                <li>Dart</li>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Mobile & Frontend</h3>
              <ul>
                <li>Flutter</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Material Design</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Backend & Databases</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Firebase (Auth, Firestore)</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h3>Tools & Architecture</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Figma UI/UX</li>
                <li>Agile Practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <h2>Featured Projects</h2>
          
          <div className="skills-grid mt-8">
            {/* Project 1 */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Mobile App</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>Smart Container Box</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  A professional Flutter mobile application for monitoring Smart Container Boxes with real-time telemetry, ESP32-CAM live streaming, and GPS tracking.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Flutter</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Dart</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/Smart-Container-Box-Mobile-Application" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Full-Stack Web</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>Smart Gadget Marketplace</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  A complete full-stack e-commerce marketplace platform for smart gadgets, built with React, Node.js, Express, and MongoDB.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>React</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Node.js</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>MongoDB</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/Smart-Gadget-Marketplace-" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

            {/* Project 3 */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Enterprise System</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>Eco Smart Waste System v2.0</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  An Enterprise Urban Waste Management System powered by Advanced Data Structures (Max-Heap, AVL Tree, Dijkstra) built with Node.js and React.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Data Structures</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>React</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Node.js</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/-smart-waste-system-v2" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>
            
            {/* Project 4 */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Management System</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>PawPalace Pet Shop</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  PawPalace is a Pet Shop Management System built with PHP and MVC architecture. Developed as a final diploma project.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>PHP</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>MVC</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>MySQL</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/paw-palace-diploma-final-project" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

            {/* Project 5: PharmaGo */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Mobile App</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>PharmaGo MAD Project</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  Mobile Application Development coursework project - PharmaGo medicine ordering and delivery app built for Android.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Java</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Android</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Firebase</span>
                </div>
              </div>
              <a href="https://github.com/Ramesha-Dasangi/PharmaGo-MAD-Project" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

            {/* Project 6: AL Analysis */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Data Analysis</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>A/L Results Analysis (2020)</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  Exploratory Data Analysis (EDA) and data profiling of the Sri Lankan G.C.E. Advanced Level 2020 examination results using Python and Pandas.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Python</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Pandas</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Jupyter</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/Sri-Lanka-AL-results-2020-analysis" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

            {/* Project 7: Customer Churn */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Machine Learning</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>Customer Churn Prediction</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  An end-to-end Machine Learning web application (Python, Flask, React) to predict telecom customer churn. Features K-Means clustering and Logistic Regression.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Python</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Flask</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>React</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/Customer-Churn-Prediction" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

            {/* Project 8: Petalio Blossom */}
            <div className="skill-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Mobile App</p>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0 }}>Petalio Blossom System</h3>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  A comprehensive Flutter-based management system featuring modules for daily harvest tracking, customer management, employee attendance, and order processing.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Flutter</span>
                  <span style={{ padding: '0.2rem 0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600 }}>Dart</span>
                </div>
              </div>
              <a href="https://github.com/sahas-hasaranga/petalio-blossom-management-system" target="_blank" className="btn btn-dark" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}>
                View on GitHub
              </a>
            </div>

          </div>
        </section>

        <section id="journey" className="section" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <h2>My Journey</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            
            <div className="skill-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
              <div style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent)' }}>Ongoing</div>
              <div>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Higher National Diploma in Software Engineering</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>National Institute of Business Management (NIBM), Galle</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Currently pursuing advanced studies in software engineering, focusing on enterprise application development, mobile computing, and modern frameworks.
                </p>
              </div>
            </div>

            <div className="skill-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
              <div style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent)' }}>Completed</div>
              <div>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Diploma in Software Engineering</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>National Institute of Business Management (NIBM), Galle</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Successfully completed with Distinction. Built a strong foundation in Object-Oriented Programming, MVC architectures, and full-stack development.
                </p>
              </div>
            </div>

            <div className="skill-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
              <div style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent)' }}>Selected</div>
              <div>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Selected for Higher Education</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>Gampaha Wickramarachchi University</p>
              </div>
            </div>

            <div className="skill-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
              <div style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent)' }}>Completed</div>
              <div>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Diploma in English</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>ESOFT Metro Campus</p>
              </div>
            </div>

            <div className="skill-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
              <div style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent)' }}>Completed</div>
              <div>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>G.C.E. Advanced Level</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>Richmond College, Galle</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Technology Stream (SFT-B, ICT-C, ET-C).
                </p>
              </div>
            </div>

            <div className="skill-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
              <div style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent)' }}>Completed</div>
              <div>
                <h3 style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>G.C.E. Ordinary Level</h3>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>G/Dikkumbura Sri Siddhartha N.C.</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Achieved 4 A's (Maths, ICT, History, Buddhism) and 5 B's.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
          <div className="contact-grid">
            {/* Left Column: Text & Cards */}
            <div>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Get in touch</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                Looking for an enthusiastic, skilled software developer?
              </h2>
              <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
                I am always open to discussing software development opportunities, innovative collaborations, project ideas, or networking with professionals in the technology industry. Feel free to connect via LinkedIn, GitHub, or send a direct email inquiry.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="mailto:sahasahas540@gmail.com" className="contact-info-card">
                  <div className="contact-icon-wrapper email">✉</div>
                  <div className="contact-info-text">
                    <span>Direct Email</span>
                    <strong>sahasahas540@gmail.com</strong>
                  </div>
                </a>

                <a href="https://github.com/sahas-hasaranga" target="_blank" className="contact-info-card">
                  <div className="contact-icon-wrapper github">
                    <svg height="24" viewBox="0 0 16 16" width="24" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                  </div>
                  <div className="contact-info-text">
                    <span>GitHub</span>
                    <strong>github.com/sahas-hasaranga</strong>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/sahas-hasaranga-82474a397/" target="_blank" className="contact-info-card">
                  <div className="contact-icon-wrapper linkedin">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <div className="contact-info-text">
                    <span>LinkedIn Profile</span>
                    <strong>linkedin.com/in/sahas-hasaranga-82474a397</strong>
                  </div>
                </a>

                <div className="contact-info-card" style={{ cursor: 'default' }}>
                  <div className="contact-icon-wrapper location">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="contact-info-text">
                    <span>Location</span>
                    <strong>Geemadura, Vilegoda, Weligama</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <div className="contact-form-card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Send a Direct Message</h3>
                <form>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" placeholder="Your email address" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Write your message here..." rows={4} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%', fontSize: '1rem', padding: '0.8rem' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
