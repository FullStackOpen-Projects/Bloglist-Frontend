import axios from 'axios'
const baseURL = 'http://localhost:3003/api/users'

const getUserBlogs = async user => {
    const blogs = await axios.get(baseURL + '/' + String(user.username),
    {
        headers: {Authorization: `Bearer ${user.token}`}
    })
    return blogs.data
}

const mapBlogsArray = blogs => {
    return blogs.map(blog => blog.title)
}


const displayUserBlogs = (user, blogs) => (
    <div>
    <h1> Here are your blogs! </h1>
    <p> {user.name} is logged in </p>
    <li> {mapBlogsArray(blogs)} </li>
    </div>
)

export {displayUserBlogs, getUserBlogs}