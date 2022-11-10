import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    }

    // useful for running code that needs to be run for every render
    // runs twice here due to React.StrictMode running on App component
    // pass dependencies (as a state) to useEffect (as an array) when you only want it to run in certain situations. if you only want it to run on the first render, pass an empty array
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

  return (
    <div className="home">
        {/* blogs prop inline with component */}
        <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        <button onClick={() => setName('luigi')}>Change Name</button>
        <p>{ name }</p>
    </div>
  );
};

export default Home;
