import { Link, useParams } from "react-router-dom";
import "../styles/Subjects.css";

const Subjects = () => {
  const { category } = useParams();

  const subjectsData = {
"programme-core": [
      { name: "Object Oriented Programming With C++", code: "CSE2001" },
      { name: "Data Structures and Algorithms", code: "CSE2002" },
      { name: "Computer Architecture and Organization", code: "CSE2003" },
      { name: "Theory Of Computation And Compiler Design", code: "CSE2004" },
      { name: "Database Management Systems", code: "CSE3001" },
      { name: "Operating System", code: "CSE3003" },
      { name: "Design Analysis Of Algorithm", code: "CSE3004" },
      { name: "Software Engineering", code: "CSE3005" },
      { name: "Computer Networks", code: "CSE3006" },
      { name: "Parallel and Distributed Computing", code: "CSE3009" },
      { name: "Python Programming", code: "CSE3011" },
      { name: "Internet and Web Programming", code: "CSE4001" },
      { name: "Digital Logic Design", code: "ECE2002" },
      { name: "Microprocessors And Microcontrollers", code: "ECE3004" },
    ],
    "programme-elective": [
      { name: "Internet of Things", code: "CCA3011" },
      { name: "Healthcare Information Systems", code: "CHI2007" },
      { name: "Data Visualization", code: "CSA3004" },
      { name: "Cloud Computing", code: "CSA3005" },
      { name: "Knowledge Engineering", code: "CSA3017" },
      { name: "Data Mining And Data Warehousing", code: "CSA4003" },
      { name: "Information Retrieval and Web Search", code: "CSA4011" },
      { name: "Ethical Hacking", code: "CSD4002" },
      { name: "Cyber Security Framework", code: "CSD4008" },
      { name: "Virtualization Essentials", code: "CSD5002" },
      { name: "Forensic Science", code: "CSD5008" },
      { name: "Soft Computing", code: "CSE3008" },
      { name: "Computer Vision", code: "CSE3010" },
      { name: "Mobile Application Development", code: "CSE3012" },
      { name: "Agile Software Development", code: "CSE3013" },
      { name: "Medical Imaging", code: "CSE3014" },
      { name: "AWS Cloud Practitioner", code: "CSE3015" },
      { name: "AWS Solution Architect", code: "CSE3016" },
      { name: "Salesforce", code: "CSE3017" },
      { name: "Bigdata Analytics", code: "CSE4003" },
      { name: "Machine Learning", code: "CSE4005" },
      { name: "Software Defined Network", code: "CSE4012" },
      { name: "Software Project Management", code: "CSE4016" },
      { name: "Software Testing", code: "CSE4017" },
      { name: "Augmented Reality and Virtual Reality", code: "CSG2001" },
      { name: "Wireless Sensor Networks", code: "ECE4007" },
      { name: "Embedded Systems", code: "ECE4010" },
      { name: "Pattern Recognition and Image Analysis", code: "ECE6012" },
      { name: "Applied Cryptography", code: "MAT2009" },
      { name: "Mathematical Foundations for Cybersecurity", code: "MAT5004" },
    ],
    "university-core-natural-science-core": [
      { name: "ENGINEERING CHEMISTRY", code: "CHY1001" },
      { name: "Calculus and Laplace Transforms", code: "MAT1001" },
      { name: "Discrete Mathematics And Graph Theory", code: "MAT2002" },
      { name: "Applied Linear Algebra", code: "MAT3002" },
      { name: "Probability, Statistics And Reliability", code: "MAT3003" },
      { name: "ENGINEERING PHYSICS", code: "PHY1001" },
    ],
    "university-core-basic-engineering-sciences-core": [
      { name: "Fundamentals in AI & ML", code: "CSA2001" },
      { name: "Electric Circuits and Systems", code: "EEE1001" },
      { name: "Engineering Design and Modelling", code: "MEE2014" },
    ],
    "university-core-skill-development": [
      { name: "Introduction to Problem Solving and Programming", code: "CSE1021" },
      { name: "Programming in Java", code: "CSE2006" },
      { name: "Competitive Coding Practices", code: "PLA1004" },
      { name: "Lateral Thinking", code: "PLA1006" },
      { name: "Professional Communication Skills for Engineers", code: "SST1003" },
      { name: "Dynamics of workplace communication Skills", code: "SST2003" },
    ],
    "university-core-humanities-social-science-management-core": [
      { name: "Environmental Sustainability", code: "CHY1006" },
      { name: "Effective Technical Communication", code: "ENG1004" },
      { name: "Advanced Technical Communication", code: "ENG2005" },
    ],
    "university-core-project-internships": [
      { name: "Summer Industrial Internship", code: "DSN2092" },
      { name: "Semester Internship", code: "DSN2093" },
      { name: "Project Exhibition – I", code: "DSN2098" },
      { name: "Project Exhibition – II", code: "DSN2099" },
      { name: "Engineering Project in Community Service", code: "DSN3099" },
      { name: "Capstone Project - Phase 1", code: "DSN4091" },
      { name: "Capstone Project - Phase 2", code: "DSN4092" },
    ],
    "university-elective-natural-science-electives": [
      { name: "Modeling And Simulation Of Biological Systems", code: "CHY2007" },
      { name: "Differential And Difference Equations", code: "MAT2001" },
      { name: "Applied Numerical methods", code: "MAT2003" },
      { name: "Operations Research", code: "MAT2004" },
      { name: "Random Process", code: "MAT3004" },
      { name: "Computational Game Theory", code: "MAT3008" },
      { name: "Biophysics", code: "PHY2011" },
    ],
    "university-elective-multidisciplinary-electives": [
      { name: "Bio Inspired Design", code: "BIO1501" },
      { name: "Foundations of Data Science", code: "CDS3005" },
      { name: "Cyber Physical Systems", code: "CSD3010" },
      { name: "Human Computer Interaction", code: "CSG2003" },
      { name: "Body Area Networks", code: "EAC4012" },
      { name: "Sensors And Iot", code: "ECE4006" },
      { name: "Introduction to Computational Linguistics", code: "ENG3001" },
      { name: "UNMANNED AERIAL VEHICLES", code: "MEA3015" },
    ],
    "university-elective-humanities-social-sciences-and-management-electives": [
      { name: "Human Resource Management", code: "BMT1013" },
      { name: "International Business", code: "BMT2017" },
      { name: "Emotional Intelligence", code: "HUM1002" },
      { name: "Behavioural Science", code: "HUM2001" },
      { name: "PRINCIPLES OF MANAGEMENT AND ORGANIZATIONAL BEHAVIOUR", code: "MGT1002" },
      { name: "Technology Entrepreneurship", code: "MGT2003" },
    ],
    "non-graded-mandatory-courses": [
      { name: "Digital Literacy", code: "CSE0001" },
      { name: "OPEN SOURCE SOFTWARE (LINUX ADMINISTRATION)", code: "CSE0002" },
      { name: "EXTRA CURRICULAR ACTIVITIES", code: "EXC0001" },
      { name: "Swachh Bharat", code: "HUM0002" },
      { name: "INDIAN CONSTITUTION", code: "HUM0003" },
      { name: "INDIAN HERITAGE", code: "HUM0004" },
      { name: "Universal Human Values - I", code: "UHV0001" },
    ],
  };

  const subjects = subjectsData[category] || [];

  return (
    <div className="subjects-container">
      <h1 className="subjects-title">
        Subjects in {category.replace("-", " ")}
      </h1>
      <ul className="subjects-list">
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <li key={index} className="subject-item">
              <Link
                to={`/subjects/${category}/${subject.code}`}
                className="subject-name"
              >
                <div>{subject.name}</div>
                <div className="subject-code">{subject.code}</div> {/* Display subject code */}
              </Link>
            </li>
          ))
        ) : (
          <p>No subjects found.</p>
        )}
      </ul>
    </div>
  );
};

export default Subjects;
