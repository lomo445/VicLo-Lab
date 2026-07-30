import './globals.css';

export const metadata = {
  title: 'VicLo Lab | Creative Team',
  description: 'Contenuti creativi, riprese drone, stampe 3D, e menu digitali.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
