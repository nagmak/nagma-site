import React from 'react';
import BlogPost from './post';

const Blog = (props) => {
    console.log(props);
    return (
        <div>
            <BlogPost {...props}></BlogPost>
        </div>
    );
}

export default Blog;
