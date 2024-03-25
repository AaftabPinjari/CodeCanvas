import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { updateBlog } from "../redux/slice/blogsSlice"

function EditBlog() {
    const { id } = useParams()
    const navigate = useNavigate()
    //to prevent uncontrolled input initialize the state with empty values
    const [toUpdateBlog, setToUpdateBlog] = useState(
        {
            title: '', content: "", author: ""
        }
    )
    const dispatch = useDispatch()
    const { blogsArray } = useSelector(state => state.blogs)

    useEffect(() => {
        if (id) {
            const blog = blogsArray.filter(item => item.id === id)
            setToUpdateBlog(blog[0])

        }
    }, [])
    // console.log(toUpdateBlog)

    const editData = (e) => {
        setToUpdateBlog({ ...toUpdateBlog, [e.target.name]: e.target.value })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(updateBlog(toUpdateBlog))
        navigate('/blogs')
    }

    return (
        <div className="min-h-96 flex flex-col justify-center items-center">
            <h1>Edit a Blog Post</h1>

            <form
                className="flex flex-col"
                onSubmit={handleEdit}>
                <label>Enter the title</label>
                <input
                    name="title"
                    value={toUpdateBlog && toUpdateBlog.title}
                    onChange={editData}
                    className="text-black border-[1px] border-gray-700" />
                <label>Enter Content Here</label>
                <input
                    name="content"
                    value={toUpdateBlog && toUpdateBlog.content}
                    onChange={editData}
                    className=" text-black border-[1px] border-gray-700" />
                <label>Written By</label>
                <textarea
                    name="author"
                    value={toUpdateBlog && toUpdateBlog.author}
                    onChange={editData}
                    className="text-black border-[1px] border-gray-700" />

                <button
                    className="mt-3 bg-white text-black rounded font-semibold"
                    onClick={handleEdit}>Edit Blog</button>

            </form>

        </div>
    )
}

export default EditBlog