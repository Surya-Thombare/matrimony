import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="IVF Logo"
            width={50}
            height={50}
            className="rounded-full bg-white p-1"
          />
          <Link href="/" className="text-3xl font-bold">
            International Vaishya Mahasammelan
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-amber-200 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-amber-200 transition-colors">About</Link></li>
            <li><Link href="/register" className="hover:text-amber-200 transition-colors">Register</Link></li>
            <li><Link href="/contact" className="hover:text-amber-200 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}