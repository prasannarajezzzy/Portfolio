import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CompanyCard } from "./CompanyCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import HarnessLogo from "../assets/company/harness.jpeg";
import PCELogo from "../assets/company/PCE.jpeg";
import CHCLogo from "../assets/company/chc-banner.jpg";
import EdcastLogo from "../assets/company/edcast.png";
import IITMLogo from "../assets/company/IITM.png";
import MSLogo from "../assets/company/ms.jpg";

import "animate.css";

export const Experience = () => {
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

  const companies = [
    {
      company_name: "Harness",
      company_image: HarnessLogo,
      position: "Technical Research Analyst Intern",
      points: [
        "Developed an AI-assisted search engine leveraging Elasticsearch for efficient indexing and retrieving pipeline logs, enhancing the recommendation system's searching by a 40% increase in search speed.",
        "Developed statistical models for churn prediction, unveiling patterns, prevented about 50k in potential revenue losses.",
      ],
      date: "December 2023-Present",
      location: "San Francisco, California",
    },
    {
      company_name: "Professional, and Continuation Education CSU",
      company_image: PCELogo,
      position: "Data Scientist",
      points: [
        "Optimized intricate database schemas in MySQL and Oracle, while building and managing data pipelines using Spark, and MLflow accelerated data throughput by 20%.",
        "Trained and mentored 6 junior data engineers on best practices for SQL query optimization and ETL process design.",
      ],
      date: "January 2023-November 2023",
      location: "Chico CA",
    },
    {
      company_name: "Center for Healthy Communities",
      company_image: CHCLogo,
      position: "Data Science Intern",
      points: [
        "Utilized machine learning ensemble methods for the classification of effective campaign partners with 88% accuracy, resulting 20% increase in conversion rate.",
        "Analyzed over 3000+ survey data using Applied Natural Language Processing techniques such as text analytics, data cleaning, and using BERT for topic modeling, providing valuable insights for decision-making.",
      ],
      date: "August 2022-December 2022",
      location: "Chico, CA",
    },
    {
      company_name: "EdCast Asia Pvt. Ltd",
      company_image: EdcastLogo,
      position: "Software Developer",
      points: [
        "Engineered single-page application with Vue JS, improving front-end development, component lifecycle, and modular reusability, leading to a 33% increase in turnaround time.",
        "Built Computer Vision model attaining 92% accuracy, detecting real-time elements, and integrating it with Web App",
        "Successfully integrated MLOps practices, resulting in 10% reduction in model deployment time.",
        "Employed multivariate experiments and A/B tests, tripling user engagement through data-driven refinements in feature prioritization, UI design, and alerting thresholds.",
      ],
      date: "July 2020-July 2022",
      location: "Mumbai, India",
    },
    {
      company_name: "Indian Institute of Tropical Meteorology (IITM)",
      company_image: IITMLogo,
      position: "Jr. Data Scientist",
      points: [
        "Created efficient Deep Learning algorithm SRCNN (Super-Resolution Convolutional Neural Network) with 93% accuracy, performing pixel-wise arrangements of low to high-resolution images.",
        "Reduced deployment time by 50% with Machine Learning pipelines that automated the workflow from preprocessing to model evaluation.",
      ],
      date: "July 2019-March 2020",
      location: "Pune, India",
    },
    {
      company_name: "Mahindra Susten",
      company_image: MSLogo,
      position: "Computer Vision Intern (IoT)",
      points: [
        "Devised automated system that utilized YoloV2 deep learning models for annotation, segmentation, and recognition of cells within solar panels' infrared images, achieved 82% accuracy helped in reducing 60% of manual reporting.",
      ],
      date: "June 2018-July 2018",
      location: "Mumbai, India",
    },
  ];

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experience</h2>
              <div>
                <Row>
                  {companies.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
