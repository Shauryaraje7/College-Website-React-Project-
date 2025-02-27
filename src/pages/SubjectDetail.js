import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/SubjectDetail.css"; 

const SubjectDetail = () => {
  const { subjectCode, category } = useParams();

  return (
    <div className="subject-detail-container">
      <h2>{subjectCode} Resources</h2>
      <div className="resource-options">
        <Link
          to={`/subjects/${subjectCode}/videos`}
          className="resource-btn"
        >
          📺 Recommended YouTube Videos
        </Link>
        <Link
          to={`/subjects/${subjectCode}/notes`}
          className="resource-btn"
        >
          📚 Notes & E-Books
        </Link>
        <Link
          to={`/subjects/${subjectCode}/question-papers`}
          className="resource-btn"
        >
          📝 Question Papers & Banks
        </Link>
      </div>
    </div>
  );
};

export default SubjectDetail;
