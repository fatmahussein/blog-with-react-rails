import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../constants';

const PostsLists = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(API_URL, { mode: 'cors' , });
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (err) {
        console.error('Error occurred:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsLists;
