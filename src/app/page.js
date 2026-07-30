'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* FOMO Top Banner */}
      <div className={styles.fomoBanner}>
        🔥 <strong>Attenzione:</strong> Accettiamo solo 3 nuove collaborazioni per questo mese. <a href="#contact">Prenota il tuo slot ora!</a>
      </div>

      <nav className={`${styles.nav} glass`}>
        <div className={styles.logo}>VicLo <span className="gradient-text">Lab</span></div>
        <div className={styles.navLinks}>
          <a href="#services">Servizi</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">Chi Siamo</a>
          <a href="#contact">Contatti</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            🚀 I contenuti che convertono di più nel 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I Tuoi Competitor Stanno Già Usando i Droni. E Tu?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            L'attenzione del cliente è tutto. Dalle <strong>riprese drone spettacolari</strong> per vendere i tuoi immobili in metà tempo, alle <strong>tessere fedeltà stampate in 3D</strong> per il tuo club, fino a <strong>menu NFC</strong> e <strong>bomboniere high-tech</strong>. Uniamo creatività visiva e innovazione per farti dominare il tuo settore. Tu cosa aspetti?
          </motion.p>
          <motion.div 
            className={styles.ctaWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#contact" className={styles.primaryBtn}>Voglio Dominare il Mercato</a>
            <span className={styles.urgencyText}>⚡ Solo 3 posti rimasti per questo mese!</span>
          </motion.div>
        </motion.div>
        
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </section>

      {/* Services Details Section */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Smetti di perdere clienti.</h2>
          <p className={styles.sectionSubtitle}>Non offriamo semplici servizi, costruiamo armi di marketing. Ecco come trasformiamo i tuoi contatti in clienti paganti con attrezzatura DJI e Apple di ultima generazione.</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              className={`${styles.serviceCard} glass`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>I Risultati Parlano.</h2>
          <p className={styles.sectionSubtitle}>Guarda alcuni dei nostri lavori recenti. Riprese drone cinematiche, stampe 3D millimetriche e design NFC.</p>
        </div>
        
        <div className={styles.portfolioGrid}>
          {/* Mockup Portfolio Items - Verranno poi caricati da Supabase */}
          <motion.div className={styles.portfolioItem} whileHover={{ scale: 1.02 }}>
            <div className={styles.portfolioImagePlaceholder}>🚁 Ripresa Villa di Lusso</div>
            <div className={styles.portfolioInfo}>
              <h4>Ripresa Drone Immobiliare</h4>
              <p>Tour aereo per una villa con piscina. Venduta in 7 giorni.</p>
            </div>
          </motion.div>
          <motion.div className={styles.portfolioItem} whileHover={{ scale: 1.02 }}>
            <div className={styles.portfolioImagePlaceholder}>🖨️ Tessere Club 3D</div>
            <div className={styles.portfolioInfo}>
              <h4>Fidelizzazione Sportiva</h4>
              <p>Tessere magnetiche stampate in 3D per i soci di un club locale.</p>
            </div>
          </motion.div>
          <motion.div className={styles.portfolioItem} whileHover={{ scale: 1.02 }}>
            <div className={styles.portfolioImagePlaceholder}>📱 Menu NFC Ristorante</div>
            <div className={styles.portfolioInfo}>
              <h4>Menu Smart Contactless</h4>
              <p>Design in legno stampato 3D con chip NFC per ordinazioni istantanee ai tavoli.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={`${styles.aboutContainer} glass`}>
          <motion.div 
            className={styles.aboutContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Chi Siamo: <span className="gradient-text">VicLo Lab</span></h2>
            <p className={styles.aboutText}>
              Dietro ogni progetto di successo ci sono persone affamate di innovazione. Siamo <strong>Lorenzo Monaco</strong> e <strong>Valentin Victor Coteanu</strong>. Non siamo la classica e noiosa agenzia: siamo un laboratorio creativo, giovane, dinamico e implacabile.
            </p>
            <p className={styles.aboutText}>
              Lavoriamo su commissione e copriamo qualsiasi tipologia di evento. Dalla precisione millimetrica della stampa 3D (bomboniere, gadget esclusivi) all'adrenalina pura del drone shooting. Uniamo creatività e alta tecnologia per trasformare la tua idea in qualcosa che i tuoi clienti non potranno ignorare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Analytics / Proof Section */}
      <section className={styles.statsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>I Dati Non Mentono.</h2>
          <p className={styles.sectionSubtitle}>Smettila di sperare. Inizia a misurare. Ecco cosa succede quando uniamo contenuti di alta qualità e innovazione tech.</p>
        </div>
        
        <div className={`${styles.graphContainer} glass`}>
          <div className={styles.graphRow}>
            <div className={styles.graphLabel}>Visualizzazioni Media (Post Standard)</div>
            <div className={styles.graphBarTrack}>
              <motion.div 
                className={styles.graphBarRed}
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
              >
                <span>25%</span>
              </motion.div>
            </div>
          </div>
          <div className={styles.graphRow}>
            <div className={styles.graphLabel}>Visualizzazioni con Drone & Video Premium (VicLo Lab)</div>
            <div className={styles.graphBarTrack}>
              <motion.div 
                className={styles.graphBarGreen}
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <span>+380% 🚀</span>
              </motion.div>
            </div>
          </div>
          
          <div className={styles.graphRow} style={{ marginTop: '2rem' }}>
            <div className={styles.graphLabel}>Ritorno Clienti (Metodi Tradizionali)</div>
            <div className={styles.graphBarTrack}>
              <motion.div 
                className={styles.graphBarRed}
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                <span>30%</span>
              </motion.div>
            </div>
          </div>
          <div className={styles.graphRow}>
            <div className={styles.graphLabel}>Ritorno con Tessere 3D & NFC (VicLo Lab)</div>
            <div className={styles.graphBarTrack}>
              <motion.div 
                className={styles.graphBarBlue}
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.1 }}
              >
                <span>92% 🔥</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final FOMO & Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.glowOrb3}></div>
        <motion.div 
          className={styles.contactContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.fomoTitle}>I tuoi clienti non aspettano.</h2>
          <h2 className={styles.fomoTitleSecondary}>I tuoi competitor non dormono.</h2>
          <p className={styles.contactSubtitle}>
            Il mercato premia chi agisce veloce. Allora, <strong>iniziamo a collaborare</strong> o preferisci continuare a guardare gli altri rubarti i clienti?
          </p>
          
          <div className={`${styles.contactCards} glass`}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <a href="mailto:viclo4961@gmail.com">viclo4961@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <a href="tel:3517746110">Lorenzo: +39 351 774 6110</a>
            </div>
          </div>

          <a 
            href="https://wa.me/393517746110?text=Ciao%20ragazzi!%20Vorrei%20bloccare%20uno%20slot%20con%20VicLo%20Lab." 
            className={styles.primaryBtn} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ marginTop: '2rem' }}
          >
            Blocca il tuo Slot su WhatsApp
          </a>
        </motion.div>
      </section>
      
      <footer className={styles.footer}>
        <p>&copy; 2026 VicLo Lab di Lorenzo Monaco & Valentin Victor Coteanu. Tutti i diritti riservati.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="/login" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'underline' }}>Area Riservata Staff</a>
        </div>
      </footer>
    </main>
  );
}

const servicesList = [
  { icon: "📸", title: "Immobiliare Premium", description: "Foto interne ed esterne ultra-dettagliate e video presentazioni che seguono i trend di TikTok e IG. Fai vendere le tue case al doppio della velocità." },
  { icon: "🚁", title: "Riprese Drone Cinematiche", description: "Ispezioni tetti e riprese dall'alto che lasciano i clienti a bocca aperta. Droni DJI ad alta risoluzione." },
  { icon: "🖨️", title: "Stampa 3D & Fidelizzazione", description: "Tessere fedeltà personalizzate, bomboniere hi-tech e stand di design stampati in 3D per raccogliere recensioni in sede." },
  { icon: "📱", title: "Menu Digitali & Smart NFC", description: "Ristorante? Digitalizzati oggi. Menu veloci, belli e contactless. Portachiavi NFC e smart object per interagire all'istante." },
];
