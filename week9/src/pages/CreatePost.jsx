import { useState } from 'react'
import './Form.css'
import { supabase } from '../client'

const CreatePost = () => {

    const [post, setPost] = useState({
        title: "",
        content: "",
        image_url: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost(prev => ({
        ...prev,
        [name]: value
        }))
    }

    const createPost = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase
            .from('posts')
            .insert([{ ...post, upvotes: 0 }])

        console.log("DATA:", data)
        console.log("ERROR:", error)

        window.location = "/"
    }

    return (
        <form onSubmit={createPost}>
        <input name="title" placeholder="Title (required)" onChange={handleChange} required />
        <textarea name="content" placeholder="Write something..." onChange={handleChange} />
        <input name="image_url" placeholder="Image URL" onChange={handleChange} />

        <button type="submit">Post</button>
        </form>
    )
}

export default CreatePost