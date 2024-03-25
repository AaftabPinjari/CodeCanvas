import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readBlogs, deletBlog } from "../redux/slice/blogsSlice"
import { Link } from "react-router-dom"

function Blogs() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readBlogs())
    }, [])

    const { blogsArray, isLoading } = useSelector(state => state.blogs)
    if (isLoading) return <h1>Loading...</h1>
    // console.log(blogsArray)
    return (
        <>
            <div className="min-h-96 flex flex-col  ">
                {blogsArray &&
                    <div className="flex flex-col gap-3">
                        {blogsArray.map(blog => (
                            <div
                                className=" flex flex-col items-center border-2 border-white"
                                key={blog.title}>
                                <h1>{blog.title}</h1>
                                <p>{blog.content}</p>
                                <div>
                                    <button
                                        className="bg-white text-black rounded font-semibold"
                                        onClick={() => dispatch(deletBlog(blog.id))}>Delete</button>
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="ml-4 bg-white text-black rounded font-semibold"
                                    >Edit</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                }

            </div>
        </>
    )
}

export default Blogs