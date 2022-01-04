import './App.css';
import HomePage from "./pages/HomePage";
import Toolbar from "./components/toolbar";
import CreatePage from "./pages/CreatePage";
import AllPage from "./pages/AllPage";
import EditPage from "./pages/EditPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {

  const [getAllPosts, setAllPosts] = useState([]);
  const [getOnePost, setOnePost] = useState([]);

  function createPost(title, image, description, height, width, color, borderRadius) {

      const id = Math.round(Math.random()*999999) + "a";

      setAllPosts([...getAllPosts, {title: title.current.value,
          image: image.current.value,
          description: description.current.value,
          height: height.current.value,
          width: width.current.value,
          color: color.current.value,
          borderRadius: borderRadius.current.value,
          id: id}])
  }

  function selectPostToEdit(num) {
      console.log(num);
      for (let i = 0; i < getAllPosts.length; i++) {
          if (getAllPosts[i].id === num) {
              setOnePost({
                  title: getAllPosts[i].title,
                  image: getAllPosts[i].image,
                  description: getAllPosts[i].description,
                  height: getAllPosts[i].height,
                  width: getAllPosts[i].width,
                  color: getAllPosts[i].color,
                  borderRadius: getAllPosts[i].borderRadius,
                  id: getAllPosts[i].id
              })
          }

      }
  }

  function editPost(titleEdited, imageEdited, descriptionEdited, heightEdited, widthEdited, colorEdited, borderRadiusEdited, id) {

     let newArr = [...getAllPosts];

     newArr.map(x => {
          if (x.id === id) {
                  x.title = titleEdited.current.value;
                  x.image = imageEdited.current.value;
                  x.description = descriptionEdited.current.value;
                  x.height = heightEdited.current.value;
                  x.width = widthEdited.current.value;
                  x.color = colorEdited.current.value;
                  x.borderRadius = borderRadiusEdited.current.value;
                  x.id = id;
          }
      })

     setAllPosts(newArr);

  }


  return (
    <div className="App">

        <BrowserRouter>

            <Toolbar/>

            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/create-post" element={<CreatePage fnCreate={createPost}/>}/>
                <Route path="/all-posts" element={<AllPage posts={getAllPosts} fnSelectEdit={selectPostToEdit}/>}/>
                <Route path="/edit-post/:id" element={<EditPage onePost={getOnePost} fnEdit={editPost}/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
