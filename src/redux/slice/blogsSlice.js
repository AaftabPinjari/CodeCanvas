import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    blogsArray: [],
    isError: 0,
}


export const createBlogs = createAsyncThunk("createBlogs", async (data) => {

    const res = await fetch(`https://${import.meta.env.VITE_MOCK_API_KEY}.mockapi.io/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await res.json()
        return result
    } catch (error) {
        return error
    }

})
export const deletBlog = createAsyncThunk("deletBlog", async (id) => {

    const res = await fetch(`https://${import.meta.env.VITE_MOCK_API_KEY}.mockapi.io/blogs/${id}`, { method: "Delete" });
    try {
        const result = await res.json()
        return result
    } catch (error) {
        return error
    }

})
export const readBlogs = createAsyncThunk("readBlogs", async () => {

    const res = await fetch(`https://${import.meta.env.VITE_MOCK_API_KEY}.mockapi.io/blogs`);
    try {
        const result = await res.json()
        // console.log(result)
        return result
    } catch (error) {
        return error
    }

})

export const updateBlog = createAsyncThunk("updateBlog", async (data) => {
    // console.log("dataaaaaa", data)

    const res = await fetch(`https://${import.meta.env.VITE_MOCK_API_KEY}.mockapi.io/blogs/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await res.json()
        // console.log(result)
        return result
    } catch (error) {
        return error
    }

})

export const blogsSLice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //create blog
        builder.addCase(createBlogs.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createBlogs.fulfilled, (state, action) => {
            state.isLoading = false
            state.blogsArray.push(action.payload)
        })
        builder.addCase(createBlogs.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
            // console.log("error: ", action.payload)
        })
        //read blogs
        builder.addCase(readBlogs.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(readBlogs.fulfilled, (state, action) => {
            state.isLoading = false
            state.blogsArray = action.payload
        })
        builder.addCase(readBlogs.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
            // console.log("error: ", action.payload)
        })

        //delete blog
        builder.addCase(deletBlog.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deletBlog.fulfilled, (state, action) => {
            state.isLoading = false
            const { id } = action.payload

            state.blogsArray = state.blogsArray.filter(item => item.id !== id)
            // console.log("action", action.payload.id)
        })
        builder.addCase(deletBlog.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
            // console.log("error: ", action.payload)
        })

        //update blog
        builder.addCase(updateBlog.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateBlog.fulfilled, (state, action) => {
            state.isLoading = false
            state.blogsArray = state.blogsArray.map(item => (
                item.id === action.payload.id ? action.payload : item))

            // console.log("update", action.payload)
            // state.blogsArray.push(action.payload)
        })
        builder.addCase(updateBlog.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
            // console.log("error: ", action.payload)
        })
    }

})

export default blogsSLice.reducer;