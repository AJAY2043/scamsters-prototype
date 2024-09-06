import React, { useEffect, useState } from 'react';
import './Blogs.css';
import blogsData from '../Data/blogsData.json';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/Data/blogsData.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs-section">
      <h2 className="blogs-title">Latest Scam Alerts</h2>
      <div className="blogs-container">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {/* Uncomment and adjust the path if you have images */}
              {/* <img src={require(`../Assets/${blog.image}`)} alt={blog.title} className="blog-image" /> */}
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-date">{blog.date}</p>
                <p>{blog.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
