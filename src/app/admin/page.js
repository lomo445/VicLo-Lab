import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import styles from './admin.module.css'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={`${styles.sidebar} glass`}>
        <h2>VicLo Lab</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '-1rem' }}>
          Admin: Lorenzo & Valentin
        </p>
        <nav>
          <a href="/admin" className={styles.active}>Dashboard</a>
          <a href="/admin/portfolio">Gestisci Portfolio</a>
          <a href="/admin/services">Gestisci Servizi</a>
          <form action="/auth/signout" method="post">
            <button className={styles.logoutBtn} type="submit">Esci</button>
          </form>
        </nav>
      </aside>
      
      <main className={styles.content}>
        <header className={styles.header}>
          <h1>Benvenuti Lorenzo & Valentin</h1>
          <p>Area riservata VicLo Lab. Da qui gestite l'impero.</p>
        </header>

        <section className={styles.dashboardGrid}>
          <div className={`${styles.statCard} glass`}>
            <h3>Prodotti/Servizi</h3>
            <p className={styles.statNumber}>12</p>
            <a href="/admin/services" className={styles.actionLink}>Aggiungi +</a>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3>Foto Portfolio</h3>
            <p className={styles.statNumber}>45</p>
            <a href="/admin/portfolio" className={styles.actionLink}>Carica Foto +</a>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3>Pagamenti (Stripe)</h3>
            <p className={styles.statNumber}>€ 1,250</p>
            <a href="#" className={styles.actionLink}>Vedi Dettagli</a>
          </div>
        </section>
      </main>
    </div>
  )
}
