// App.js
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import logo from '../assets/logo';

function App() {
  const blogName = "My Blog";
  const blogAbout = "Welcome to my blog!";
  const blogImage = logo;
  const posts = [
    { id: 1, title: "Post 1", date: "October 1, 2024", preview: "This is the first post." },
    { id: 2, title: "Post 2", preview: "This is the second post." }
  ];

  return (
    <div className='App'>
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
