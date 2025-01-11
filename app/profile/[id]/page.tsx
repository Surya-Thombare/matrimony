'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/utils/supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AuthGuard from '@/app/components/AuthGuard'

export default function ProfileDetailsPage() {
  const [profile, setProfile] = useState<any>(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
      } else {
        setProfile(data)
      }
    }
    fetchProfile()
  }, [id])

  if (!profile) return <div>Loading...</div>

  return (
    <AuthGuard>
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>{profile.name}'s Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Name:</strong> {profile.name}</p>
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
          </CardContent>
        </Card>
      </div>
    </AuthGuard>
  )
}

