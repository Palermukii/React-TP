import './App.css'
import { useState, useEffect } from 'react';
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'; 

function App() {
  const [post, setPost] = useState([]);

  useEffect(()=> {
    let posteos = JSON.parse(localStorage.getItem('post'));
    if (posteos) setPost(posteos);
  },[])


  return (
      <div>
        <div>
        <button><a href="/">Home</a></button>
          <button><a href="/newpost">New Post</a></button>
        </div>
        <h1>Bienvenido al blog.</h1>
          <div>
            {post.map((p,i) => <div key={i}>
            <h1>{p.tittle}</h1>
            <h3>{p.name}</h3>
            <Markdown remarkPlugins={[remarkGfm]}>{p.article}</Markdown>
          </div> )}
        </div>
      </div>
  )
}

export default App
