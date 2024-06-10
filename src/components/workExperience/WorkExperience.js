import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

import HarnessLogo from "../..//assets/company/harness.jpeg";
import PCELogo from "../../assets/company/PCE.jpeg";
import CHCLogo from "../../assets/company/chc-banner.jpg";
import EdcastLogo from "../../assets/company/edcast.png";
import IITMLogo from "../../assets/company/IITM.png";
import MSLogo from "../../assets/company/ms.jpg";
// import { Fade } from "react-reveal";

export default function WorkExperience() {
  const workExperiencess = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "Blockchain Developer",
        company: "Arcana",
        companylogo: "",
        date: "October 2019 – Present",
        desc: "",
        descBullets: [
          "Design and implement smart contracts for the company",
          "Build a back-end server that handles meta transactions and powers the dashboard",
          "Design and implement access control and storage of arcana network",
          "Protocol development",
        ],
      },
      {
        role: "Blockchain Developer",
        company: "Blocklogy",
        companylogo: "",
        date: "April 2019 – May 2019",
        descBullets: [
          "Built eraswap.life which is a gateway to eraswap ecosystem",
          "Worked on backend of dayswappers.com which is referral and affiliate program of Era Swap Ecosystem.",
        ],
      },
      {
        role: "Computer Vision Intern",
        company: "Mahindra Susten",
        companylogo: "",
        date: "Jan 2019 – Feb 2019",
        desc: "Photovoltaic cells crack detection using Computer Vision.\nTech stack used:",
        descBullets: ["Python", "OpenCv", "Docx"],
      },
    ],
  };

  const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
      {
        company: "Harness",
        companylogo: HarnessLogo,
        role: "Technical Research Analyst Intern",
        descBullets: [
          "Developed an AI-assisted search engine leveraging Elasticsearch for efficient indexing and retrieving pipeline logs, enhancing the recommendation system's searching by a 40% increase in search speed.",
          "Developed statistical models for churn prediction, unveiling patterns, prevented about 50k in potential revenue losses.",
        ],
        date: "December 2023-Present",
        location: "San Francisco, California",
      },
      {
        company: "Professional, and Continuation Education CSU",
        companylogo: PCELogo,
        role: "Data Scientist",
        descBullets: [
          "Optimized intricate database schemas in MySQL and Oracle, while building and managing data pipelines using Spark, and MLflow accelerated data throughput by 20%.",
          "Trained and mentored 6 junior data engineers on best practices for SQL query optimization and ETL process design.",
        ],
        date: "January 2023-November 2023",
        location: "Chico CA",
      },
      {
        company: "Center for Healthy Communities",
        companylogo: CHCLogo,
        role: "Data Science Intern",
        descBullets: [
          "Utilized machine learning ensemble methods for the classification of effective campaign partners with 88% accuracy, resulting 20% increase in conversion rate.",
          "Analyzed over 3000+ survey data using Applied Natural Language Processing techniques such as text analytics, data cleaning, and using BERT for topic modeling, providing valuable insights for decision-making.",
        ],
        date: "August 2022-December 2022",
        location: "Chico, CA",
      },
      {
        company: "EdCast Asia Pvt. Ltd",
        companylogo: EdcastLogo,
        role: "Software Developer",
        descBullets: [
          "Engineered single-page application with Vue JS, improving front-end development, component lifecycle, and modular reusability, leading to a 33% increase in turnaround time.",
          "Built Computer Vision model attaining 92% accuracy, detecting real-time elements, and integrating it with Web App",
          "Successfully integrated MLOps practices, resulting in 10% reduction in model deployment time.",
          "Employed multivariate experiments and A/B tests, tripling user engagement through data-driven refinements in feature prioritization, UI design, and alerting thresholds.",
        ],
        date: "July 2020-July 2022",
        location: "Mumbai, India",
      },
      {
        company: "Indian Institute of Tropical Meteorology (IITM)",
        companylogo: IITMLogo,
        role: "Jr. Data Scientist",
        descBullets: [
          "Created efficient Deep Learning algorithm SRCNN (Super-Resolution Convolutional Neural Network) with 93% accuracy, performing pixel-wise arrangements of low to high-resolution images.",
          "Reduced deployment time by 50% with Machine Learning pipelines that automated the workflow from preprocessing to model evaluation.",
        ],
        date: "July 2019-March 2020",
        location: "Pune, India",
      },
      {
        company: "Mahindra Susten",
        companylogo: MSLogo,
        role: "Computer Vision Intern (IoT)",
        descBullets: [
          "Devised automated system that utilized YoloV2 deep learning models for annotation, segmentation, and recognition of cells within solar panels' infrared images, achieved 82% accuracy helped in reducing 60% of manual reporting.",
        ],
        date: "June 2018-July 2018",
        location: "Mumbai, India",
      },
    ],
  };

  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <div className="experience-container" id="workExperience">
          <div>
            <div className="">
              <h1>Experiences</h1>
            </div>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card) => {
                return (
                  <ExperienceCard
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* </Fade> */}
      </div>
    );
  }
  return null;
}
