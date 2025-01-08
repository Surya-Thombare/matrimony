import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const featuredProfiles = [
  { id: 1, name: 'Priya S.', age: 28, occupation: 'Software Engineer', location: 'Mumbai', image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Rahul M.', age: 32, occupation: 'Doctor', location: 'Delhi', image: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Anita K.', age: 26, occupation: 'Teacher', location: 'Bangalore', image: '/placeholder.svg?height=100&width=100' },
]

export default function FeaturedProfiles() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProfiles.map((profile) => (
          <Card key={profile.id}>
            <CardHeader>
              <CardTitle>{profile.name}, {profile.age}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Image src={profile.image} alt={profile.name} width={100} height={100} className="rounded-full" />
              <div>
                <p>{profile.occupation}</p>
                <p>{profile.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

