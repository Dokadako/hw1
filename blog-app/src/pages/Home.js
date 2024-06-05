import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const Home = () => (
    <div>
        <h2 className="text-20xl mb-4 Italic">Welcome to My Blog</h2>
        <ul>
            {data.map(post => (
                <li key={post.slug}>
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Home;