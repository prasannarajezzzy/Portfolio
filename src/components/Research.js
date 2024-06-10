import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ResearchCard } from "./ResearchCard";

import AchievementsLogo from "../assets/gifs/achieve.webp";
import CertificationLogo from "../assets/gifs/certification.webp";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ResearchLogo from "../assets/gifs/research.webp";

import "./app.css"; // Import CSS file
export const Research = () => {
  const research_data = {
    title: "Research Work",
    logo: ResearchLogo,
    list_of_data: [
      {
        title:
          "Sensor Fusion with Multi-modal Transformer Ground Sensor Network for Endangered Animal Protection in Large Area",

        description: "SPIE 23-24 conference",
        link: "https://spie.org/defense-commercial-sensing/presentation/Sensor-fusion-with-multi-modal-ground-sensor-network-for-endangered/13057-12",
      },
      {
        title:
          "Smart Surveillance Using OpenCV, Motion Analysis And Facial Landmark",
        description: "  SSRG - IJVSP · Jun 10, 2020",
        link: "https://www.internationaljournalssrg.org/IJVSP/2020/Volume7-Issue1/IJVSP-V7I1P103.pdf",
      },
      {
        title: "Photovoltaic cell defect detection in solar panel using OpenCV",
        description: " (IJSECS) 2018",
        link: "https://www.iraj.in/journal/journal_file/journal_pdf/12-547-155973453858-61.pdf",
      },
      {
        title:
          "Deep-learning based down-scaling of summer monsoon rainfall data over Indian region",
        description: "Atmospheric and Oceanic Physics",
        link: "https://link.springer.com/article/10.1007/s00704-020-03489-6",
      },
    ],
  };
  const achievements_data = {
    title: "Leadership and Achievement",
    logo: AchievementsLogo,
    list_of_data: [
      {
        title: "Chief Technical Officer",
        description:
          "Grigora Avis Technical Club, California State University, Chico, 2022",
        link: null,
      },
      {
        title: "Chief Executive Officer",
        description:
          "CodeX Edtech startup connecting talent with Opportunities 2020",
        link: null,
      },
      {
        title: "Winner of Smart India Hackathon",
        description:
          "Under 1500 participants in ISRO (Indian Space Research Organization) Domain 2020",
        link: null,
      },
      {
        title: "Excellent Paper Presentation Award",
        description: "Winner of Terna IOT Competition",
        link: "",
      },
      {
        title: "3rd runner up in Bitcamp",
        description: "Conducted by CSI RAIT",
        link: "",
      },
    ],
  };
  const certification_data = {
    title: "Certifications",
    logo: CertificationLogo,
    list_of_data: [
      {
        title: "Machine Learning by Stanford University",
        description: "",
        conference: "",
        link: "https://www.coursera.org/account/accomplishments/verify/YLMZHP6X7J4S?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link",
      },
      {
        title:
          "Introduction to Deep Learning & Neural Networks with Keras by IBM",
        description: "",
        conference: "",
        link: "https://www.coursera.org/account/accomplishments/verify/BTFJQ6YJ3QE5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      },
      {
        title: "Interactivity with JavaScript",
        description: "",
        conference: "",
        link: "https://www.coursera.org/account/accomplishments/verify/9JX9QN8BTVF5",
      },
      {
        title: "Python for Data Science IBM",
        description: "",
        conference: "",
        link: "https://courses.cognitiveclass.ai/certificates/f1a9feaad973454da3531ad5b81b6bda",
      },
    ],
  };

  return (
    <section className="project research-container" id="research">
      <div className="research-container">
        <h2>Achievements And Certifications</h2>
        <p>
          ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I
          HAVE DONE !
        </p>
        <Row>
          <Col size={12}>
            <ResearchCard researchData={research_data} />
          </Col>
          <Col size={12}>
            <ResearchCard researchData={certification_data} />
          </Col>
          <Col size={12}>
            <ResearchCard researchData={achievements_data} />
          </Col>
        </Row>
      </div>
    </section>
  );
};
