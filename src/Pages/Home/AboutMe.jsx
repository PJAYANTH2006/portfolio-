export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title"></p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">

<i>Hi, I'm Pothala sai Jayanth, a passionate Full-Stack Web Developer with a love for crafting seamless and efficient digital experiences. With expertise in both frontend and backend development, I specialize in building dynamic, user-friendly websites and applications.
    <br />
🔹 Frontend: HTML, CSS, JavaScript, React, Vue.js
<br />
🔹 Backend: Node.js, Express, Python, Django, PHP
<br />
🔹 Databases: MySQL, PostgreSQL, MongoDB
<br />
🔹 Tools & DevOps: Git, Docker, AWS, Firebase
<br />

I thrive on turning ideas into functional, scalable solutions while focusing on performance, security, and great user experiences. Whether it’s developing a sleek UI, optimizing backend logic, or deploying full-scale applications, I love bringing projects to life.

Let’s build something amazing together!</i>

          </p>
        </div>
      </div>
      <a href="resume.png" download className="btn btn-primary">
            Download My Resume
          </a>
    </section>
  );
}
