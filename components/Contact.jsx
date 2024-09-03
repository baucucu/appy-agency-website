'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CodeIcon } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.name.trim()) validationErrors.name = "Name is required"
        if (!formData.email.trim()) validationErrors.email = "Email is required"
        if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Email is invalid"
        if (!formData.projectType) validationErrors.projectType = "Project type is required"
        if (!formData.message.trim()) validationErrors.message = "Message is required"

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, you would typically send the data to a server here
            console.log("Form submitted:", formData)
            alert("Thank you for your message! We'll get back to you soon.")
        } else {
            setErrors(validationErrors)
        }
    }

    return (
        <section id="contact" className="w-full py-24 md:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            < div className="container mx-auto px-4 md:px-6" >
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact us</h2>
                <Card className="w-full max-w-md mx-auto shadow-lg">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-center mb-4">
                            <CodeIcon className="h-8 w-8 text-primary" />
                            <CardTitle className="text-3xl font-bold ml-2">appy.agency</CardTitle>
                        </div>
                        <CardDescription>Fill out the form below to get in touch with us.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="projectType">Project Type</Label>
                                    <Select name="projectType" value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a project type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web">Web Development</SelectItem>
                                            <SelectItem value="mobile">Mobile App</SelectItem>
                                            <SelectItem value="desktop">Desktop Application</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.projectType && <span className="text-red-500 text-sm">{errors.projectType}</span>}
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={handleSubmit}>Send Message</Button>
                    </CardFooter>
                </Card>
            </div >
        </section >
    )
}