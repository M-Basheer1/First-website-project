import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import ProfilePhotoModal from './components/ProfilePhotoModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isProfilePhotoOpen, setIsProfilePhotoOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-emerald-500 selection:text-neutral-950">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenProfilePhoto={() => setIsProfilePhotoOpen(true)}
      />

      {/* Main Content Sections (Strictly in Required Order) */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProjects={() => handleScrollToSection('projects')}
          onContactClick={() => handleScrollToSection('contact')}
          onOpenProfilePhoto={() => setIsProfilePhotoOpen(true)}
        />

        {/* 2. Featured Projects Section */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. About Me & Skills Section */}
        <AboutSection
          onOpenProfilePhoto={() => setIsProfilePhotoOpen(true)}
        />

        {/* 4. Experience / Timeline Section */}
        <TimelineSection />

        {/* 5. Contact Section */}
        <ContactSection
          onOpenProfilePhoto={() => setIsProfilePhotoOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenProfilePhoto={() => setIsProfilePhotoOpen(true)}
      />

      {/* Modals for Deep Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenProfilePhoto={() => setIsProfilePhotoOpen(true)}
      />

      <ProfilePhotoModal
        isOpen={isProfilePhotoOpen}
        onClose={() => setIsProfilePhotoOpen(false)}
      />
    </div>
  );
}

