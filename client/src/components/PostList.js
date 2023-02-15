import React from 'react';

export default function PostList({ posts }) {
    if(!posts.length) {
        return <h3>No Thoughts Yet</h3>
    }

    return (
        <div>
            {posts && posts.map((post) => (
                <div className="card" style={{width: '300px'}} key={post._id}>
                    <div className="card-divider">
                        {post.user.username}
                    </div>
                    <div className="card-section">
                        <h4>{post.photo}</h4>
                        <p>{post.caption}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}