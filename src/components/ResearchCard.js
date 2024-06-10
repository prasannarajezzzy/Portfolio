import React from "react";
import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./app.css";
export const ResearchCard = ({ researchData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="research-carousel">
      <div className="research-title">
        <span>{researchData.title}</span>
      </div>
      <div className="proj-imgbx">
        <img src={researchData.logo} />
        <div className="proj-txtx">
          <span>Work Work Work....</span>
        </div>
      </div>
      <ol>
        {researchData.list_of_data.map((research, index) => (
          <div>
            <div className="bullets-card">
              <div key={index} className="research-item ul">
                <span>{index + 1 + ". " + research.title}</span>
                {/* <p>{research.description}</p> */}
              </div>
            </div>
            <p>
              {research.description}
              <span>
                {research.link ? (
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                ) : (
                  ""
                )}
              </span>
            </p>
          </div>
        ))}
      </ol>
    </section>
  );
};
