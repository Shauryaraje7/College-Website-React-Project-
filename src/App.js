import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import SubjectDetail from "./pages/SubjectDetail";
import Videos from "./pages/Videos";
import Notes from "./pages/Notes"; // Import Notes component
import QuestionPapers from "./pages/QuestionPapers";
import Main  from "./pages/main";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      
        <Route path="/subjects/:category" element={<Subjects />} />
        <Route path="/subjects/:category/:subjectCode" element={<SubjectDetail />} />
        <Route path="/subjects/:subjectCode/videos" element={<Videos />} />
        <Route path="/subjects/:subjectCode/notes" element={<Notes />} />
        <Route path="/subjects/:subjectCode/question-papers" element={<QuestionPapers />} />
      </Routes>
    </Router>
  );
};

export default App;
