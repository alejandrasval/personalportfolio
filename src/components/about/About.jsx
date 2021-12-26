import "./About.css"
import img from "../../assets/code.jpeg"

const About = () => {
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card">
                    <img src={img} alt="" className="a-img"/>
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-description">Creative, curious and self-taught in a constant state of learning. Civil engineer currently dedicated full time to front-end development, deepening my knowledge about web development and also learning about UX/UI design. As a front-end developer I'm capable of build dynamic web applications using agile methodologies, such as Scrum, and technologies like JavaScript, HTML, CSS, React.JS and Firebase. </p>
                <p className="a-motto"><em>"Do or do not, there is no try" —Yoda</em></p>
            </div>

        </div>
    )
}

export default About
