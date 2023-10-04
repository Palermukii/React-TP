import './NewPost.css'
import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'; 
import Posts from './Post'

const NewPost = () => {
const [name, setName] = useState("");
const [tittle, setTittle] = useState("");
const [article, setArticle] = useState("");
const [post, setPost] = useState([]);

useEffect(()=> {
  let posteos = JSON.parse(localStorage.getItem('post'));
  if (posteos) setPost(posteos);
},[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPosts = [...post, { name, tittle, article }];
    setPost(newPosts);
    console.log(newPosts);
    localStorage.setItem('post', JSON.stringify(newPosts));
    setTittle('');
    setArticle('');
    setName('');
  };


  return (
      <div>
        <div>
        <button><a href="/">Home</a></button>
          <button><a href="/newpost">New Post</a></button>
        </div>
        <div>
        <h1>¡Crea tu propio Post!</h1>
      <form onSubmit={handleSubmit} className="Form">
        <input className='input' 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <input className='input'
          type="text"
          value={tittle}
          id="titulo"
          onChange={(e) => setTittle(e.target.value)}

          placeholder="Título"
        />
        <textarea value={article} id="Articulo" cols="40" rows="10" onChange={(e) => setArticle(e.target.value)}></textarea>
        <input type="submit" />
      </form>
      {post && <Posts post={post} />} 

      <div>
        {post.map((p,i) => <div key={i}>
          <h1>{p.tittle}</h1>
          <h3>{p.name}</h3>
      <Markdown remarkPlugins={[remarkGfm]}>{p.article}</Markdown>
        </div> )}
      </div>
    </div>
      </div>
  );
};

export default NewPost;
