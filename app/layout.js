import { Inter } from 'next/font/google'
import './globals.css'
import AnalyticsProvider from '../components/AnalyticsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The 5-Star Standard - Transform Your Massage Practice',
  description: 'The Complete 16-Page Blueprint That Transforms Your Massage Practice Into a Client Magnet. Get your FREE guide today!',
  keywords: 'massage therapy, business growth, client retention, 5-star reviews, massage practice',
  openGraph: {
    title: 'The 5-Star Standard - Transform Your Massage Practice',
    description: 'The Complete 16-Page Blueprint That Transforms Your Massage Practice Into a Client Magnet',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 5-Star Standard - Transform Your Massage Practice',
    description: 'The Complete 16-Page Blueprint That Transforms Your Massage Practice Into a Client Magnet',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}
