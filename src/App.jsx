import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Topbar from './components/layout/Topbar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Lazy-load pages that aren't required for the initial homepage render.
const About = lazy(() => import('./pages/About'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const Apply = lazy(() => import('./pages/Apply'));
const Contact = lazy(() => import('./pages/Contact'));
const CourseDetail = lazy(() => import('./pages/CourseDetails'));
const Facilities = lazy(() => import('./pages/Facilities'));
const ELearning = lazy(() => import('./pages/ELearning'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Admin = lazy(() => import('./pages/Admin'));

function PageLoader() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      aria-label="Loading page"
    >
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
        role="status"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col relative">
        <Topbar />
        <Navbar />

        <main className="grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/course/:slug" element={<CourseDetail />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/e-learning" element={<ELearning />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;