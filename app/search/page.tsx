'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/utils/supabase'
import AuthGuard from '../components/AuthGuard'

interface Profile {
  id: string
  name: string
  age: number
  gender: string
  occupation: string
  education: string
  location: string
  religion: string
  mother_tongue: string
  marital_status: string
  image_url: string
}

export default function SearchPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [filters, setFilters] = useState({
    gender: 'all',
    minAge: 18,
    maxAge: 50,
    location: '',
    religion: '',
    maritalStatus: 'all',
  })
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')

    if (error) {
      console.error('Error fetching profiles:', error)
    } else {
      setProfiles(data || [])
    }
  }

  const filteredProfiles = profiles
    .filter((profile) => {
      return (
        (filters.gender === 'all' || profile.gender.toLowerCase() === filters.gender) &&
        profile.age >= filters.minAge &&
        profile.age <= filters.maxAge &&
        (filters.location === '' || profile.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.religion === '' || profile.religion.toLowerCase() === filters.religion.toLowerCase()) &&
        (filters.maritalStatus === 'all' || profile.marital_status.toLowerCase() === filters.maritalStatus) &&
        (searchTerm === '' ||
          profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.education.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'age') return a.age - b.age
      return 0
    })

  return (
    <AuthGuard>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Match</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Input
              placeholder="Search by name, occupation, or education"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <Select onValueChange={(value) => setFilters({ ...filters, gender: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <label className="text-sm font-medium mb-2 block">Age Range: {filters.minAge} - {filters.maxAge}</label>
              <Slider
                min={18}
                max={100}
                step={1}
                value={[filters.minAge, filters.maxAge]}
                onValueChange={(value) => setFilters({ ...filters, minAge: value[0], maxAge: value[1] })}
              />
            </div>
            <Input
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
            <Input
              placeholder="Religion"
              value={filters.religion}
              onChange={(e) => setFilters({ ...filters, religion: e.target.value })}
            />
            <Select onValueChange={(value) => setFilters({ ...filters, maritalStatus: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Marital Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <Select onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="age">Age</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden transition-transform hover:scale-105">
              <Image src={profile?.image_url || "/placeholder.svg?height=400&width=600"} alt={profile.name} width={300} height={300} className="w-full h-64 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex justify-between items-center">
                  <span>{profile.name}, {profile.age}</span>
                  <Badge variant="secondary">{profile.marital_status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{profile.occupation}</p>
                <p className="text-gray-600 mb-2">{profile.education}</p>
                <p className="text-gray-600 mb-2">{profile.location}</p>
                <div className="flex justify-between items-center mt-4">
                  <Badge variant="outline">{profile.religion}</Badge>
                  <Badge variant="outline">{profile.mother_tongue}</Badge>
                </div>
                <Button asChild className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600">
                  <Link href={`/profile/${profile.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AuthGuard>
  )
}

