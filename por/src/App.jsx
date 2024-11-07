import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { HomeLayout } from './Layout/HomeLayout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { ResumeLayout } from './Layout/ResumeLayout';
import { Contact } from './components/Contact';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import Header from './components/Header';  // Import Header

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="resume" element={<ResumeLayout />}>
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  ));

  return (
    <div>
      <Header /> 
      <div className='con'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
