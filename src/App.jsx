import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About  from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/project/:id' element={<ProjectPage/>} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
