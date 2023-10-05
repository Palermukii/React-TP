import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'; 

const Post = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();
    useEffect(()=> {
        let posteos = JSON.parse(localStorage.getItem('post'));
        if (posteos) setPost(posteos.filter(p => p.id == id)[0]); 
    },[])
    
    
    
    return (
        <div>
           <h1><u>Titulo: {post.tittle}</u></h1>
           <Markdown remarkPlugins={[remarkGfm]}>{post.article}</Markdown>
           <h4>Autor: {post.name}</h4>
        </div>
    );
}

export default Post;