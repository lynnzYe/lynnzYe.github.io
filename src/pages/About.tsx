import PianoFrame from "../component/PianoFrame";
import "./About.css";
import photo from "../assets/photo_life_circle.png";

const About = () => {
  return (
    <PianoFrame id="aboutframe" title="About">
      <div className="about-content">
        <img
          src={photo}
          alt="Linzan Ye"
          className="about-content__photo"
        />
        <div className="about-content__copy">
          <p>
            My name is Linzan (Lynn) Ye. I am currently pursuing an M.S. degree
            in Music and Technology at Carnegie Mellon University, advised by
            Prof. Roger Dannenberg and Chris Donahue.
          </p>
          <p>
            As a music enthusiast, I am fascinated by how music helps us
            communicate our emotions and connect with others. My goal is to
            contribute to the development of AI companions that help minimize
            the barriers to self-expression.
          </p>
        </div>
      </div>
    </PianoFrame>
  );
};

export default About;
