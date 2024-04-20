import aboutImg from "../../assets/images/about.png";
import aboutCarding from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mb-[70px]">
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-12%]  xl:right-[22%]">
              <img src={aboutCarding} alt="" />
            </div>
          </div>

          {/* content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              For past 5 years my frien ds are doing their best as a Doctors.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, voluptate cupiditate nisi ipsum ducimus omnis delectus,
              maiores aliquid mollitia nam similique quod cumque officia facere.
            </p>
            <p className="text__para mt-[30px]">
              For past 5 years my frien ds are doing their best as a Doctors.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, voluptate cupiditate nisi ipsum ducimus omnis delectus,
              maiores aliquid mollitia nam similique quod cumque officia facere.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
