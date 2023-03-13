import { useState, useEffect } from "react";
import Posts from "./posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleEdit = (post) => {
    // Update the post with the changes made
    const updatedPosts = posts.map((p) => (p.id === post.id ? post : p));
    setPosts(updatedPosts);
  };

  const handleDelete = (id) => {
    // Remove the post from the state
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.posts);
        setPosts(data.posts);
      });
  }, []);

  return (
    <div className="app">
      <h1>Posts</h1>
      <Posts post={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
