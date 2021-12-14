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
                <p className="a-description">I have a civil engineering degree but in 2021 I decided to join the tech sector and assisted to a front-end development bootcamp. I consider myself a responsible and creative person. I firmly believe that education is the most powerful weapon to change the world and that's why I am constantly learning new things. I always try to put the best part of me in every work I do. </p>
            </div>

        </div>
    )
}

export default About
