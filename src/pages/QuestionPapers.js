import React from "react";
import { useParams } from "react-router-dom";
import "../styles/QuestionPapers.css"; // Link to the CSS file

// Sample data for question papers
const questionPapersData = {
  CSE2001: [
    { name: "Lecture 1 - Introduction to Problem Solving", link: "https://drive.google.com/file/d/1CkGieAG73Abst3e0on4Brlu8HR29jYgv/view?usp=drive_link" },
    { name: "Lecture 2 - Data Structures Basics", link: "/pdfs/cse2001_lecture2.pdf" },
  ],
  CSE2002: [
    { name: "Lecture 1 - Data Structures and Algorithms Basics", link: "/pdfs/cse2002_lecture1.pdf" },
  ],
  CSE2003: [
    { name: "Lecture 1 - Computer Architecture Basics", link: "/pdfs/cse2003_lecture1.pdf" },
  ],
  CSE2004: [
    { name: "Lecture 1 - Theory of Computation", link: "/pdfs/cse2004_lecture1.pdf" },
  ],
  CSE3001: [
    { name: "Lecture 1 - Database Management Systems Introduction", link: "/pdfs/cse3001_lecture1.pdf" },
  ],
  CSE3003: [
    { name: "Lecture 1 - Operating Systems Basics", link: "/pdfs/cse3003_lecture1.pdf" },
  ]
  // Add more subject data as needed
};

const QuestionPapers = () => {
  const { subjectCode } = useParams();
  const questionPapers = questionPapersData[subjectCode] || [];

  return (
    <div className="question-papers-container">
      <h2>Question Papers for {subjectCode}</h2>
      {questionPapers.length > 0 ? (
        <div className="question-papers-list">
          {questionPapers.map((paper, index) => (
            <div key={index} className="question-paper-item">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="question-paper-link"
              >
                📝 {paper.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-papers">No question papers available.</p>
      )}
    </div>
  );
};

export default QuestionPapers;
