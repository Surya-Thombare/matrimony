import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone } from 'lucide-react'

const committeeMembers = [
  { name: 'Dinesh C. Goyal', role: 'Coordinator', phone: '8954929675' },
  { name: 'Deepak Singhal', role: 'National Vice President', phone: '9412059573' },
  { name: 'Ram Gopal', role: 'State President', phone: '9837042187' },
  { name: 'Krishna Kumar Garg', role: 'State Coordinator', phone: '9358133076' },
]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">International Vaishy Mahasammelan</h1>
            <p className="text-2xl mb-6">Matrimonial Meet - February 23, 2025</p>
            <p className="text-xl mb-8">Agrawal Dharmshala, Gandhi Road, Dehradun</p>
            <Button asChild size="lg" className="bg-white text-red-500 hover:bg-amber-100">
              <Link href="/register">Register for the Event</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Starting from 8:30 AM</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Venue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Agrawal Dharmshala</p>
                <p>Gandhi Road, Dehradun</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Event Type</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Matrimonial Meet</p>
                <p>For eligible youth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Committee Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <a href={`tel:${member.phone}`} className="text-red-500 hover:text-red-600">
                      {member.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}