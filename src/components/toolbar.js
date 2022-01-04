import React from 'react';
import {useNavigate} from "react-router-dom";

const Toolbar = () => {

    let navigate = useNavigate();

    return (
        <div className="toolbarDiv">
            <h3 onClick={() => {navigate("/create-post")}}>Create Post</h3>
            <h3 onClick={() => {navigate("/all-posts")}}>All Posts</h3>
            
        </div>
    );
};

export default Toolbar;