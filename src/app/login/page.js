import { login, signup } from './actions'
import styles from './login.module.css'

export default function LoginPage({ searchParams }) {
  const error = searchParams?.error;

  return (
    <div className={styles.container}>
      <form className={`${styles.form} glass`}>
        <h2>Accesso VicLo Lab</h2>
        
        {error && (
          <div style={{ padding: '1rem', background: 'rgba(255,0,0,0.1)', border: '1px solid #ff4b2b', color: '#ff4b2b', borderRadius: '8px', marginBottom: '1rem' }}>
            <strong>Errore:</strong> {error}
          </div>
        )}

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        <div className={styles.actions}>
          <button formAction={login} className={styles.primaryBtn}>Log in</button>
          <button formAction={signup} className={styles.secondaryBtn}>Sign up</button>
        </div>
      </form>
    </div>
  )
}
