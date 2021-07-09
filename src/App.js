import React, {useState, useEffect} from 'react'
//import loginService from './services/login'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [user, setUser] = useState(null)
  //const [errorMessage, setErrorMessage] = useState('')

  const handleUsername = event => {
    setUsername(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  /*
  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch {
      setErrorMessage("Wrong username or password")
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }
  */

  return (
    <div>
      <h1> Login To The Bloglist App </h1>
      <form> 
        <div> 
          Username:
          <input 
          type = "text"
          value = {username}
          onChange = {handleUsername}
          />
        </div>
        <div>
          Password:
          <input 
          type = "password"
          value = {password}
          onChange = {handlePassword}
          /> 
        </div>
        <div>
          <button type = "submit"> Login </button>
        </div>
      </form>
    </div>
  )
}
export default App 