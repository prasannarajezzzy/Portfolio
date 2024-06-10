import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Col } from "react-bootstrap";

export const CompanyCard = ({ company }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills " class="display-flex">
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={company.company_image} />
          <div className="proj-txtx">
            <h4>{company.company_name}</h4>
            <span>{company.position}</span>
          </div>
        </div>
      </Col>

      <Col size={12} sm={6} md={7} class="exp-text width-100">
        <div className="company-card mb-4 shadow-sm ">
          <div className="company-txt">
            <h5>{company.company_name}</h5>
            <h6 className="text-muted">{company.position}</h6>
            <strong>Date:</strong> {company.date}
            <strong>Location:</strong> {company.location}
            <div>
              <h6 className="text-muted">Responsibilities:</h6>
              <ul>
                {company.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </section>
  );
};
