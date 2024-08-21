import '@/app/globals.css'
import { Metadata } from 'next'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Minune',
  description: 'Untimely Meditations at Minune',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <ClientLayout>
          <main className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}