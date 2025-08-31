// src/pages/AboutPage.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About My Awesome Blog</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        We are a team of passionate IT professionals dedicated to sharing knowledge and making complex topics accessible to everyone. Our mission is to provide high-quality, insightful content on the ever-evolving world of technology.
      </p>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At My Awesome Blog, we believe that technology should not be a barrier. Whether you're a student starting your career, a seasoned professional looking to stay current, or a curious individual, our goal is to be your trusted resource. We cover a wide range of topics, from foundational concepts in **programming** and **networking** to the latest advancements in **AI**, **machine learning**, and **software engineering**.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Cover</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
          <li>**Programming Languages:** Tutorials and deep dives into Python, JavaScript, and more.</li>
          <li>**Artificial Intelligence:** Demystifying AI, machine learning, and data science.</li>
          <li>**Networking:** Guides on fundamental concepts and advanced network architectures.</li>
          <li>**Software Engineering:** Best practices, career advice, and development methodologies.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Team</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is where you can introduce yourself or your team members. You can add a brief bio for each person, highlighting their expertise and passion.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Example profile. You can duplicate this for other team members. */}
          <div className="flex-shrink-0">
            {/* Replace with your image */}
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team member profile" 
              className="w-32 h-32 rounded-full object-cover" 
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Your Name</h3>
            <p className="text-gray-500 text-sm">Founder & Lead Writer</p>
            <p className="mt-2 text-gray-600">
              A brief bio about your background, why you started the blog, and your passion for technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;