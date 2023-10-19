import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';

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
        <div className="NewPost">
          <div className='Header'>
        <button className='botonHeader'><Link className='Anchor' to="/">Home</Link></button>
        <button className='botonHeader'><Link className='Anchor' to="/newpost">New Post</Link></button>
        <button className='botonHeader'><Link className='Anchor' target="_blank" to="https://youtu.be/SIaFtAKnqBU?si=WKWWpEAL6vLIyWXM&t=2">About us</Link></button>
      </div>
           <div>
                <h1><u>Titulo: {post.tittle}</u></h1>
                <div className="postArticle">
                <Markdown className="Markdown" remarkPlugins={[remarkGfm]}>{post.article}</Markdown>
                </div>
                <h4>Autor: {post.name}</h4>
           </div>
           <br />
           <div>
                <form onSubmit={handleSubmit} className="Form">
                    <input type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <textarea value={coment} cols="40" rows="4" onChange={(e) => setComent(e.target.value)}></textarea>
                    <button className="publicar" type='submit'>Publicar comentario</button>
                </form>
            </div>
            <br />
            <h1>Comentarios</h1>
            {comments.map((c,i)=>
            <div key={i}>
                <h3>Usuario: {c.name}</h3>
<Markdown remarkPlugins={[remarkGfm]}>{c.coment}</Markdown>
<hr />
</div>
            )}
        </div>
    );
}

export default Post;
