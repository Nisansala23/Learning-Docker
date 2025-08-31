// src/pages/SinglePostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Define a type for a single blog post
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  slug: string;
}

// Mock data for blog posts. This should match the data you have in BlogPage.tsx
const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Python: A Beginner’s Guide',
    author: 'Jane Doe',
    date: 'August 1, 2025',
    content: `
      <p>Python is an excellent language for beginners. Its simple syntax and readability make it easy to learn and fun to use. In this guide, we'll walk you through setting up your environment, writing your first "Hello, World!" program, and understanding basic data types.</p>
      <p>Here’s a simple code snippet:</p>
      <pre><code>print("Hello, World!")</code></pre>
      <p>From here, you can explore variables, loops, and functions. Happy coding!</p>
    `,
    slug: 'getting-started-with-python',
  },
  {
    id: 2,
    title: 'The Future of AI: What’s Next in Machine Learning?',
    author: 'John Smith',
    date: 'August 15, 2025',
    content: `
      <p>The field of artificial intelligence is evolving at an unprecedented pace. The next frontier in machine learning involves more sophisticated models, ethical considerations, and real-world applications in fields like healthcare and finance.</p>
      <p>Generative AI, in particular, is a game-changer. We're seeing everything from AI-powered art to automated content creation. As a developer, staying on top of these trends is crucial.</p>
    `,
    slug: 'the-future-of-ai',
  },
  // Add more post objects here
];

const SinglePostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the post that matches the URL slug
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">By {post.author} on {post.date}</p>
        <div 
          className="prose max-w-none text-gray-700 leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </div>
  );
};

export default SinglePostPage;