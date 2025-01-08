import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SoulMate</h3>
            <p>Connecting hearts, one match at a time.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-amber-200 transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-200 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-200 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-amber-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-amber-200 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-amber-200 transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 SoulMate Indian Matrimonial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

