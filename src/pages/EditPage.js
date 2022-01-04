import React from 'react';
import {createRef} from "react";
import {useNavigate, useParams} from "react-router-dom";

const EditPage = ({onePost, fnEdit}) => {

    let navigate = useNavigate();
    let {id} = useParams();

    function all() {
        if (titleEdited.current.value.length >= 10
            && titleEdited.current.value.length <= 100
            && imageEdited.current.value.includes("http")
            && descriptionEdited.current.value.length >= 20
            && descriptionEdited.current.value.length <= 200
            && heightEdited.current.value.length >= 1 && heightEdited.current.value.length <= 3
            && widthEdited.current.value.length >= 1 && widthEdited.current.value.length <= 3
            && borderRadiusEdited.current.value.length >= 1 && borderRadiusEdited.current.value.length <= 2) {

            {navigate(`/all-posts`)}
            fnEdit(titleEdited,
                imageEdited,
                descriptionEdited,
                heightEdited,
                widthEdited,
                colorEdited,
                borderRadiusEdited, id);

        } else {
            if (titleEdited.current.value.length <= 10 || titleEdited.current.value.length >= 100) {
                titleEdited.current.value = "";
            }
            if (!imageEdited.current.value.includes("http")) {
                imageEdited.current.value = "";
            }
            if (descriptionEdited.current.value.length <= 20 || descriptionEdited.current.value.length >= 200 ) {
                descriptionEdited.current.value = "";
            }
            if (heightEdited.current.value.length <= 1 || heightEdited.current.value.length >= 3) {
                heightEdited.current.value = "";
            }
            if (widthEdited.current.value.length <= 1 || widthEdited.current.value.length >= 3) {
                widthEdited.current.value = "";
            }
            if (borderRadiusEdited.current.value.length <= 1 || borderRadiusEdited.current.value.length >= 2) {
                borderRadiusEdited.current.value = "";
            }
            alert("Please fix empty inputs according to requirements");
        }

    }



    const titleEdited = createRef();
    const imageEdited = createRef();
    const descriptionEdited = createRef();
    const heightEdited = createRef();
    const widthEdited = createRef();
    const colorEdited = createRef();
    const borderRadiusEdited = createRef();

    return (
        <div className="createDiv">
            <div className="titleImgDescription">
                <div>Title:
                    <textarea ref={titleEdited} defaultValue={onePost.title} placeholder="Min length 10 symbols, max 100.">

                    </textarea>
                </div>
                <div>Image:
                    <textarea ref={imageEdited} defaultValue={onePost.image} placeholder="Image link should be http link.">

                    </textarea>
                </div>
                <div>Description:
                    <textarea ref={descriptionEdited} defaultValue={onePost.description} placeholder="Should be at least 20 symbols, max 200">

                    </textarea>
                </div>
            </div>
            <div className="styleDiv">
                <h3>Style:</h3>
                <div>Height: <input ref={heightEdited} type="number" defaultValue={onePost.height} placeholder="1-999 px"/></div>
                <div>Width: <input ref={widthEdited} type="number" defaultValue={onePost.width} placeholder="1-999 px"/></div>
                <div>Text color:
                    <select ref={colorEdited} defaultValue={onePost.color}>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="purple">Purple</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div>Border radius: <input ref={borderRadiusEdited} type="number" defaultValue={onePost.borderRadius} placeholder="1-99 px"/></div>
            </div>
            <div className="createPostBtn">
                <button onClick={() => all()}>Edit</button>
            </div>
        </div>
    );
};

export default EditPage;