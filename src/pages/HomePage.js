import React from 'react';
import {useNavigate} from "react-router-dom";

const HomePage = () => {

    let navigate = useNavigate();

    return (
        <div className="homePageDiv">
            <button onClick={() => {navigate("/create-post")}}>Create Post</button>
            <button onClick={() => {navigate("/all-posts")}}>See All Posts</button>
        </div>
    );
};

export default HomePage;