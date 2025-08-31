// src/pages/BlogPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Define a type for a blog post
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string; // A URL-friendly string for the post
}

// Mock data for blog posts. In a real application, you would fetch this from an API.
const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Python: A Beginner’s Guide',
    excerpt: 'An introduction to Python for new programmers, covering the basics of syntax, data types, and first steps in coding.',
    slug: 'getting-started-with-python',
  },
  {
    id: 2,
    title: 'The Future of AI: What’s Next in Machine Learning?',
    excerpt: 'A look at the latest trends and predictions in artificial intelligence and machine learning, from large language models to generative AI.',
    slug: 'the-future-of-ai',
  },
  {
    id: 3,
    title: 'Networking Fundamentals: Understanding the OSI Model',
    excerpt: 'Demystifying the complex world of computer networking with a simple, layer-by-layer breakdown of the OSI model.',
    slug: 'networking-fundamentals-osi-model',
  },
  {
    id: 4,
    title: 'Software Engineering Best Practices: Clean Code and Beyond',
    excerpt: 'Explore essential practices that every software engineer should follow to write maintainable, scalable, and efficient code.',
    slug: 'software-engineering-best-practices',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Blog Posts</h1>
      <p className="text-center text-gray-600 mb-10">
        Stay updated with our latest articles on IT, programming, AI, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;