import React from "react";
import "./About.css";
import about from "../../Images/about.png";
const About = () => {
  return(
  <section id="about" className="about">
    <div className="container">
      <h2 className="title">
        About <span>Company</span>
      </h2>
      <img src={about} alt="about logo" />
      <p>
        when looking at its layout. The point of using Lorem Ipsum is that it
        has a more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now
      </p>
       <div className="read">
         <a href="#" className="btn">Read More</a>
       </div>
    </div>
  </section>);
};

export default About;
