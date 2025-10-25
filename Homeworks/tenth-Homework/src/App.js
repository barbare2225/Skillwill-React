import './App.css';
import profile_pic from "./abs.png"
function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={profile_pic} className="profile" alt="profile" />

        <h1>My name is Barbare!</h1>
        <p>Front-End Developer, Student</p>
        
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! I'm Barbare, a passionate front-end developer and student. I love creating beautiful and functional web applications. In my free time, I enjoy learning new technologies and improving my coding skills.
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: bakjk@gmail.com</li>
          <li>Phone: +995 568 "" :: LL</li>
          <li>LinkedIn: https://www.linkedin.com/in/bare-jnh/</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
