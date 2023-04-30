import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Timed Message Bot',
  description: 'No one looks at pinned messages! Send timed messages throughout your server and automatically answer questions with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-berry-blue to-rose-600 text-pale`}>{children}</body>
    </html>
  )
}
