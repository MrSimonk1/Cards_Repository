import React, {createRef} from 'react';
import {useNavigate} from "react-router-dom";


const CreatePage = ({fnCreate}) => {

    let navigate = useNavigate();

    const title = createRef();
    const image = createRef();
    const description = createRef();
    const height = createRef();
    const width = createRef();
    const color = createRef();
    const borderRadius = createRef();

    function createPost() {
        if (title.current.value.length >= 10
            && title.current.value.length <= 100
            && image.current.value.includes("http")
            && description.current.value.length >= 20
            && description.current.value.length <= 200
            && height.current.value.length >= 1 && height.current.value.length <= 3
            && width.current.value.length >= 1 && width.current.value.length <= 3
            && borderRadius.current.value.length >= 1 && borderRadius.current.value.length <= 2) {
            {navigate(`/all-posts`)}
            fnCreate(title, image, description, height, width, color, borderRadius)
        } else {
            if (title.current.value.length <= 10 || title.current.value.length >= 100) {
                title.current.value = "";
            }
            if (!image.current.value.includes("http")) {
                image.current.value = "";
            }
            if (description.current.value.length <= 20 || description.current.value.length >= 200 ) {
                description.current.value = "";
            }
            if (height.current.value.length <= 1 || height.current.value.length >= 3) {
                height.current.value = "";
            }
            if (width.current.value.length <= 1 || width.current.value.length >= 3) {
                width.current.value = "";
            }
            if (borderRadius.current.value.length <= 1 || borderRadius.current.value.length >= 2) {
                borderRadius.current.value = "";
            }
            alert("Please fix empty inputs according to requirements");
        }
    }

    return (
        <div className="createDiv">
            <div className="titleImgDescription">
                <div>Title:
                    <textarea ref={title} placeholder="Min length 10 symbols, max 100.">
                    </textarea>
                </div>
                <div>Image:
                    <textarea ref={image} placeholder="Image link should be http link.">
                    </textarea>
                </div>
                <div>Description:
                    <textarea ref={description} placeholder="Should be at least 20 symbols, max 200">
                    </textarea>
                </div>
            </div>

            <div className="styleDiv">
                <h3>Style:</h3>
                <div>Height (px):<input ref={height} type="number" placeholder="1-999 px"/></div>
                <div>Width (px): <input ref={width} type="number" placeholder="1-999 px"/></div>
                <div>Text color:
                    <select ref={color}>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="purple">Purple</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div>Border radius (px): <input ref={borderRadius} type="number" placeholder="1-99 px"/></div>
            </div>
            <div className="createPostBtn">
                <button onClick={createPost}>Create Post</button>
            </div>

        </div>
    );
};

export default CreatePage;