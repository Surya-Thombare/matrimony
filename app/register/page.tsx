'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  age: z.number().min(18, { message: 'You must be at least 18 years old.' }).max(100, { message: 'Please enter a valid age.' }),
  gender: z.enum(['male', 'female', 'other'], { required_error: 'Please select a gender.' }),
  occupation: z.string().min(2, { message: 'Occupation must be at least 2 characters.' }),
  education: z.string().min(2, { message: 'Education must be at least 2 characters.' }),
  location: z.string().min(2, { message: 'Location must be at least 2 characters.' }),
  religion: z.string().min(2, { message: 'Religion must be at least 2 characters.' }),
  motherTongue: z.string().min(2, { message: 'Mother tongue must be at least 2 characters.' }),
  maritalStatus: z.enum(['single', 'divorced', 'widowed'], { required_error: 'Please select a marital status.' }),
  about: z.string().min(10, { message: 'Please write at least 10 characters about yourself.' }).max(500, { message: 'Bio should not exceed 500 characters.' }),
})

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      age: undefined,
      gender: undefined,
      occupation: '',
      education: '',
      location: '',
      religion: '',
      motherTongue: '',
      maritalStatus: undefined,
      about: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Registration Successful',
        description: 'Your profile has been created.',
      })
      form.reset()
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Your Profile</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Your age" {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your status" />
                      </SelectTI'll continue the text stream from the cut-off point:

<cut_off_point>
SelectValue placeholder="Select your status" />
                      </SelectT
</cut_off_point>

rigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Your occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education</FormLabel>
                  <FormControl>
                    <Input placeholder="Your highest education" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input placeholder="Your religion" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="motherTongue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother Tongue</FormLabel>
                  <FormControl>
                    <Input placeholder="Your mother tongue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About Me</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about yourself" 
                    className="resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Write a brief description about yourself (max 500 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Create Profile'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

