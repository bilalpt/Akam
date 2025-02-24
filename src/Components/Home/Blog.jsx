import React, { useState, useEffect } from "react";
// import fileToBase64 from "file-to-base64";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [image, setImage] = useState("");

  // Load saved posts from LocalStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // Handle image upload & convert to Base64
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await fileToBase64(file);
      setImage(base64Image);
    }
  };

  // Add new post
  const addPost = () => {
    if (!title || !content) return alert("Please enter title and content!");

    const newPost = { id: Date.now(), title, content, date, image };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    setTitle("");
    setContent("");
    setImage("");
  };

  // Delete post
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // Edit post
  const editPost = (id) => {
    const postToEdit = posts.find((post) => post.id === id);
    setTitle(postToEdit.title);
    setContent(postToEdit.content);
    setDate(postToEdit.date);
    setImage(postToEdit.image);

    // Remove old post
    deletePost(id);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Daily Blog</h1>

      {/* Blog Input Form */}
      <div className="border p-4 my-4 rounded bg-gray-100">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 w-full mb-2"
        />
        {image && <img src={image} alt="Preview" className="w-full h-40 object-cover my-2 rounded" />}
        <button
          onClick={addPost}
          className="bg-blue-500 text-white px-4 py-2 w-full"
        >
          {title ? "Update Blog" : "Add Blog"}
        </button>
      </div>

      {/* Display Blogs */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="border p-4 my-4 rounded">
            {post.image && <img src={post.image} alt={post.title} className="w-full h-40 object-cover my-2 rounded" />}
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
            <p>{post.content}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => editPost(post.id)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No blogs added yet.</p>
      )}
    </div>
  );
};

export default Blog;
