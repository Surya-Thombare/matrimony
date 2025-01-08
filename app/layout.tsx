import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoulMate - Indian Matrimonial',
  description: 'Find your perfect match with our Indian matrimonial service',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  try {
    const { data: { session } } = await supabase.auth.getSession()

    return (
      <html lang="en">
        <body className={`${inter.className} bg-amber-50 text-gray-800`}>
          <Header session={session} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    )
  } catch (error) {
    console.error('Error in RootLayout:', error)
    // Return a fallback layout or error message
    return (
      <html lang="en">
        <body className={`${inter.className} bg-amber-50 text-gray-800`}>
          <div>An error occurred. Please try again later.</div>
        </body>
      </html>
    )
  }
}

