import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "../client"
import '../pages/PostPage.css'

const PostPage = () => {

    const { id } = useParams()

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [])

    const fetchPost = async () => {
        const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

        setPost(data)
    }

    const fetchComments = async () => {
        const { data } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)

        setComments(data)
    }

    const upvote = async () => {
        await supabase
        .from('posts')
        .update({ upvotes: post.upvotes + 1 })
        .eq('id', id)

        fetchPost()
    }

    const addComment = async (e) => {
        e.preventDefault()

        await supabase
        .from('comments')
        .insert([{ post_id: id, comment_text: newComment }])

        setNewComment("")
        fetchComments()
    }

    const deletePost = async () => {
        await supabase
        .from('posts')
        .delete()
        .eq('id', id)

        window.location = "/"
    }

    if (!post) return <p>Loading...</p>

    return (
        <div className="postContainer">
        <h1>{post.title}</h1>
        <p>{post.content}</p>

        {post.image_url && <img src={post.image_url} width="300" />}

        <p>👍 {post.upvotes}</p>
        <button onClick={upvote}>Upvote</button>

        <Link to={`/edit/${post.id}`}>
            <button>Edit</button>
        </Link>

        <button onClick={deletePost}>Delete</button>

        <h3>Comments</h3>

        <form onSubmit={addComment}>
            <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>

        {comments.map(c => (
            <p key={c.id}>{c.comment_text}</p>
        ))}

        </div>
    )
}

export default PostPage