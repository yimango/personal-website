import TypeAnimation from './Components/TypeAnimation.jsx';
import './AboutMe.css'; // Import your CSS file for styling (create this file if it doesn't exist)

const AboutMe = () => {
  return (
    <section className="section aboutme">
      <div className="container">
        <div className="about-me">
          <h1>Who am I?</h1>
          <TypeAnimation message={"Hello! I'm Justin, a dedicated student and software developer fascinated by the fields of Combinatorics & Optimization, Statistics, and their practical applications in quant finance and AI. Currently pursuing my academic journey, I am deeply involved in exploring complex systems and leveraging data-driven insights to optimize solutions. Outside of my academic pursuits and software development projects, I have a passion for hockey and photography. On the ice, I find both challenge and camaraderie, while behind the lens, I capture moments that inspire and tell stories. Join me as I navigate through the fascinating intersections of mathematics, technology, and finance, aiming to create meaningful impacts through innovation and analytical rigor."} />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
