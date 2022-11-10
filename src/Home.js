import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    }

  return (
    <div className="home">
        {/* blogs prop inline with component */}
        <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        {/* blog filtering via props to return only mario's blogs */}
        <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title="Mario's Blogs" />
    </div>
  );
};

export default Home;
