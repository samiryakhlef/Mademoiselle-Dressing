import "./About.css";

export const About = () => {
    const imageAbout = "https://via.placeholder.com/1200x600";
    const roundImage = "https://via.placeholder.com/150";

    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <img className="about-image" src={imageAbout} alt="About Us" />
            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed aliquet magna in libero finibus, sed feugiat nunc sollicitudin.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-text">
                We are dedicated to providing high-quality products and services to our customers.
                Our mission is to make a positive impact on peoples lives through innovative solutions.
            </p>
            <h2 className="about-subtitle">Our Team</h2>
            <ul className="about-team-list">
                <li>
                    <img className="team-member-image" src={roundImage} alt="Team Member" />
                    John Doe - CEO
                </li>
                <li>
                    <img className="team-member-image" src={roundImage} alt="Team Member" />
                    Jane Smith - CTO
                </li>
                <li>
                    <img className="team-member-image" src={roundImage} alt="Team Member" />
                    Mike Johnson <br /> Marketing Director
                </li>
            </ul>
        </div>
    );
};