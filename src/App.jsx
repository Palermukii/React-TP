import './App.css'
import { useState, useEffect } from 'react';
// import Markdown from "react-markdown";
// import remarkGfm from 'remark-gfm'; 

function App() {
  const [post, setPost] = useState([]);

  useEffect(()=> {
    let posteos = JSON.parse(localStorage.getItem('post'));
    if (posteos) {
      setPost(posteos);
    }
  },[])


  return (
      <div className='Home'>
        <div className='Header'>
        <button><a href="/">Home</a></button>
          <button><a href="/newpost">New Post</a></button>
        </div>
        <h1>Bienvenido al blog.</h1>
          <div className='Posts'>
            {post.map((p,i) => 
            <div className='Post' key={i} ><a href='/post'>
              <h2><u>Titulo: {p.tittle}</u></h2>
              <h3>Hecho por: {p.name}</h3>
              </a>
            </div> )}
        </div>
      </div>
  )
}

export default App
