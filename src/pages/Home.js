import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const categories = [
    { name: "Programme Core", credits: 55, path: "/subjects/programme-core" },
    { name: "Programme Elective", credits: 15, path: "/subjects/programme-elective" },
    { name: "University Core - Natural Science Core", credits: 23, path: "/subjects/university-core-natural-science-core" },
    { name: "University Core - Basic Engineering Sciences Core", credits: 12, path: "/subjects/university-core-basic-engineering-sciences-core" },
    { name: "University Core - Skill Development Courses", credits: 14, path: "/subjects/university-core-skill-development" },
    { name: "University Core - Humanities Social Science and Management Core", credits: 6, path: "/subjects/university-core-humanities-social-science-management-core" },
    { name: "University Core - Project and Internships", credits: 17, path: "/subjects/university-core-project-internships" },
    { name: "University Elective - Natural Science Electives", credits: 6, path: "/subjects/university-elective-natural-science" },
    { name: "University Elective - Multidisciplinary Electives", credits: 3, path: "/subjects/university-elective-multidisciplinary-electives" },
    { name: "University Elective - Humanities, Social Sciences and Management Electives", credits: 3, path: "/subjects/university-elective-humanities-social-sciences-and-management-electives" },
    { name: "University Elective - Open Electives", credits: 6, path: "/subjects/university-elective-open" },
    { name: "Non - Graded Mandatory Courses", credits: 9, path: "/subjects/non-graded-mandatory" },
  ];
  return (
    <div className="container">
      <h1 className="title">Select a Category</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <Link key={index} to={category.path} className="category-btn">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
