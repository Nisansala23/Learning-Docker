// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import SinglePostPage from './Pages/SinglePostPage'; // Import the new component

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SinglePostPage />} />  {/* Add this new dynamic route */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;