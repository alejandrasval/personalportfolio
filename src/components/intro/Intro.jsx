import "./Intro.css";
import avatar from "../../assets/avatar.png"

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi there! My name is</h2>
          <h1 className="i-name">Alejandra</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-end development</div>
              <div className="i-title-item">UI/UX design</div>
              <div className="i-title-item">Photography</div>
            </div>
          </div>
          <p className="i-description">
              I'm a front-end developer based in Medellín, Colombia. I have experience with HTML5, CSS3, JS and React.js. I'm currently learning about UI/UX design. I design modern and incredible websites. 
          </p>
        </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={avatar} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
