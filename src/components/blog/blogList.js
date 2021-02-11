import React from 'react';
import BlogListItem from './blogListItem';
import blogPost from '../../mock-data/blog.json';
import './blogList.css';

const BlogList = () => {
    let date = new Date().toLocaleString();
    return (
        <div>
            {date}
            {blogPost && blogPost.data && blogPost.data.length > 0 ? (
                blogPost.data.map(post => {
                    return (
                        <ul className="blog-post-item" key={post.id}>
                            <BlogListItem {...post}/>
                        </ul>
                    );
                })): null}
        </div>
    );
}

export default BlogList;
