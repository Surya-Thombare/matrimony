import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const featuredProfiles = [
  { id: 1, name: 'Priya S.', age: 28, occupation: 'Software Engineer', location: 'Mumbai', image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Rahul M.', age: 32, occupation: 'Doctor', location: 'Delhi', image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Anita K.', age: 26, occupation: 'Teacher', location: 'Bangalore', image: '/placeholder.svg?height=300&width=300' },
]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Match</h1>
              <p className="text-xl mb-6">Join thousands of happy couples who found love on SoulMate</p>
              <Button asChild size="lg" className="bg-white text-red-500 hover:bg-amber-100">
                <Link href="/register">Start Your Journey</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg?height=400&width=600" alt="Happy Couple" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProfiles.map((profile) => (
              <Card key={profile.id} className="overflow-hidden transition-transform hover:scale-105">
                <Image src={profile.image} alt={profile.name} width={300} height={300} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{profile.name}, {profile.age}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{profile.occupation}</p>
                  <p className="text-gray-600">{profile.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600">
              <Link href="/search">Explore More Profiles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose SoulMate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Verified Profiles</h3>
              <p>We ensure all profiles are genuine and verified for your safety and trust.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Matching</h3>
              <p>Our intelligent algorithm helps you find the most compatible matches.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Privacy Control</h3>
              <p>You have full control over your information and who can view your profile.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

