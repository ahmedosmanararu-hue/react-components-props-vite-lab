// App Component - Root component that connects all child components
// Header, About, and ArticleList are children of App

import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';

// Sample blog data
const blogName = "My Awesome Blog";
const blogImage = "https://example.com/logo.png";
const blogAbout = "Welcome to my blog! Here I share my thoughts on technology, programming, and web development.";

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "January 1, 2024",
    preview: "React is a JavaScript library for building user interfaces. Learn the basics here..."
  },
  {
    id: 2,
    title: "Understanding Props in React",
    date: "January 15, 2024",
    preview: "Props are read-only data passed from parent to child components. Let's dive in..."
  },
  {
    id: 3,
    title: "Mastering Component Composition",
    date: "February 1, 2024",
    preview: "Learn how to build reusable and maintainable React components..."
  },
  {
    id: 4,
    title: "React Hooks Explained",
    date: "February 20, 2024",
    preview: "Hooks allow you to use state and other React features without writing classes..."
  }
];

function App() {
  return (
    <div>
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;