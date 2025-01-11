import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">International Vaishy Mahasammelan</h3>
            <p>Connecting families within the community</p>
            <div className="mt-4">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:8954929675" className="hover:text-amber-200">
                  Main Contact: +91 89549 29675
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-amber-200 transition-colors">Terms and Conditions</Link></li>
              {/* <li><Link href="/event-details" className="hover:text-amber-200 transition-colors">Event Details</Link></li> */}
              <li><Link href="/register" className="hover:text-amber-200 transition-colors">Registration</Link></li>
              <li><Link href="/contact" className="hover:text-amber-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Event Address</h4>
            <p>Agrawal Dharmshala</p>
            <p>Gandhi Road, Dehradun</p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-200 transition-colors"><Facebook /></a>
                <a href="#" className="hover:text-amber-200 transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-amber-200 transition-colors"><Twitter /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 International Vaishy Mahasammelan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}