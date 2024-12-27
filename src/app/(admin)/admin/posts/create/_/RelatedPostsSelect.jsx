"use client"
import { getPosts } from '@/services/postServices';
import { useEffect, useState } from 'react';
import Select from 'react-select';

export default function RelatedPostsSelect({ value, onChange }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const { posts: postsData } = await getPosts("limit=100");
                const trasnformPosts = postsData && postsData.map((post) => ({ value: post._id, label: post.title }));
                setPosts(trasnformPosts);
            } catch (error) {
                setPosts([]);
            }
        }

        fetchPosts();
    }, [])

    return (
        <div className="textField relative">
            <label htmlFor={"tags"} className="text-secondary-800 text-sm block pr-2">
                مقالات مرتبط
            </label>
            <Select
                value={value}
                onChange={onChange}
                isMulti
                options={posts || []}
            />
        </div>
    )
}
