import React from "react";
import ResearchPaperList from "./ResearchPaperList";

const App = () => {
  const researchPapers = [
    {
      title: "Paper 1",
      imgUrl: "paper1.jpg",
      description: "Description of paper 1...",
    },
    {
      title: "Paper 2",
      imgUrl: "paper2.jpg",
      description: "Description of paper 2...",
    },
    {
      title: "Paper 3",
      imgUrl: "paper3.jpg",
      description: "Description of paper 3...",
    },
    // Add more papers as needed
  ];

  return (
    <div>
      <h1>Research Papers</h1>
      <ResearchPaperList papers={researchPapers} />
    </div>
  );
};

export default App;
