import React, { useState, useEffect } from 'react';
import Header from './includes/Header';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://backend-9mwl.onrender.com/all-blogs');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setBlogs(data.blogs);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <h1>All Blogs</h1>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <img src={blog.image} alt={blog.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blogs;
