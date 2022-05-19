import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  function printLog() {
    console.log(user);
  }

  return (
    <nav className={styles.navbar} onClick={printLog}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        { user && (
          <>
            <li> Hi, {user.displayName}</li>
            <li>
              <button className="btn" onClick={() => logout()}>
                Logout
              </button>
            </li>
          </>
        )}
        { !user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
