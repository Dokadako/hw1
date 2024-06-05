// src/pages/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import data from '../data.json';

export const Comments = () => (
    <div>
        <h3>Comments</h3>
        <p>This is a comment.</p>
    </div>
);
const BlogPost = () => {
    const { slug } = useParams();
    const post = data.find((p) => p.slug === slug);

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div>
            <Helmet>
                <title>{post.title}</title>
                <meta name="description" content={post.content.substring(0, 150)} />
            </Helmet>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/comments`}>View Comments</Link>
        </div>
    );
};

export default BlogPost;