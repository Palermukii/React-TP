import './NewPost.css'
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'; 
import Posts from './Post'

const NewPost = () => {
const [name, setName] = useState("");
const [tittle, setTittle] = useState("");
const [article, setArticle] = useState("");
const [post, setPost] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost= {name, tittle, article}
    setPost(newPost);
    console.log(post);
  };

  return (
      <div>
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
      <Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>
      {post && <Posts post={post} />} 

    </div>
  );
};

export default NewPost;
