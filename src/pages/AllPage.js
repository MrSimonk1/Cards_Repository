import React from 'react';
import {useNavigate} from "react-router-dom";

const AllPage = ({posts, fnSelectEdit}) => {

    let navigate = useNavigate();

    function fnAll(num) {
        {navigate(`/edit-post/${num}`)}
        fnSelectEdit(num);
    }

    return (
        <div className="allPostsDiv">
            {posts.map(x => <div>
                <div style={{border: "1px solid gray",
                    marginBottom: "10px",
                    borderRadius: `${x.borderRadius}px`,
                    color: `${x.color}`,
                    height: `${x.height}px`,
                    width: `${x.width}px`}
                } key={x.id}>
                    <h2>{x.title}</h2>
                    <img src={x.image} alt=""/>
                    <p>{x.description}</p>
                </div>
                <button onClick={() => fnAll(x.id)}>Edit post</button>
            </div>)}
            
        </div>
    );
};

export default AllPage;