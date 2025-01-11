import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

const committeeMembers = [
  {
    name: 'Deepak Singhal',
    role: 'National Vice President',
    phone: '9412059573'
  },
  {
    name: 'Ram Gopal',
    role: 'State President',
    phone: '9837042187'
  },
  {
    name: 'K. K. Garg',
    role: 'State Coordinator',
    phone: '9358133076'
  },
  {
    name: 'Nitin Jain',
    role: 'State Treasurer',
    phone: '9410729586'
  },
  {
    name: 'Dinesh C. Goyal',
    role: 'Coordinator',
    phone: '8954929675'
  },
  {
    name: 'Vishal Gupta',
    role: 'City Youth Leader',
    phone: '7017955300'
  },
  {
    name: 'Nita Garg',
    role: 'Women City President',
    phone: '7060826619'
  }
]

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Office Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>18-Alkhat Bazar,</p>
            <p>Dehradun, Uttarakhand</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:ivfukddoon@gmail.com" className="text-red-500 hover:text-red-600">
              ivfukddoon@gmail.com
            </a>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6">Committee Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committeeMembers.map((member, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-red-500 hover:text-red-600"
              >
                <Phone className="h-4 w-4" />
                {member.phone}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Bank Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><strong>Bank:</strong> Punjab National Bank</li>
            <li><strong>Account Number:</strong> 4211001001731114</li>
            <li><strong>IFSC Code:</strong> PUNB0421100</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}