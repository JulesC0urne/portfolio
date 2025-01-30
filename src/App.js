import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Profile from './components/Profile/Profile';
import RightSideBar from './components/RightSideBar/RightSideBar';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Curriculum from './components/Curriculum/Curriculum';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full">
        <LeftSideBar />
        <main className="flex-1 ml-64 mr-64">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/cv" element={<Curriculum />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <RightSideBar />
      </div>
    </Router>
  );
}

export default App;
