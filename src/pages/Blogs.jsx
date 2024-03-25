import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { readBlogs, deletBlog } from "../redux/slice/blogsSlice"
import { Link } from "react-router-dom"

function Blogs() {

    const dispatch = useDispatch()
    const { blogsArray, isLoading } = useSelector(state => state.blogs)

    useEffect(() => {
        dispatch(readBlogs())
    }, [])

    // if (isLoading) return <h1>Loading...</h1>
    // console.log(blogsArray)
    return (
        <>
            <div className="min-h-96 w-5/6 mt-5  ">
                {blogsArray &&
                    <div className="">
                        {blogsArray.map(blog => (
                            <div
                                className=" flex justify-between py-2 items-center border-b-[0.1px] border-gray-700"
                                key={blog.title}>
                                <div className="w-2/3 flex flex-col gap-2">
                                    <h1 className="text-xl  lg:text-2xl xl:text-3xl font-semibold">{blog.title}</h1>
                                    <h3 className="text-sm font-medium">By: {blog.author}</h3>
                                    <div>
                                        <button
                                            className="text-red-500"
                                            onClick={() => dispatch(deletBlog(blog.id))}>Delete</button>{" |"}
                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className=" ml-2"
                                        >Edit</Link>
                                    </div>
                                </div>
                                <div className="w/1/3">
                                    <img
                                        className="h-24 w-2h-24 rounded"
                                        src={blog.cover} />
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