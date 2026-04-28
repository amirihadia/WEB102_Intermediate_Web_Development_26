import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import "./Form.css"

const EditPost = () => {

    const { id } = useParams()

    const [post, setPost] = useState({
        title: "",
        content: "",
        image_url: ""
    })

    useEffect(() => {
        const fetchPost = async () => {
        const { data } = await supabase
            .from('posts')
            .select('*')
            .eq('id', id)
            .single()

        setPost(data)
        }

        fetchPost()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost(prev => ({
        ...prev,
        [name]: value
        }))
    }

    const updatePost = async (e) => {
        e.preventDefault()

        await supabase
        .from('posts')
        .update(post)
        .eq('id', id)

        window.location = `/post/${id}`
    }

    return (
        <form onSubmit={updatePost}>
        <input name="title" value={post.title} onChange={handleChange} />
        <textarea name="content" value={post.content} onChange={handleChange} />
        <input name="image_url" value={post.image_url} onChange={handleChange} />

        <button type="submit">Update</button>
        </form>
    )
}

export default EditPost