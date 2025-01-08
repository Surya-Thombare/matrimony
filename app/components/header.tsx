import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">SoulMate</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-amber-200 transition-colors">Home</Link></li>
            <li><Link href="/search" className="hover:text-amber-200 transition-colors">Search</Link></li>
            <li><Link href="/register" className="hover:text-amber-200 transition-colors">Register</Link></li>
          </ul>
        </nav>
        <Link href="/login">
          <Button variant="secondary" className="bg-white text-red-500 hover:bg-amber-100">Login</Button>
        </Link>
      </div>
    </header>
  )
}

