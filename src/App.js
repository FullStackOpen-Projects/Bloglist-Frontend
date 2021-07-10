import React, {useState} from 'react'
import loginService from './services/login'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = event => {
    setUsername(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleLogin = async event => {
    event.preventDefault()
    try {
      await loginService.login({username, password})
      setUsername('')
      setPassword('')
    }
    catch {
      console.log("Wrong username or password")
    }
  }
  

  return (
    <div>
      <h1> Login To The Bloglist App </h1>
      <form onSubmit = {handleLogin}> 
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