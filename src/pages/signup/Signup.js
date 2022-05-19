import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

//styles
import styles from './Signup.module.css'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, name)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>SignUp</h2>
      <label>
        <span>Name:</span>
        <input
          type="text"
          value={name}
          onChange={ (e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
        />
      </label>
      { !isPending && <button className='btn'>SingUp!</button>}
      { isPending && <button disabled className='btn'>Loading</button>}
      { error && <p>{error}</p>}
    </form>
  )
}
