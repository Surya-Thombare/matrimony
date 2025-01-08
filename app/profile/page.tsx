'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setProfile(user.user_metadata)
      } else {
        router.push('/login')
      }
    }
    fetchProfile()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (!profile) return <div>Loading...</div>

  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Occupation:</strong> {profile.occupation}</p>
            <p><strong>Education:</strong> {profile.education}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Religion:</strong> {profile.religion}</p>
            <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p>
            <p><strong>Marital Status:</strong> {profile.maritalStatus}</p>
            <p><strong>About:</strong> {profile.about}</p>
          </div>
          <Button onClick={handleLogout} className="mt-6">Logout</Button>
        </CardContent>
      </Card>
    </div>
  )
}

