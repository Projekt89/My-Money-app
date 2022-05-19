import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export function useLogin() {
  const [isCanceled, setIsCanceled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  async function login(email, password) {
    setError(null)
    setIsPending(true)
    //Try sign it user
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      dispatch({type: 'LOGIN', payload: res.user})

      if (!isCanceled) {
        setIsPending(false)
        setError(null)
      }

    } catch(err) {
      if (!isCanceled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect( () => {
    return () => setIsCanceled(true)
  }, [])

  return { login, isPending, error }
}
