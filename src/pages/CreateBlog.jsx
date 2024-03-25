import { useState } from "react"
import { useDispatch } from "react-redux"
import { createBlogs } from "../redux/slice/blogsSlice"
import { useNavigate } from "react-router"

function CreateBlog() {

    const [blog, setBlog] = useState({})

    const getBlogData = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })

    }

    console.log(blog)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createBlogs(blog))
        setBlog({})
        navigate('/blogs')

    }

    return (
        <>
            <div className="min-h-96 flex flex-col justify-center items-center">
                <h1>Create a Blog Post</h1>
                <form
                    className="flex flex-col"
                    onSubmit={handleSubmit}>
                    <label>Enter the title</label>
                    <input
                        name="title"
                        onChange={getBlogData}
                        className="text-black border-[1px] border-gray-700" />
                    <label>Enter Content Here</label>
                    <textarea
                        onChange={getBlogData}
                        name="content"
                        className="w-80 h-48 text-black border-[1px] border-gray-700" />
                    <label>Written By</label>
                    <input
                        onChange={getBlogData}
                        name="author" className="text-black border-[1px] border-gray-700" />
                    <button
                        className="mt-3 bg-white text-black rounded font-semibold"
                        onClick={handleSubmit}>Add Blog</button>

                </form>
            </div>
        </>
    )
}

export default CreateBlog