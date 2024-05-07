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
    try {
        // Fetch data from your API endpoint
        const res = await fetch('https://backend-9mwl.onrender.com/all-blogs');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();

        // Pass data to the component props
        return {
            props: {
                blogs: data.blogs,
            },
            revalidate: 60, // Re-generate the page every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: {
                blogs: [], // Return an empty array if fetching fails
            },
        };
    }
}
