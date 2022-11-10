import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // initially the value of the state is null until the data is finished fetching on render
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

    // fetching data from our json server w/ useEffect
    useEffect(() => {
        // using setTimeout to simulate longer request to see loading div below
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

  return (
    <div className="home">
        {/* logical 'and' (&&) evaluates the LH side 1st, and if false, the RH side is never read. below we are conditionally outputting a template */}
        { error && <div>{ error}</div>}
        { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
