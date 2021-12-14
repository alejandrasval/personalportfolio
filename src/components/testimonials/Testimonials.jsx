import "./Testimonials.css"

const Testimonials = () => {
    return (
        <div className="testimonial">
            <h1 className="t-title">Testimonials</h1>
        <div className="t-catalogue">
        <div className="testimonials">
            <div className="t1">
                <h3 className="t-name">Nick</h3>
                <p className="t-description">"She works with passion as shown in the final result of her work. The final result of my web page left me speechless, was exactly what I wanted and what my company needed."</p>
            </div>
            <div className="t1">
                <h3 className="t-name">Ana</h3>
                <p className="t-description">"Her work exceeded my expectations with the design and development of my website. She was always aware of the client's needs and helped me to find the best solution."</p>
            </div>
            <div className="t1">
                <h3 className="t-name">Juan</h3>
                <p className="t-description">"She is such a great professional, we've worked in several times and I fully recommend her."</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Testimonials
