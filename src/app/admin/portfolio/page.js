'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import styles from '../admin.module.css'; // riutilizziamo lo stile admin

export default function GestionePortfolio() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const supabase = createClient();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return;

    setLoading(true);
    setMessage('');

    try {
      // 1. Carica l'immagine sullo storage Supabase (nel bucket 'portfolio-images')
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Recupera URL pubblico dell'immagine
      const { data: publicUrlData } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);

      // 2. Inserisci il record nel database (tabella 'portfolio')
      const { error: dbError } = await supabase
        .from('portfolio')
        .insert([{ title: title, image_url: publicUrlData.publicUrl }]);

      if (dbError) throw dbError;

      setMessage('Immagine caricata con successo nel portfolio! 🎉');
      setTitle('');
      setFile(null);
    } catch (error) {
      setMessage(`Errore: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.adminLayout}>
      <aside className={`${styles.sidebar} glass`}>
        <h2>VicLo Lab</h2>
        <nav>
          <a href="/admin">Dashboard</a>
          <a href="/admin/portfolio" className={styles.active}>Gestisci Portfolio</a>
          <a href="/admin/services">Gestisci Servizi</a>
          <form action="/auth/signout" method="post">
            <button className={styles.logoutBtn} type="submit">Esci</button>
          </form>
        </nav>
      </aside>

      <main className={styles.content}>
        <header className={styles.header}>
          <h1>Aggiungi al Portfolio</h1>
          <p>Carica nuove foto di droni, stampe 3D o immobili.</p>
        </header>

        <div className={`${styles.statCard} glass`} style={{ maxWidth: '600px' }}>
          <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Titolo (es. Ripresa Villa Roma):</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.3)', color: 'white' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Immagine / Foto:</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setFile(e.target.files[0])} 
                required 
                style={{ color: 'white' }}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{ padding: '1rem', background: 'var(--accent-blue)', color: 'white', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', marginTop: '1rem' }}
            >
              {loading ? 'Caricamento in corso...' : 'Carica nel Portfolio'}
            </button>

            {message && <p style={{ marginTop: '1rem', color: message.includes('Errore') ? '#ff4b2b' : '#10b981' }}>{message}</p>}
          </form>
        </div>
      </main>
    </div>
  );
}
