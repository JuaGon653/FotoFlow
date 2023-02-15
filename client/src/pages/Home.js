import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FIND_POSTS } from '../utils/queries';

import PostList from '../components/PostList';

export default function Home() {
    const { loading, data: allPosts } = useQuery(FIND_POSTS);
    const posts = allPosts?.posts || [];
    console.log(posts);

    return (
        <div className="grid-x">
            <div className="cell small-4"></div>
            <div className="cell small-4 text-center">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <PostList posts={posts} />
                )}
            </div>
            <div className="cell small-4"></div>
        </div>
    );
};