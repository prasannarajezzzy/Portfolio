import React from "react";

const AboutMe = ({ name, title, skills, lightningPoints }) => {
  // Chunk the skills array into arrays of 4 elements each
  const chunkedSkills = [];
  for (let i = 0; i < skills.length; i += 4) {
    chunkedSkills.push(skills.slice(i, i + 4));
  }

  return (
    <div className="about-me">
      <section className="skill" id="skills">
        <h2>Skills</h2>

        <div className="lightning-points">
          <h3>What I do</h3>
          {lightningPoints.map((skill, index) => (
            <div className="skills-row" key={index}>
              ⚡{skill}
            </div>
          ))}
        </div>
      </section>

      <section className="skill" id="skills">
        <div className="skills-title">
          <h3>Things I know </h3>
        </div>

        <div className="skills-container">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <ul className="skills">
              <li className="skills-row">Python</li>
              {/* <li className="skills-row">MATLAB</li> */}
              <li className="skills-row">Typescript</li>
              <li className="skills-row">JavaScript</li>
              <li className="skills-row">Java</li>
              <li className="skills-row">C/C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Machine Learning</h4>
            <ul className="skills">
              <li className="skills-row">Scikit-learn</li>
              <li className="skills-row">NLTK</li>
              <li className="skills-row">SpaCy</li>
              <li className="skills-row">GPT</li>
              <li className="skills-row">BERT</li>
              <li className="skills-row">TensorFlow</li>
              <li className="skills-row">Yolov8</li>
              <li className="skills-row">PyTorch</li>
              <li className="skills-row">OpenCV</li>
              <li className="skills-row">LLMS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Python Packages</h4>
            <ul className="skills">
              <li className="skills-row">Flask</li>
              <li className="skills-row">NumPy</li>
              <li className="skills-row">Pandas</li>
              <li className="skills-row">Jupyter Notebook</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Web Development and Database</h4>
            <ul className="skills">
              <li className="skills-row">React.js</li>
              <li className="skills-row">Vue</li>
              <li className="skills-row">HTML</li>
              <li className="skills-row">CSS</li>
              <li className="skills-row">Node.js</li>
              <li className="skills-row">Express.js</li>
              <li className="skills-row">PostgreSQL</li>
              <li className="skills-row">MySQL</li>
              <li className="skills-row">NoSQL</li>
              <li className="skills-row">Oracle</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud Technology and Tools</h3>
            <ul className="skills">
              <li className="skills-row">AWS</li>
              <li className="skills-row">Azure</li>
              <li className="skills-row">GCP</li>
              <li className="skills-row">MLflow</li>
              <li className="skills-row">Docker</li>
              <li className="skills-row">Kubernetes</li>
              <li className="skills-row">Git</li>
              <li className="skills-row">GitHub</li>
              <li className="skills-row">Jira</li>
              <li className="skills-row">Jenkins</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
