import React, {useState} from 'react'
import loginService from './services/login'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)

  const handleUsername = event => {
    setUsername(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      setErrorMessage("Wrong username or password")
    }
  }
  
  const login = () => (
    <div>
      <h1> Login to the Bloglist App </h1>
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
        <p> {errorMessage} </p>
        <div>
          <button type = "submit"> Login </button>
        </div>
      </form>
    </div>
  ) 


  return (
    <div>
    {user === null && login()}
    </div>
  )
}

export default App 