import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function Blog() {
    const { id } = useParams()

    const { blogsArray, isLoading } = useSelector(state => state.blogs)
    if (isLoading) return <h1>Loading.....</h1>
    const filterblog = blogsArray.filter(item => item.id === id)
    console.log(filterblog[0])
    const blog = filterblog[0]


    return (
        <>
            {
                blog &&
                <div className='flex flex-col items-center gap-3 text-gray-400 py-4'>
                    <h1 className='text-3xl text-center font-bold'>{blog && blog.title}</h1>
                    <img
                        className='h-[300px] w-[400px]'
                        src={blog.cover} />
                    <h3 className='text-center'>By: {blog.author}</h3>
                    <p className='text-lg px-4 md:px-10 lg:px-16 xl:px-32'>{blog.content}</p>


                </div>
            }
        </>
    )
}

export default Blog