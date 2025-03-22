const About = ({ about }) => {
    return (
        <div className="about">
            <div className="container">
                <h2 className="about__title">{about.titleUp}</h2>
                <div className="about__wrap">
                    <div className="about__img">
                        <img src={about.img} alt="" />
                    </div>
                    <div className="about__desc">
                        <h3 className="about__desc-name">{about.name}</h3>
                        <p className="about__desc-skills">{about.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
