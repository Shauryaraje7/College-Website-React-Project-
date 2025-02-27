import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CollegeSearch.css"; // Import the CSS file

const colleges = [
  { name: "VIT Bhopal University", path: "/Home" },
  { name: "IIT Bombay", path: "/iit-bombay" },
  { name: "IIT Delhi", path: "/iit-delhi" },
  { name: "IIT Madras", path: "/iit-madras" },
  { name: "IIT Kanpur", path: "/iit-kanpur" },
  { name: "IIT Kharagpur", path: "/iit-kharagpur" },
  { name: "NIT Trichy", path: "/nit-trichy" },
  { name: "NIT Warangal", path: "/nit-warangal" },
  { name: "NIT Surathkal", path: "/nit-surathkal" },
  { name: "BITS Pilani", path: "/bits-pilani" }
];

export default function CollegeSearch() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="college-search-container">
      <h1 className="welcome-text">Welcome to <span>AcademiaHub</span></h1>
      <p className="slogan">Your Gateway to Academic Excellence</p>

      <input
        type="text"
        placeholder="Search Colleges..."
        className="college-search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {search && filteredColleges.length > 0 && (
        <ul className={`college-list ${filteredColleges.length > 0 ? "visible" : ""}`}>
          {filteredColleges.map((college, index) => (
            <li key={index} className="college-item">
              <Link to={college.path}>{college.name}</Link>
            </li>
          ))}
        </ul>
      )}
      
      {search && filteredColleges.length === 0 && (
        <p className="college-list visible college-item text-gray-500">No colleges found</p>
      )}
    </div>
  );
}
