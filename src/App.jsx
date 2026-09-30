import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Shell } from './pages/Shell';
import Home from './pages/Home';
import About  from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<ProjectPage/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
