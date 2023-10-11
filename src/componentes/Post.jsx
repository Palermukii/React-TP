import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';


const Post = () => {
    const [name, setName] = useState("");
    const [coment, setComent] = useState("");
    const [comments,setComments] = useState([]);
    const [post, setPost] = useState({});
    const {id} = useParams();
    
    useEffect(()=> {
        let posteos = JSON.parse(localStorage.getItem('post'));
        if (posteos) setPost(posteos.filter(p => p.id == id)[0]);
        let comentarios = JSON.parse(localStorage.getItem(`comment-${id}`));
        if (comentarios) setComments(comentarios);
    },[]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = [{ name,coment,postID: post.id ,id: comments.length}, ...comments];
        setComments(newComment);
        localStorage.setItem(`comment-${post.id}`, JSON.stringify(newComment));
        setComent('');
        setName('');
      };
    
    return (
        <div className='NewPost'>
            <div className='Header'>
                    <button className='botonHeader'><a href="/">Home</a></button>
                    <button className='botonHeader'><a href="/newpost">New Post</a></button>
                </div>
           <div>
                <h1><u>Titulo: {post.tittle}</u></h1>
                <Markdown remarkPlugins={[remarkGfm]}>{post.article}</Markdown>
                <h4>Autor: {post.name}</h4>
           </div>
           <div>
                <form onSubmit={handleSubmit} className="Form">
                    <input type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <textarea value={coment} cols="40" rows="4" onChange={(e) => setComent(e.target.value)}></textarea>
                    <button className="publicar" type='submit'>Publicar comentario</button>
                </form>
            </div>
            {comments.map((c,i)=>
            <div key={i}>
                <h3>Usuario: {c.name}</h3>
                <Markdown remarkPlugins={[remarkGfm]}>{c.coment}</Markdown>
            </div>
            )}
        </div>
    );
}

export default Post;
