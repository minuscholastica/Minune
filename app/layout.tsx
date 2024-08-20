import '@/app/globals.css'
import { Metadata } from 'next'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Minune',
  description: 'Untimely Meditations at Minune',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}