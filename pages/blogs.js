import React from 'react';
import Header from './includes/Header';
const Blogs = ({ blogs }) => {
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

export async function getStaticProps() {
    // Fetch data from your API endpoint
    const res = await fetch('https://backend-9mwl.onrender.com/all-blogs');
    const data = await res.json();

    // Pass data to the component props
    return {
        props: {
            blogs: data.blogs,
        },
    };
}
